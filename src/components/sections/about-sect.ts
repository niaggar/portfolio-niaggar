import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement('about-sect')
class AboutSect extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      background: blue
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
