import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import './sections/home-sect'
import './sections/about-sect'
import './sections/contact-sect'
import './sections/knowledge-sect'
import './sections/proyect-sect'


@customElement('web-page')
class WebPage extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      width: 100%;
      background: var(--background-prin);
      padding: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      scroll-snap-type: y mandatory;
      scroll-snap-points-y: repeat(100vh);
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
      grid-template-areas: 
        'home'
        'about'
        'know'
        'proyect'
        'contact';
    }

    home-sect {
      grid-area: home;
      scroll-snap-align: start;
    }

    about-sect {
      grid-area: about;
      scroll-snap-align: start;
    }

    knowledge-sect {
      grid-area: know;
      scroll-snap-align: start;
    }

    proyect-sect {
      grid-area: proyect;
      scroll-snap-align: start;
    }

    contact-sect {
      grid-area: contact;
      scroll-snap-align: start;
    }
  `

  render() {
    return html`
      <!-- Secciones de la pagina -->
      <home-sect id="home"></home-sect>
      <about-sect></about-sect>
      <knowledge-sect></knowledge-sect>
      <proyect-sect></proyect-sect>
      <contact-sect></contact-sect>
    `
  }
}
