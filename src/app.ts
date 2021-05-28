import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './components/nav-bar'


@customElement('app-container')
class App extends LitElement {

  @property()
  selected: 'home' | 'about' | 'knowledge' | 'proyects' | 'contact' = 'home'

  // Uso de styles para generar el css limitado al componente
  static styles = css`
    #root {
      width: 100%;
      min-height: 300vh;
      background: var(--background-prin);
    }

    #line {
      width: 100%;
      height: 10px;
      background-color: var(--color-main);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
  `

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <div id="root">
        <div id="line"></div>
        <nav-bar selected=${this.selected}></nav-bar>
      </div>
    `
  }
}