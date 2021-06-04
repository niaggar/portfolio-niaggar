import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Importa la barra de navegacion
import './components/nav-bar';

// Importa las secciones de la pagina
import './components/sections/home-sect';
import './components/sections/about-sect';
import './components/sections/contact-sect';
import './components/sections/knowledge-sect';
import './components/sections/proyect-sect';

// Define el tipo de valores que puede tener la ruta
type Route = 'home' | 'about' | 'knowledge' | 'proyects' | 'contact';

// Objeto que contiene la posicion respecto a la pagina de cada seccion
type Distances = {
  home: DOMRect;
  about: DOMRect;
  knowledge: DOMRect;
  proyects: DOMRect;
  contact: DOMRect;
};

// -------------------------------------------------- //
// Componente principal que contiene toda la pagina.  //
// -------------------------------------------------- //
// Tiene por labor controlar el estado actual de la   //
// ruta y contener en un solo lugar todo el contenido //
// -------------------------------------------------- //
@customElement('app-container')
class App extends LitElement {
  @property()
  selected: Route = 'home';

  // Uso de styles para generar el css limitado al componente
  static styles = css`
    #root {
      width: 100vw;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 350px 1fr;
      grid-template-areas: 'navbar  webpage';
    }

    * {
      box-sizing: border-box;
    }

    #line {
      width: 100%;
      height: 10px;
      background-color: var(--color-main);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      box-shadow: 0px 0px 2px 0px var(--color-main);
      margin: 0;
    }

    nav-bar {
      grid-area: navbar;
    }

    #page {
      grid-area: webpage;
      scroll-snap-type: y mandatory;
      scroll-snap-points-y: repeat(100vh);
      display: grid;
      background: var(--background-prin);
      grid-template-columns: auto;
      grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
      grid-template-areas:
        'home'
        'about'
        'know'
        'proyect'
        'contact';
      box-sizing: border-box;
    }
  `;

  // Primera actualizacion de la pagina
  firstUpdated() {
    // Determina la posicion de cada seccion en la pagina
    let distances: Distances = {
      home: this.shadowRoot!.querySelector('#home')!.getBoundingClientRect(),
      about: this.shadowRoot!.querySelector('#about')!.getBoundingClientRect(),
      knowledge:
        this.shadowRoot!.querySelector('#knowledge')!.getBoundingClientRect(),
      proyects:
        this.shadowRoot!.querySelector('#proyects')!.getBoundingClientRect(),
      contact:
        this.shadowRoot!.querySelector('#contact')!.getBoundingClientRect(),
    };
    // Agrega el evento que determina en que seccion de la
    // pagina se esta segun la posicion del scroll
    window.addEventListener('scroll', () => {
      // Detecta la posicion actual en la pagina
      const actualPos = window.pageYOffset;
      let offSet = 200;
      // Define en que seccion se esta posicionado
      if (actualPos < distances.home.top + offSet) {
        this.selected = 'home';
      } else if (actualPos < distances.about.top + offSet) {
        this.selected = 'about';
      } else if (actualPos < distances.knowledge.top + offSet) {
        this.selected = 'knowledge';
      } else if (actualPos < distances.proyects.top + offSet) {
        this.selected = 'proyects';
      } else if (actualPos < distances.contact.top + offSet) {
        this.selected = 'contact';
      }
    });
    // Cada que se actualice la pagina regresa al home
    setTimeout(() => {
      this._changeRoute('home');
      window.scrollTo(0, 0);
    }, 300);
  }

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <div id="line"></div>
      <div id="root">
        <nav-bar
          @change-route=${(e: CustomEvent) => {
            this._changeRoute(e.detail.route!);
          }}
          selected=${this.selected}
        ></nav-bar>
        <div id="page">
          <home-sect id="home"></home-sect>
          <about-sect id="about"></about-sect>
          <knowledge-sect id="knowledge"></knowledge-sect>
          <proyect-sect id="proyects"></proyect-sect>
          <contact-sect id="contact"></contact-sect>
        </div>
      </div>
    `;
  }

  // Metodo para cambiar la ruta - desplazar el scroll
  private _changeRoute(route: Route) {
    const obj = this.shadowRoot!.querySelector(`#${route}`)! as HTMLElement;
    const startPos = window.pageYOffset;
    const fin = startPos + obj.getBoundingClientRect().top;
    window.scrollTo(0, fin);
  }
}
