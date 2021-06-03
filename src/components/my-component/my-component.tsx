import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  private t9n = {
    greeting: 'Hallo',
    farewell: 'Auf Wiedersehen'
  }

  render() {
    return <second-comp t9n={this.t9n} user-name={'Jana'}></second-comp>;
  }
}
