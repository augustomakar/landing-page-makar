class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/Footer.css">

		<div class="footer">
			<div>
				<p>2026 - MAKAR CONTABILIDADE LTDA</p>
			</div>
			<div class="social flex-row-between">
				<img
					src="../../../assets/facebook.png"
					alt="" />
				<img
					src="../../../assets/instagram.png"
					alt="" />
				<img
					src="../../../assets/linkedin.png"
					alt="" />
			</div>
		</div>


      
    `;
    }
}
customElements.define('comp-footer', Footer);
