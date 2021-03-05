import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Element() el: HTMLAppRootElement;
  render() {
    return (
      <host>
          <exchange-display></exchange-display>
      </host>
    );
  }
}
