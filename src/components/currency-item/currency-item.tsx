import { Component, Host, h, Prop, EventEmitter, Event, Element, Watch, State } from '@stencil/core';

@Component({
  tag: 'currency-item',
  styleUrl: 'currency-item.css',
  shadow: true,
})
export class CurrencyItem {
  @Element() el: HTMLCurrencyItemElement;
  @Prop() symbol: string = 'EUR';
  @Prop() rate: number = 1;
  @Prop() value: number = 1;
  @Event() baseChange: EventEmitter<any>;
  @Event() removeSymbol: EventEmitter<any>;
  @State() inputLength: number = 3;
  @State() inputVal: number = 1;

  @Watch('rate')
  @Watch('value')
  updateHandler(newValue) {
    if (newValue) {
      this.calculateInputRate();
    }
  }

  componentWillLoad() {
    this.calculateInputRate();
  }

  private calculateInputRate = () => {
    const newValue = this.formatValue();
    this.inputVal = newValue;
    this.inputLength = String(newValue).length;
  }

  private formatValue = () => {
    const val = Number(this.value * this.rate);
    return Math.round((val + Number.EPSILON) * 1000) / 1000;
  }

  private updateExchange = e => {
    const value = Number(e.target.value);
    if (isNaN(value)) {
      return;
    }
    this.baseChange.emit({ symbol: this.symbol, value })
  }

  private resizeInput = e => {
    const size = e.target.value.length;
    if (size > 3) {
      e.target.style.width = size + "ch";
    }
  }

  private unloadHandler = () => {
    this.removeSymbol.emit();
  }

  render() {
    return (
      <Host>
        <input
          type="number"
          style={{ '--input-length': `${this.inputLength}ch` }}
          id={`input${this.symbol}`}
          onInput={this.resizeInput}
          onChange={this.updateExchange}
          value={this.inputVal}
        >
        </input>
        <label htmlFor={`input${this.symbol}`}>{this.symbol}</label>
        <div class="remove" onClick={this.unloadHandler}>×</div>
      </Host>
    );
  }

}
