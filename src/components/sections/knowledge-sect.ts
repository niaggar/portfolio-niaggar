import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement('knowledge-sect')
class KnowledgeSect extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      background: red;
    }
  `

  render() {
    return html`
      <div id="test">
        <div><p>knowledge</p></div>
      </div>
      `
  }
}
