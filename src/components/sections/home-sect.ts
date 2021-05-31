import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement('home-sect')
class HomeSect extends LitElement {
  static styles = css`
    * { box-sizing: border-box; margin: 0; padding: 0; }

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
      flex-direction: column;
      border: 2px dashed #f7f7f745;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      padding: 15px;
    }

    .content {
      display: flex;
      justify-content: left;
      align-items: left;
      flex-direction: column;
      text-align: left;
      border-left: 3px solid var(--color-main);
      padding: 5px 0 5px 15px;
    }

    .title {
      font-family: 'Arvo', serif;
      font-size: 3.4rem;
      font-weight: normal;
    }

    .important {
      color: var(--color-main);
      font-weight: bold;
    }

    .subtitle {
      margin-top: 15px;
      font-size: 1.4rem;
      font-family: 'Source Sans Pro', sans-serif;
    }
  `

  render() {
    return html`
      <div id="border">
        <div class="content">
          <h1 class="title">Hola! <br>yo soy <span class="important">Nicolas</span></h1>
          <p class="subtitle">Aspirante a desarrollador web<br> & data scientist...</p>
        </div>
      </div>
    `
  }
}
