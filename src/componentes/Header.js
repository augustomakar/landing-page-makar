class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="./src/css/Header.css">

            <header id="main-header" class="">
                <img src="./assets/logo.png" alt="Logo" />
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#servicos">SERVIÇOS</a></li>
                    <li><a href="#precos">PLANOS</a></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </header>	


      
    `;
        window.dispatchEvent(new Event('componentePronto'));
    }
}
customElements.define('comp-header', Header);
