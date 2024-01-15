import {css, html, LitElement} from 'lit';
import './k-word-card.js';
import {sharedDesignStyles} from '../../shared-design-styles.js';
import {MEDIA_CHECKPOINTS} from '../../utils.js';
export class KWordsView extends LitElement {
    render() {
        return this.loading ? html`
        <p>TODO SKELETON</p>
        ` : html`
          <div class="card-items">
            <k-word-card
              id="source"
              class="card"
              .word="${this.list[this.wordIndex]['sourceWord']}">
            </k-word-card>
            <k-word-card
              id="target"
              class="card"
              hide-word
              .word="${this.list[this.wordIndex]['targetWord']}"
              @click="${this._onShowTargetWord}">
            </k-word-card>
          </div>
          <button class="design-button" @click="${this._onNextWordClick}">Next Word</button>
        `;
    }

    static properties = {
        list: {
            type: Array,
        },
        loading: {
            type: Boolean,
        },
        wordIndex: {
            type: Number,
        },
    }

    get sourceCard() {
        return this.shadowRoot.getElementById('target');
    }

    _loadWords() {
        this.list = [
            {
                "type": "adjective",
                "sourceLang": "en",
                "targetLang": "it",
                "sourceWord": "beautiful",
                "targetWord": "bello"
            },
            {
                "type": "adjective",
                "sourceLang": "en",
                "targetLang": "it",
                "sourceWord": "red",
                "targetWord": "rosso"
            },
            {
                "type": "adjective",
                "sourceLang": "en",
                "targetLang": "it",
                "sourceWord": "good",
                "targetWord": "buono"
            },
            {
                "type": "adjective",
                "sourceLang": "en",
                "targetLang": "it",
                "sourceWord": "black",
                "targetWord": "nero"
            }
        ];
        this.loading = false;
    }

    constructor() {
        super();
        this._initProperties();

    }

    _initProperties() {
        this.loading = true;
        this.list = [];
        this.wordIndex = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this._loadWords()
    }


    _onNextWordClick() {
        this.wordIndex += 1;
        if(this.wordIndex >= this.list.length) {
            this.wordIndex %= this.list.length;
        }
        this.sourceCard.hideWord = true;
    }

    _onShowTargetWord(e){
        e.currentTarget.hideWord = false;
    }

    static styles = [sharedDesignStyles, css`
      :host {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: var(--space-32);
      }
      
      .card-items {
        display: flex;
        align-items: center;
        gap: var(--space-16);
        max-width: 500px;
        margin-bottom: var(--space-24);
      }


      #target:hover {
        box-shadow: var(--shadow-raised);
        cursor: pointer;
      }


      @media only screen and (max-width: ${MEDIA_CHECKPOINTS.xSmall}px) {
        .card-items {
          flex-direction: column;
        }

      }
    `, ];
}

customElements.define('k-words-view', KWordsView);
