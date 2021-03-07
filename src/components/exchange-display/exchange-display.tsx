import { Component, Host, h, Prop, Fragment, State } from '@stencil/core';
import { getLatest } from '../../global/API'

export interface ratesObject {
  [rate: string]: number
}

@Component({
  tag: 'exchange-display',
  styleUrl: 'exchange-display.css',
  shadow: true,
})
export class ExchangeDisplay {
  @Prop({ mutable: true }) symbols: Array<string> = [];
  @Prop({ mutable: true }) selectedSymbols: Array<string> = ['EUR'];
  @Prop({ mutable: true }) baseValue: number = 1;
  @State() rates: ratesObject = {};

  componentWillLoad() {
    this.callInitialServices();
  }

  private async callInitialServices() {
    const latest = await getLatest();
    this.rates = latest.rates;
    this.symbols = Object.keys(this.rates);
    this.symbols.sort();
  }

  private addAnotherCurrency = e => {
    const chosenSymbol = e.target.value;
    this.selectedSymbols.push(chosenSymbol);
    this.symbols = this.symbols.filter(item => item !== chosenSymbol);
    e.target.selectedIndex = 0;
  }

  private renderCurrencySelect = () => <span class="currency-selector">
    <select onChange={this.addAnotherCurrency}>
      <option disabled selected hidden>To...</option>
      {this.symbols.map(curr =>
        <option value={curr}>{curr}</option>
      )}
    </select>
  </span>

  private baseChangeHandler = async e => {
    const { symbol, value } = e.detail;
    this.baseValue = value;
    const latest = await getLatest(symbol);
    let euroFix = {};
    if (symbol === 'EUR') {
      // weird issue when base is EURO!!
      euroFix = { EUR: 1 };
    }
    this.rates = { ...latest.rates, ...euroFix };
  }

  private removeSymbolHandler = e => {
    const { symbol } = e.target;
    this.selectedSymbols = this.selectedSymbols.filter(item => item !== symbol);
    this.symbols.push(symbol);
    this.symbols.sort();
  }

  private renderCurrency = () =>
    this.selectedSymbols.map(
      symbol =>
        <currency-item
          symbol={symbol}
          rate={this.rates[symbol]}
          onBaseChange={this.baseChangeHandler}
          onRemoveSymbol={this.removeSymbolHandler}
          value={this.baseValue}
        ></currency-item>
    )

  render() {
    return (
      <Host>
        { this.symbols.length &&
          <Fragment>
            {this.renderCurrency()}
            {this.renderCurrencySelect()}
          </Fragment>
        }
      </Host>
    );
  }

}
