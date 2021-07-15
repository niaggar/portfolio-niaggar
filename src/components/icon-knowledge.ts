import { LitElement, html, css, TemplateResult, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const images = [
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 2 C 20.941406 2 18.1875 2.96875 16.4375 4.375 C 14.6875 5.78125 14 7.589844 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 7.265625 15 5.410156 15.792969 4.09375 17.46875 C 2.777344 19.144531 2 21.644531 2 25 C 2 28.355469 2.777344 30.855469 4.09375 32.53125 C 5.410156 34.207031 7.265625 35 9.09375 35 L 14 35 L 14 40.90625 C 14 42.410156 14.6875 44.21875 16.4375 45.625 C 18.1875 47.03125 20.941406 48 25 48 C 29.058594 48 31.8125 47.03125 33.5625 45.625 C 35.3125 44.21875 36 42.410156 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 42.734375 35 44.589844 34.207031 45.90625 32.53125 C 47.222656 30.855469 48 28.355469 48 25 C 48 21.644531 47.222656 19.144531 45.90625 17.46875 C 44.589844 15.792969 42.734375 15 40.90625 15 L 36 15 L 36 9.09375 C 36 7.550781 35.316406 5.738281 33.5625 4.34375 C 31.808594 2.949219 29.054688 2 25 2 Z M 25 4 C 28.746094 4 31.015625 4.875 32.3125 5.90625 C 33.609375 6.9375 34 8.136719 34 9.09375 L 34 21 C 34 22.65625 32.65625 24 31 24 L 19 24 C 16.941406 24 15.167969 25.269531 14.40625 27.0625 C 14.277344 27.359375 14.160156 27.675781 14.09375 28 C 14.027344 28.324219 14 28.65625 14 29 L 14 33 L 9.09375 33 C 7.824219 33 6.648438 32.503906 5.6875 31.28125 C 4.726563 30.058594 4 28.042969 4 25 C 4 21.957031 4.726563 19.941406 5.6875 18.71875 C 6.648438 17.496094 7.824219 17 9.09375 17 L 26 17 L 26 12 L 16 12 L 16 9.09375 C 16 8.199219 16.386719 6.980469 17.6875 5.9375 C 18.988281 4.894531 21.257813 4 25 4 Z M 20 7 C 18.898438 7 18 7.898438 18 9 C 18 10.101563 18.898438 11 20 11 C 21.101563 11 22 10.101563 22 9 C 22 7.898438 21.101563 7 20 7 Z M 36 17 L 40.90625 17 C 42.175781 17 43.351563 17.496094 44.3125 18.71875 C 45.273438 19.941406 46 21.957031 46 25 C 46 28.042969 45.273438 30.058594 44.3125 31.28125 C 43.351563 32.503906 42.175781 33 40.90625 33 L 24 33 L 24 38 L 34 38 L 34 40.90625 C 34 41.800781 33.613281 43.019531 32.3125 44.0625 C 31.011719 45.105469 28.742188 46 25 46 C 21.257813 46 18.988281 45.105469 17.6875 44.0625 C 16.386719 43.019531 16 41.800781 16 40.90625 L 16 29 C 16 28.792969 16.023438 28.601563 16.0625 28.40625 C 16.34375 27.039063 17.550781 26 19 26 L 31 26 C 33.746094 26 36 23.746094 36 21 Z M 30 39 C 28.898438 39 28 39.898438 28 41 C 28 42.101563 28.898438 43 30 43 C 31.101563 43 32 42.101563 32 41 C 32 39.898438 31.101563 39 30 39 Z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 24 L 4 45 A 1.0001 1.0001 0 0 0 4 45.005859 A 1.0001 1.0001 0 0 0 4.0039062 45.0625 A 1.0001 1.0001 0 0 0 4.0078125 45.111328 A 1.0001 1.0001 0 0 0 4.0097656 45.123047 A 1.0001 1.0001 0 0 0 4.0234375 45.212891 A 1.0001 1.0001 0 0 0 4.0449219 45.294922 A 1.0001 1.0001 0 0 0 4.0625 45.34375 A 1.0001 1.0001 0 0 0 4.0859375 45.402344 A 1.0001 1.0001 0 0 0 4.1289062 45.486328 A 1.0001 1.0001 0 0 0 4.15625 45.533203 A 1.0001 1.0001 0 0 0 4.1777344 45.568359 A 1.0001 1.0001 0 0 0 4.2167969 45.619141 A 1.0001 1.0001 0 0 0 4.2402344 45.648438 A 1.0001 1.0001 0 0 0 4.28125 45.693359 A 1.0001 1.0001 0 0 0 4.3066406 45.720703 A 1.0001 1.0001 0 0 0 4.3730469 45.777344 A 1.0001 1.0001 0 0 0 4.3789062 45.783203 A 1.0001 1.0001 0 0 0 4.4492188 45.833984 A 1.0001 1.0001 0 0 0 4.4628906 45.84375 A 1.0001 1.0001 0 0 0 4.4726562 45.849609 A 1.0001 1.0001 0 0 0 4.546875 45.890625 A 1.0001 1.0001 0 0 0 4.6386719 45.931641 A 1.0001 1.0001 0 0 0 4.6992188 45.953125 A 1.0001 1.0001 0 0 0 4.7421875 45.964844 A 1.0001 1.0001 0 0 0 4.7480469 45.966797 A 1.0001 1.0001 0 0 0 4.8300781 45.984375 A 1.0001 1.0001 0 0 0 4.890625 45.992188 A 1.0001 1.0001 0 0 0 4.9453125 45.998047 A 1.0001 1.0001 0 0 0 4.9648438 45.998047 A 1.0001 1.0001 0 0 0 5 46 A 1.0001 1.0001 0 0 0 5.0292969 46 L 45 46 A 1.0001 1.0001 0 0 0 45.707031 44.292969 L 26.414062 25 L 45.707031 5.7070312 A 1.0001 1.0001 0 0 0 45 4 L 24 4 L 5 4 z M 6 6 L 21.585938 6 L 6 21.585938 L 6 6 z M 24.414062 6 L 42.585938 6 L 24.292969 24.292969 L 6 42.585938 L 6 24.414062 L 24.414062 6 z M 25 26.414062 L 42.585938 44 L 7.4140625 44 L 25 26.414062 z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9 7 L 12 41 L 26 45 L 40 41 C 41 29.667 42 18.333 43 7 L 9 7 z M 11.183594 9 L 40.816406 9 L 38.128906 39.455078 L 26 42.919922 L 13.871094 39.455078 L 11.183594 9 z M 18.550781 15 L 17.589844 27 L 30.580078 27 L 30.169922 32 L 26 32.619141 L 21.880859 32 L 21.699219 30 L 17.839844 30 L 18.230469 35 L 25.990234 37 L 33.759766 35 L 34.75 23 L 22.089844 23 L 22.410156 19 L 30.769531 19 L 31 21 L 34.699219 21 L 34 15 L 18.550781 15 z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path fill-rule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 2 C 15.496094 2 15.003906 2.183594 14.625 2.5625 L 11.8125 5.40625 C 11.660156 5.488281 11.53125 5.605469 11.4375 5.75 L 2.5625 14.625 C 1.804688 15.378906 1.804688 16.617188 2.5625 17.375 L 14.625 29.4375 C 15.382813 30.191406 16.617188 30.191406 17.375 29.4375 L 29.4375 17.375 C 30.195313 16.621094 30.195313 15.382813 29.4375 14.625 L 17.375 2.5625 C 16.996094 2.183594 16.503906 2 16 2 Z M 16 4.03125 L 27.96875 16 L 16 27.96875 L 4.03125 16 L 12.3125 7.71875 L 14.0625 9.46875 C 14.015625 9.636719 14 9.816406 14 10 C 14 10.738281 14.402344 11.371094 15 11.71875 L 15 20.28125 C 14.402344 20.628906 14 21.261719 14 22 C 14 23.105469 14.894531 24 16 24 C 17.105469 24 18 23.105469 18 22 C 18 21.261719 17.597656 20.628906 17 20.28125 L 17 12.4375 L 20.0625 15.5 C 20.019531 15.660156 20 15.828125 20 16 C 20 17.105469 20.894531 18 22 18 C 23.105469 18 24 17.105469 24 16 C 24 14.894531 23.105469 14 22 14 C 21.828125 14 21.660156 14.019531 21.5 14.0625 L 17.9375 10.5 C 17.980469 10.339844 18 10.171875 18 10 C 18 8.894531 17.105469 8 16 8 C 15.816406 8 15.636719 8.015625 15.46875 8.0625 L 13.71875 6.3125 Z"/></svg>`,
  svg`<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>`,
]

@customElement('icon-know')
class iconKnow extends LitElement {
  @property({ type: String })
  name: string = '';

  @property({ type: Number })
  level: 1 | 2 | 3 = 1;

  @property({ type: Number })
  img: number = 0;
  
  static styles = css`
    #container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border-radius: 5pt;
      border: 2px dashed #f7f7f745;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: ease 0.6s;
      position: relative;
      overflow: hidden;
    }

    #container > svg {
      width: 3.4rem !important;
      height: 3.4rem !important;
      transition: ease 0.2s;
      fill: #f7f7f745;
    }

    #container:hover {
      background: var(--background-sec);
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 1);
    }

    #container:hover > svg {
      width: 2.5rem !important;
      height: 2.5rem !important;
      fill: var(--color-main);
    }

    .more-info {
      overflow: hidden;
      height: 0;
      color: var(--color-main);
      transition: height linear 0.3s;
    }

    .more-info * {
      text-align: center;
      line-height: 0;   
    }

    #container:hover .more-info {
      height: 3rem;
    }
  `;

  render() {
    console.log(this.img);
    
    return html`
      <div id="container">
        ${images[this.img]}
        <div class="more-info">
          <h3>${this.name}</h3>
          <p>${this.renderRating(this.level)}</p>
        </div>
      </div>
    `;
  }

  renderRating(ratingNumber: number): string {
    let starField = '★';
    let starUnfield = '☆';
    let ratingString = starField.repeat(ratingNumber) + starUnfield.repeat(5 - ratingNumber);
    return ratingString;
  }
}