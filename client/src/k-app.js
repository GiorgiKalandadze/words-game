import {LitElement, html, css} from 'lit';

export class KApp extends LitElement {
    static styles = css`
      :host {
        display: block;
      }
    `;
    render() {
        return html`<p>Hello from my template asd as d.</p>`;
    }

}
customElements.define('k-app', KApp);