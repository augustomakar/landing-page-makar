class Apresentacao extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // this.shadowRoot.adoptedStyleSheets = [meuEstilo];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `

          <link rel="stylesheet" href="./src/css/Apresentacao.css">

          <div class="content-section">
            <section class="box-apresentacao">
              <div class="texto-maior">
                <p>Contabilidade Gerencial Completa.</p>
                <p>
                  Planos A partir de
                  <span>R$ 89,00</span>
                </p>
              </div>
              <div class="texto-menor">
                <p>
                  Especializado em prestadores de serviço do Simples Nacional.
                </p>
                <p>Ajudamos pequenos empreendedores a crescer!</p>
              </div>
              <div class="box-apresentacao-botoes">
                 <a href="#precos"><button>Mostrar Planos</button></a>
                 <a href="#contato"><button>Começar Já!</button></a>
              </div>
            </section>
          </div>



      
    `;
    }
}
customElements.define('comp-apresentacao', Apresentacao);
