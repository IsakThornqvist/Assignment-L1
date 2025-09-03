import { template } from './submit-button-template.js'

customElements.define('submit-button',

  /**
   *
   */
  class extends HTMLElement {
    #mySubmitButton

    /**
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#mySubmitButton = this.shadowRoot.querySelector('#submitButtonContainer')
    }

    /**
     *
     */
    connectedCallback () {
      console.log('<submit-button> added')
    }

    /**
     *
     */
    disconnectedCallback () {
      console.log('<submit-button> removed')
    }
  }
)
