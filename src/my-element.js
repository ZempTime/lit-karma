import { LitElement, html } from "@polymer/lit-element";

class MyElement extends LitElement {
  render() {
    return html`
      <h1>Hello</h1>
    `;
  }
}

customElements.define("my-element", MyElement);
