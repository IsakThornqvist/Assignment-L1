import { template } from './nickname-form-template.js'
import '../nickname-form/index.js'
import '../submit-button/index.js'

customElements.define('nickname-form',
  /**
   * Custom element representing a nickname form
   */
  class extends HTMLElement {
    #myNickNameForm

    /**
     * Creates an instance of the nickname-form custom element.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#myNickNameForm = this.shadowRoot.querySelector('#nicknameContainer')
    }

    /**
     * Called when the element is added to the DOM.
     */
    connectedCallback () {
      this.shadowRoot.querySelector('#nicknameForm').addEventListener('submit', (event) => {
        event.preventDefault()

        const nicknameInput = this.shadowRoot.querySelector('#nicknameInput')
        const nickname = nicknameInput.value.trim()

        if (nicknameInput) {
          const nicknameSubmittedEvent = new CustomEvent('nickname-submitted', {
            detail: { nickname },
            bubbles: true,
            composed: true
          })

          this.dispatchEvent(nicknameSubmittedEvent)
        }
        console.log('Nickname submitted:', nickname)
      })
      console.log('<nickname-form> added')
    }

    /**
     * Called when the element is removed from the DOM.
     */
    disconnectedCallback () {
      console.log('<nickname-form> removed')
    }
  }
)
