import { template } from './hello-application-template.js'
import '../nickname-form/index.js'
import '../submit-button/index.js'

customElements.define('hello-application',

  /**
   * Custom element representing a hello application custom element
   */
  class extends HTMLElement {
    #myHelloApplication
    #nicknameForm

    /**
     * Creates an instance of the hello-application custom element.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#myHelloApplication = this.shadowRoot.querySelector('#helloApplicationContainer')
      this.#nicknameForm = this.shadowRoot.querySelector('nickname-form')
    }

    /**
     * Called when the hello-application element is added to the DOM.
     */
    connectedCallback () {
      this.#nicknameForm.addEventListener('nickname-submitted', this.handleSubmitName)
      console.log('<hello-application> added')
    }

    /**
     * Called when the hello-application element is removed from the DOM.
     */
    disconnectedCallback () {
      console.log('<hello-application> removed')
    }

    /**
     * Handles the nickname-submitted event from the nickname form.
     *
     * @param {CustomEvent} event - The event containing the submitted nickname.
     */
    handleSubmitName = (event) => {
      this.nickname = event.detail.nickname

      this.superSecretSuprise()
    }

    /**
     * Placeholder for now
     */
    superSecretSuprise () {
      console.log('super secret happens')
    }
  })
