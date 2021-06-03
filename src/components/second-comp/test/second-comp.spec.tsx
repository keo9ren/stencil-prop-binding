import { newSpecPage } from '@stencil/core/testing';
import { SecondComp } from '../second-comp';

describe('second-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SecondComp],
      html: `<second-comp></second-comp>`,
    });
    expect(page.root).toEqualHtml(`
      <second-comp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </second-comp>
    `);
  });
});
