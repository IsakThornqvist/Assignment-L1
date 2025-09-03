import { template } from './submit-button-template.js'

customElements.define('submit-button',

  /**
   * Custom element representing a submit button
   */
  class extends HTMLElement {
    #mySubmitButton

    /**
     * Creates an instance of the submit-button custom element.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#mySubmitButton = this.shadowRoot.querySelector('#submitButtonContainer')
    }

    /**
     * Called when the submit-button element is added to the DOM.
     */
    connectedCallback () {
      console.log('<submit-button> added')
    }

    /**
     * Called when the submit-button element is removed from the DOM.
     */
    disconnectedCallback () {
      console.log('<submit-button> removed')
    }
  }
)
