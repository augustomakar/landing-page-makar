class Custos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/Custos.css">

      <section class="reducao-custos">
        <div>
          <p>QUER REDUZIR CUSTOS COM PESSOAL?</p>
          <p>CONSULTE NOSSA TERCEIRIZAÇÃO DO DEPARTAMENTO FINANCEIRO</p>
        </div>
      </section>
      
    `;
    }
}
customElements.define('comp-custos', Custos);
