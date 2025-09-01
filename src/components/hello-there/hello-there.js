import { template } from "./hello-there-template.js"

customElements.define('hello-there',

    class extends HTMLElement {
        #myHelloThere


        constructor () {
            super()

            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(template.content.cloneNode(true))
            this.#myHelloThere = this.shadowRoot.querySelector('#helloThereContainer')
        }

        connectedCallback () {
    console.log('<hello-there> added')
        }

        disconnectedCallback () {
            console.log('<hello-there> removed')
        }

    })