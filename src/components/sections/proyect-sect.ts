import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('proyect-sect')
class ProyectSect extends LitElement {
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
      flex-direction: column;
      border: 2px dashed #f7f7f745;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      padding: 15px;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div id="border">
        <div class="content">
          <h2>Proyectos</h2>
        </div>
      </div>
    `;
  }
}
