import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './components/nav-bar'
import './components/web-page'


@customElement('app-container')
class App extends LitElement {

  @property()
  selected: 'home' | 'about' | 'knowledge' | 'proyects' | 'contact' = 'home'

  // Uso de styles para generar el css limitado al componente
  static styles = css`
    #root {
      width: 100vw;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 350px auto;
      grid-template-areas: 'navbar  webpage';
    }

    #line {
      width: 100%;
      height: 10px;
      background-color: var(--color-main);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      box-shadow: 0px 0px 2px 0px var(--color-main);
      margin: 0;
    }

    nav-bar {
      grid-area: navbar;
    }

    web-page {
      grid-area: webpage;
    }
  `

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <div id="line"></div>
      <div id="root">
        <nav-bar selected=${this.selected}></nav-bar>
        <web-page></web-page>
      </div>
    `
  }
}
