import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import './sections/home-sect'
import './sections/about-sect'


@customElement('web-page')
class WebPage extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      background: var(--background-prin);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
    }

  `

  render() {
    return html`
      <!-- Secciones de la pagina -->
      <home-sect></home-sect>
      <about-sect></about-sect>
    `
  }
}
