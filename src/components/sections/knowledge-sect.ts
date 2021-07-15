import { LitElement, html, css, TemplateResult, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../icon-knowledge'


@customElement('knowledge-sect')
class KnowledgeSect extends LitElement {
  knowledge: Array<{img: number, level: 1 | 2 | 3, name: string}>;

  constructor() {
    super();
    this.knowledge = [
      {
        name: 'JavaScript',
        level: 2,
        img: 0,
      },
      {
        name: 'TypeScript',
        level: 1,
        img: 1,
      },
      {
        name: 'Python',
        level: 2,
        img: 2,
      },
      {
        name: 'Kotlin',
        level: 1,
        img: 3,
      },
      {
        name: 'HTML',
        level: 2,
        img: 4,
      },
      {
        name: 'CSS',
        level: 2,
        img: 5,
      },
      {
        name: 'Git',
        level: 2,
        img: 6,
      },
      {
        name: 'Github',
        level: 1,
        img: 7,
      },
    ];
    console.log(this.knowledge);
  }

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
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .colum-cards {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      gap: 10px;
      width: 70%;
      height: fit-content;
      
      display: grid;
      grid-auto-rows: 8rem;
      grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    }
  `;

  render() {
    return html`
      <div id="border">
        <div class="content">
          <h2>Tecnologias que conozco</h2>
          <div class="colum-cards">
            ${this.knowledge.map((e) => {
              return html`<icon-know name=${e.name} level=${e.level} img=${e.img}></icon-know>`
            })}
          </div>
        </div>
      </div>
    `;
  }
}
