import { newSpecPage } from '@stencil/core/testing';
import { ExchangeDisplay } from '../exchange-display';

describe('exchange-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExchangeDisplay],
      html: `<exchange-display></exchange-display>`,
    });
    expect(page.root).toEqualHtml(`
      <exchange-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </exchange-display>
    `);
  });
});
