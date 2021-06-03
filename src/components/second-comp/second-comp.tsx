import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'second-comp',
  styleUrl: 'second-comp.css',
  shadow: true,
})
export class SecondComp {

  @Prop()
  userName: string;

  @Prop()
  t9n: Record<string, string> = {
    greeting: 'Hello',
    farewell: 'Goodbye'
  }

  render() {
    return (
      <Host>
        <div>{this.t9n.greeting + ", " + this.userName }</div>
        <div>{this.t9n.farewell + ", " + this.userName }</div>
      </Host>
    );
  }

}
