import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './components/nav-bar'
import './components/web-page'

import './components/sections/home-sect'
import './components/sections/about-sect'
import './components/sections/contact-sect'
import './components/sections/knowledge-sect'
import './components/sections/proyect-sect'


type Route = 'home' | 'about' | 'knowledge' | 'proyects' | 'contact'

interface Distance {
  name: string
  range: {
    top: number
    down: number
  }
}

@customElement('app-container')
class App extends LitElement {

  distances: Distance[]

  constructor() {
    super()
    this.distances = []
  }

  @property()
  selected: Route = 'home'
  
  // Uso de styles para generar el css limitado al componente
  static styles = css`
    #root {
      width: 100vw;
      min-height: 100vh;
      display: grid;
      grid-template-columns: 350px 1fr;
      grid-template-areas: 'navbar  webpage';
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
      grid-template-columns: auto;
      grid-template-rows: 100vh 100vh 100vh 100vh 100vh;
      grid-template-areas: 
        'home'
        'about'
        'know'
        'proyect'
        'contact';
    }
  `

  firstUpdated() {
    // window.scrollTo(0, 0)
    let height = this.shadowRoot!.querySelector('#home')!.getBoundingClientRect().height
    this.distances = [
      {
        name: 'home',
        range: {
          top: this.shadowRoot!.querySelector('#home')!.getBoundingClientRect().top,
          down: this.shadowRoot!.querySelector('#home')!.getBoundingClientRect().top + height,
        }
      },
      {
        name: 'about',
        range: {
          top: this.shadowRoot!.querySelector('#about')!.getBoundingClientRect().top,
          down: this.shadowRoot!.querySelector('#about')!.getBoundingClientRect().top + height,
        }
      },
      {
        name: 'knowledge',
        range: {
          top: this.shadowRoot!.querySelector('#knowledge')!.getBoundingClientRect().top,
          down: this.shadowRoot!.querySelector('#knowledge')!.getBoundingClientRect().top + height,
        }
      },
      {
        name: 'proyects',
        range: {
          top: this.shadowRoot!.querySelector('#proyects')!.getBoundingClientRect().top,
          down: this.shadowRoot!.querySelector('#proyects')!.getBoundingClientRect().top + height,
        }
      },
      {
        name: 'contact',
        range: {
          top: this.shadowRoot!.querySelector('#contact')!.getBoundingClientRect().top,
          down: this.shadowRoot!.querySelector('#contact')!.getBoundingClientRect().top + height,
        }
      },
    ]

    window.addEventListener('scroll', () => {
      const actualPos = window.pageYOffset
      
      if (actualPos < this.distances[0].range.top + 100) {
        this.selected = 'home'
      } else if (actualPos < this.distances[1].range.top + 100) {
        this.selected = 'about'
      } else if (actualPos < this.distances[2].range.top + 100) {
        this.selected = 'knowledge'
      } else if (actualPos < this.distances[3].range.top + 100) {
        this.selected = 'proyects'
      } else if (actualPos < this.distances[4].range.top + 100) {
        this.selected = 'contact'
      }
    })
    this._changeRoute('home')
  }

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <div id="line"></div>
      <div 
        id="root"
      >
        <nav-bar 
          @change-route=${(e: CustomEvent) => {this._changeRoute(e.detail.route!)}}
          selected=${this.selected}
        ></nav-bar>
        <!-- <web-page></web-page> -->
        <div id="page">
          <home-sect id="home"></home-sect>
          <about-sect id="about"></about-sect>
          <knowledge-sect id="knowledge"></knowledge-sect>
          <proyect-sect id="proyects"></proyect-sect>
          <contact-sect id="contact"></contact-sect>
        </div>
      </div>
    `
  }

  private _changeRoute(route: Route) {
    const obj = this.shadowRoot!.querySelector(`#${route}`)! as HTMLElement
    const startPos = window.pageYOffset;
    const fin = startPos + obj.getBoundingClientRect().top
    window.scrollTo(0, fin)
  }
}
