class MeuCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // this.shadowRoot.adoptedStyleSheets = [meuEstilo];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/MeuCard.css">


      <div class="card">
        <h1>COMPONENTE CRIADO</h1>
      </div>


      
    `;
    }
}
customElements.define('meu-card', MeuCard);
