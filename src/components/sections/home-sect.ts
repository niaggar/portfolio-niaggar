import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement('home-sect')
class HomeSect extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      background: red;
    }
  `

  render() {
    return html`
      <div id="test">
        <div><p>Hola</p></div>
      </div>
      `
  }
}
