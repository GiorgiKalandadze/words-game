import {css, html, LitElement} from 'lit';
import {MEDIA_CHECKPOINTS} from '../../utils.js';

export class KWordCard extends LitElement {
    render() {
        return html`
          <p class="word">${this.word}</p>
        `;
    }

    constructor() {
        super();
        this.word = '';
    }

    static properties = {
        word: {
            type: String,
        },
        hideWord: {
            type: Boolean,
            attribute: 'hide-word',
            reflect: true,
        },
    };
    static styles = css`
      :host {
        width: 350px;
        display: flex;
        justify-content: center;
        border: 1px solid var(--color-invert-component-tr-70);
        border-radius: var(--border-radius-12);
        padding: var(--space-32);
        background-color: var(--color-invert-background-solid-30);
        font-size: 20px;
      }

      :host([hide-word]) .word {
        visibility: hidden;
      }

      @media only screen and (max-width: ${MEDIA_CHECKPOINTS.xSmall}px) {
        :host {
          width: 250px;
        }
      }

    `;


}

customElements.define('k-word-card', KWordCard);