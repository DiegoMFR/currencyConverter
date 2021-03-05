import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'currency-converter',
  styleUrl: 'currency-converter.css',
  shadow: true,
})
export class CurrencyConverter {
  @Element() el: HTMLCurrencyConverterElement;
  render() {
    return (
      <host>
          <exchange-display></exchange-display>
      </host>
    );
  }
}
