import { newSpecPage } from '@stencil/core/testing';
import { CurrencyItem } from '../currency-item';

describe('currency-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CurrencyItem],
      html: `<currency-item></currency-item>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </currency-item>
    `);
  });
});
