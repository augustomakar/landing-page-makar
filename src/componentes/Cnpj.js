class Cnpj extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `

      <link rel="stylesheet" href="./src/css/Cnpj.css">

                <div class="container-cnpj">

                        <div class="panel-cnpj-consulta">
                        <p>Consulte seu CNPJ aqui:</p>
                        <input
                                type="text"
                                name="cnpj"
                                id="cnpj"
                                placeholder="Digite seu cnpj"
                                value=""
                                
                        />
                        <button type="" id="btnCnpj">Consultar CNPJ</button>
                      </div>

                    <div
                        id="panel-cnpj"
                        class="panel-cnpj">
                        <p id="lblCnpj">CNPJ</p>
                        <p id="lblRazao">Razão Social</p>
                        <p id="lblStatus">Status</p>
                    </div>

                </div>

      
    `;
    }
}
customElements.define('comp-cnpj', Cnpj);
