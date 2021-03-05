import { newE2EPage } from '@stencil/core/testing';

describe('exchange-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<exchange-display></exchange-display>');

    const element = await page.find('exchange-display');
    expect(element).toHaveClass('hydrated');
  });
});
