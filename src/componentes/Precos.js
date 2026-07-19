class Precos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/Precos.css">

      <Section>
        <div class="price-container">
          <div class="price-title">
            <p class="price-title-p1">Planos</p>
            <p class="price-title-p2">Valores Mensais</p>
          </div>
          <div class="price-table">
            <div class="price-cards price-card-white">
              <p class="price-card-branco-texto1">MEI</p>
              <p class="price-card-branco-texto1">A PARTIR DE</p>
              <p class="price-card-branco-texto2">
                R$ <span class="price-card-branco-texto3">89</span>
              </p>
              <p class="price-card-branco-texto4">MEI</p>
              <p class="price-card-branco-texto5">SEM FUNCIONÁRIOS</p>
              <p class="price-card-branco-texto5">
                PRESTAÇÃO DE SERVIÇOS
              </p>

              <a href="#contato"><button class="price-card-branco-button">
                QUERO ESSE !
              </button></a>
            </div>

            <div class="price-cards price-card-black">
              <p class="price-card-branco-texto1">MEI</p>
              <p class="price-card-branco-texto1">A PARTIR DE</p>
              <p class="price-card-branco-texto2">
                R$ <span class="price-card-branco-texto3">89</span>
              </p>
              <p class="price-card-branco-texto4">MEI</p>
              <p class="price-card-branco-texto5">SEM FUNCIONÁRIOS</p>
              <p class="price-card-branco-texto5">
                PRESTAÇÃO DE SERVIÇOS
              </p>
              <a href="#contato"><button class="price-card-branco-button">
                QUERO ESSE !
              </button></a>
            </div>

            <div class="price-cards price-card-white">
              <p class="price-card-branco-texto1">MEI</p>
              <p class="price-card-branco-texto1">A PARTIR DE</p>
              <p class="price-card-branco-texto2">
                R$ <span class="price-card-branco-texto3">89</span>
              </p>
              <p class="price-card-branco-texto4">MEI</p>
              <p class="price-card-branco-texto5">SEM FUNCIONÁRIOS</p>
              <p class="price-card-branco-texto5">
                PRESTAÇÃO DE SERVIÇOS
              </p>
              <a href="#contato"><button class="price-card-branco-button">
                QUERO ESSE !
              </button></a>
            </div>
          </div>
        </div>
      </section>
      

      
    `;
    }
}
customElements.define('comp-precos', Precos);
