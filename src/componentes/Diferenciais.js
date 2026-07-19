class Diferenciais extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/Diferenciais.css">

      <section class="panel-diferenciais">
          <div class="panel-diferenciais-titulo">
              <p>Nós fazemos mais por você!</p>
              <span>COMO PRESTAMOS NOSSOS SERVIÇOS</span>
          </div>

          <div class="panel-diferenciais-detalhamento">
              <div class="panel-diferenciais-detalhamento-itens">
                  <img src="./assets/lixeira.png" alt="" />
                  <p>Zero Papel</p>
                  <span>
                      Operamos de forma digital o que nos torna
                      ecológicos.
                  </span>
              </div>
              <div class="panel-diferenciais-detalhamento-itens">
                  <img src="./assets/engrenagem.png" alt="" />
                  <p>Processos</p>
                  <span>
                      Processos inteligentes e automatizados evitam
                      retrabalho.
                  </s>
              </div>
              <div class="panel-diferenciais-detalhamento-itens">
                  <img src="./assets/celular.png" alt="" />
                  <p>Digital</p>
                  <span>
                      Nossa plataforma pode ser acessada por
                      Smartphones
                  </p>
              </div>
          </div>
      </section>



      
    `;
    }
}
customElements.define('comp-diferenciais', Diferenciais);
