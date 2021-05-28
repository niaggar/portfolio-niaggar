import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import logo from '../assets/img/Logo_niaggar-06.svg'


type Route = 'home' | 'about' | 'knowledge' | 'proyects' | 'contact'

@customElement('nav-bar')
class NavBar extends LitElement {

  @property()
  selected: Route = 'home'

  // Uso de styles para generar el css limitado al componente
  static styles = css`
    :host {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 300px;
      background-color: var(--background-sec);
      z-index: 3;
      padding: 30px;
    }

    img {
      width: 150px;
    }

    ul {
      list-style: none;
    }

    li { 
      color: var(--color-text); 
      text-decoration: none;
    }
  `

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <img src=${logo} alt="Niaggar">
      <div class="hyperlinks">
        <ul>
          <li >
            <div data-test="hola" @click=${() => {
              this._changeRoute('home')
            }}>
              <h1 >home</h1>
            </div>
          </li>
          <li @click=${() => {this._changeRoute('about')}}>
            Acerca de mi
          </li>
          <li @click=${() => {this._changeRoute('knowledge')}}>
            Conocimientos
          </li>
          <li @click=${() => {this._changeRoute('proyects')}}>
            Proyectos
          </li>
          <li @click=${() => {this._changeRoute('contact')}}>
            Contactame
          </li>
        </ul>
      </div>
    `
  }

  private _changeRoute(route: Route) {
    this.dispatchEvent(new CustomEvent('change-route', {
       bubbles: true,
       detail: { route }
    }))
  }
}