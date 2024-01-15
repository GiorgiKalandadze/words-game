import {LitElement, html, css} from 'lit';
import './modules/words/k-words-view.js';

export class KApp extends LitElement {

    static styles = css`
      :host {
        display: block;
      }
    `;

    render() {
        return html`<k-words-view></k-words-view>`
    }

}

customElements.define('k-app', KApp);