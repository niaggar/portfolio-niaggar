import { LitElement, html, css, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import logo from '../assets/img/Logo_niaggar-07.svg'


type Route = 'home' | 'about' | 'knowledge' | 'proyects' | 'contact'

@customElement('nav-bar')
class NavBar extends LitElement {

  @property()
  selected: Route = 'home'

  // Uso de styles para generar el css limitado al componente
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 270px;
      background-color: var(--background-sec);
      z-index: 3;
      padding: 0 30px 0 50px;
      box-shadow: 0px 0px 8px 0px rgba(0,0,0,1);
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    #line {
      width: 0;
      height: 100%;
      position: absolute;
      right: 30px;
      top: 0;
      border-right: 2px dashed #f7f7f778;
    }

    img {
      width: 200px;
      align-self: center;
      position: relative;
    }

    #opt-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 230px;
      height: fit-content;
    }

    .hyperlinks {
      height: 300px;
      margin-top: 20px;
    }
    
    ul {
      list-style: none;
      padding: 0;
    }

    li { 
      color: var(--color-text);
      width: 200px;
      text-decoration: none;
      cursor: pointer;
      border-radius: 5px;
      border: 2px dashed #f7f7f745;
      padding: 10px;
      margin: 8px 0;
      transition: 0.3s;
    }

    li > a {
      font-family: 'Arvo', serif;
      font-size: 1.2rem;
      color: #f7f7f745;
    }

    li:hover > a {
      color: var(--color-main);
      font-weight: bold;
    }

    li:hover {
      background: #f7f7f70c;
      box-shadow: 0px 0px 8px 0px #0000008a;
      padding: 12px;
    }

    .active {
      background: #f7f7f70c;
      box-shadow: 0px 0px 8px 0px #0000008a;
      padding: 12px;
    }
    
    .active a {
      color: var(--color-main);
      font-weight: bold;
    }
  `

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <div id="line"></div>
      <div id="opt-container">
        <img src=${logo} alt="Niaggar">
        <div class="hyperlinks">
          <ul>
            <li id="home" class="active" @click=${() => {this._changeRoute('home')}}>
              <a>Home</a>
            </li>
            <li id="about" @click=${() => {this._changeRoute('about')}}>
              <a>Acerca de mi</a>
            </li>
            <li id="knowledge" @click=${() => {this._changeRoute('knowledge')}}>
              <a>Conociminetos</a>
            </li>
            <li id="proyects" @click=${() => {this._changeRoute('proyects')}}>
              <a>Proyectos</a>
            </li>
            <li id="contact" @click=${() => {this._changeRoute('contact')}}>
              <a>Contactame</a>
            </li>
          </ul>
        </div>
      </div>
    `
  }

  private _changeRoute(route: Route) {
    this.dispatchEvent(new CustomEvent('change-route', {
       bubbles: true,
       detail: { route }
    }))
    this._showActive(route)
  }

  private _showActive(route: Route) {

    const elements = {
      'home': this.shadowRoot!.getElementById('home')!,
      'about': this.shadowRoot!.getElementById('about')!,
      'knowledge': this.shadowRoot!.getElementById('knowledge')!,
      'proyects': this.shadowRoot!.getElementById('proyects')!,
      'contact': this.shadowRoot!.getElementById('contact')!
    }

    let elementName: keyof typeof elements;
    for (elementName in elements) {
      elements[elementName]
        .classList
        .remove('active')
    }

    elements[route]
      .classList
      .add('active')
  }
}