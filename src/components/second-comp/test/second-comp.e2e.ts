import { newE2EPage } from '@stencil/core/testing';

describe('second-comp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<second-comp></second-comp>');

    const element = await page.find('second-comp');
    expect(element).toHaveClass('hydrated');
  });
});
