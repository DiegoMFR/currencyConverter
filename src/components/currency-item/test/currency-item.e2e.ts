import { newE2EPage } from '@stencil/core/testing';

describe('currency-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<currency-item></currency-item>');

    const element = await page.find('currency-item');
    expect(element).toHaveClass('hydrated');
  });
});
