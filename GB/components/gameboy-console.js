class GameBoyConsole extends HTMLElement {
constructor() {
super();
this.attachShadow({ mode: "open" });
}
static get styles() {
    return /* css */ `
      :host {
        --innerWidth: 300px;
        --height: 625px;
      }

      .container {
        --gameboy-bottom-depth: linear-gradient(transparent 95%, #0007 98%, #0006 98%);

        width: var(--innerWidth);
        height: var(--height);
        background-color: #d3ccd3;
        background-image: var(--gameboy-bottom-depth);
        border-radius: 12px 12px 75px 12px;
      }
    `;
  }
  connectedCallback() {
    this.render();
  }
render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${GameBoyConsole.styles}</style>
      <div class="container">
        <!-- Aquí irá el contenido de tu GameBoy -->
      </div>
    `;
  }
}
customElements.define("Gameboy-console", GameBoyConsole);
