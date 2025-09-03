import { template } from './hello-application-template.js'
import '../nickname-form/index.js'
import '../submit-button/index.js'

customElements.define('hello-application',

  /**
   * Custom element representing a hello there custom element
   */
  class extends HTMLElement {
    #myHelloThere
    #nicknameForm
    #submitButton

    /**
     * Creates an instance of the hello-application custom element.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#myHelloThere = this.shadowRoot.querySelector('#helloThereContainer')
      this.#nicknameForm = this.shadowRoot.querySelector('#nicknameContainer')
      this.#submitButton = this.shadowRoot.querySelector('#submitButtonContainer')
    }

    /**
     * Called when the hello-application element is added to the DOM.
     */
    connectedCallback () {
      console.log('<hello-application> added')
    }

    /**
     * Called when the hello-application element is removed from the DOM.
     */
    disconnectedCallback () {
      console.log('<hello-application> removed')
    }
  })
