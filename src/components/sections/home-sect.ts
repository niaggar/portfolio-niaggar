import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement('home-sect')
class HomeSect extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      background: red;
    }
  `

  render() {
    return html`
      <div id="test">
        <div><p>Home</p></div>
      </div>
      `
  }
}
