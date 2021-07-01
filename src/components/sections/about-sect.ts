import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import img from '../../assets/img/about_page.svg';

@customElement('about-sect')
class AboutSect extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 30px 30px 40px;
    }

    #border {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      border: 2px dashed #f7f7f745;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      padding: 15px;
    }

    .content-txt {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      margin-right: 40px;
      width: 50%;
      text-align: right;
    }

    .content-txt h2 {
      font-size: 3.4rem;
      font-family: 'Arvo', serif;
      margin-bottom: 0;
      font-weight: normal;
    }

    .content-txt p {
      font-size: 1rem;
      line-height: 1.3;
      font-family: 'Lato', sans-serif;
    }

    .content-txt span,
    .content-txt i {
      color: var(--color-main);
      font-weight: bold;
    }

    .content-img {
      width: 200px;
    }
  `;

  render() {
    return html`
      <div id="border">
        <div class="content-txt">
          <h2>Ahora un poco <span>sobre mi</span></h2>
          <p>Yo soy <span>Nicolas Aguilera García</span> un estudiante de Física de la Universidad del Valle, con habilidades en razonamiento matemático y áreas de la tecnología como el desarrollo de software y el diseño web. Estoy interesado en <i>Data Science</i> y el <i>Machine Learning</i>. Me caracterizo por optimizar el tiempo, trabajar en equipo y adaptarme a nuevos entornos, tambien puedo planificar proyectos y sobre todo <span>aprender de manera autónoma.</span></p>
        </div>
        <div class="content-img">
          <img src=${img}>
        </div>
      </div>
    `;
  }
}
