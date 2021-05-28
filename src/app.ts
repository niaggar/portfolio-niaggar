import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('app-container')
class App extends LitElement {
  // Uso de styles para generar el css limitado al componente
  static get styles() {
    return css``
  }

  // Uso de render para generar el componente en el html
  render() {
    return html`
      <h1>Hola mundo</h1>
    `
  }
}


export default App
