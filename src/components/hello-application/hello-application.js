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
    #returnButton
    #nameBackwards

    /**
     * Creates an instance of the hello-application custom element.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#myHelloApplication = this.shadowRoot.querySelector('#helloApplicationContainer')
      this.#nicknameForm = this.shadowRoot.querySelector('nickname-form')
      this.#returnButton = this.shadowRoot.querySelector('#returnButton')
      this.#nameBackwards = this.shadowRoot.querySelector('#nameBackwards')
    }

    /**
     * Called when the hello-application element is added to the DOM.
     */
    connectedCallback () {
      this.#nicknameForm.addEventListener('nickname-submitted', this.handleSubmitName)

      this.#returnButton.addEventListener('click', this.handleReturnClick)

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

      const nameBackwards = this.nickname.split('').reverse().join('')

      this.#nameBackwards.textContent = nameBackwards

      const resultMessage = this.shadowRoot.querySelector('#resultMessage')
      if (resultMessage) {
        resultMessage.textContent = `${this.nickname} spelled backwards is`
      }

      this.superSecretSuprise()
      this.hideNickNameForm()
    }

    /**
     * Placeholder for now
     */
    superSecretSuprise () {
      console.log('super secret happens')
    }

    /**
     * Hides the nickname form by adding the 'hidden' class.
     */
    hideNickNameForm () {
      this.#nicknameForm.classList.add('hidden')
      this.#returnButton.classList.remove('hidden')
    }

    /**
     * Handles the return button click event.
     */
    handleReturnClick = () => {
      this.showNickNameForm()
    }

    /**
     * Clears the nickname input field in the nickname form.
     */
    clearNameInput () {
      const nicknameInput = this.#nicknameForm.shadowRoot.querySelector('#nicknameInput')
      if (nicknameInput) {
        nicknameInput.value = ''
      }
    }

    /**
     * Shows the nickname form by removing the 'hidden' class.
     */
    showNickNameForm () {
      this.clearNameInput()
      this.#nicknameForm.classList.remove('hidden')
      this.#returnButton.classList.add('hidden')
      console.log('Nickname form shown again')
    }
  })
