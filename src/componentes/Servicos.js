class Servicos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `

      <link rel="stylesheet" href="./src/css/Servicos.css">

      <section class="nossos-servicos-section" >
          <div class="panel-diferenciais">
            <p>Nossos Serviços</p>
          </div>

          <div class="nossos-servicos">
            <div>
              <img
                src="./assets/pessoal.png"
                alt="" />
            </div>
            <div>
              <span>DEPARTAMENTO PESSOAL</span>
              <p>&nbsp;</p>
              <p>
                Abrange todos os serviços relacionados a folha de
                pagamento e manutenção do cadastro de funcionários,
                assim como registro dos funcionários, de forma
                integrada.
              </p>
            </div>

            <div>
              <img
                src="./assets/contabilidade.png"
                alt="" />
            </div>
            <div>
              <span>CONTABILIDADE</span>
              <p>&nbsp;</p>
              <p>
                A escrituração contábil é planejada e executada de
                acordo com as Normas Internacionais de Contabilidade –
                IFRS, adequadas à individualidade de cada empresa e às
                características das atividades desenvolvidas.
              </p>
            </div>

            <div>
              <img
                src="./assets/escrita.png"
                alt="" />
            </div>
            <div>
              <span>ESCRITA FISCAL</span>
              <p>&nbsp;</p>
              <p>
                Prestamos assessoria a pessoas físicas e jurídicas sobre
                questões tributárias e legais, com a apuração dos
                devidos impostos e entrega das obrigações acessórias.
              </p>
            </div>

            <div>
              <img
                src="./assets/pericia.png"
                alt="" />
            </div>
            <div>
              <span>PERÍCIA</span>
              <p>&nbsp;</p>
              <p>
                Efetuamos cálculos periciais e elaboramos laudos e
                pareceres técnicos.
              </p>
            </div>

            <div>
              <img
                src="./assets/bpo.png"
                alt="" />
            </div>
            <div>
              <span>BPO FINANCEIRO</span>
              <p>&nbsp;</p>
              <p>
                EEconomize terceirizando seu departamento financeiro.
                Fazemos o contas a pagar/receber, boletos e emissão de
                notas fiscais.
              </p>
            </div>

            <div>
              <img
                src="./assets/consultoria.png"
                alt="" />
            </div>
            <div>
              <span>CONSULTORIA</span>
              <p>&nbsp;</p>
              <p>
                Prestamos consultoria para as empresas visando melhorar
                seus processos internos, precificação, tributação, etc.
              </p>
            </div>
          </div>
        </section>
      
    `;
    }
}
customElements.define('comp-servicos', Servicos);
