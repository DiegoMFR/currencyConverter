import { newE2EPage } from '@stencil/core/testing';

describe('currency-converter', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('currency-converter');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('currency-converter >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
