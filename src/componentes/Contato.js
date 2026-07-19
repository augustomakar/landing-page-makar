class Contato extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `


      <link rel="stylesheet" href="./src/css/Contato.css">

		<div class="container">
			<div class="panel-left">
				<p class="p1">CONTATO</p>
				<p class="p2">PORTO ALEGRE/RS</p>
				<p class="p2">atendimento@makarcontabilidade.com.br</p>
				<p class="p2">MAKAR CONTABILIDADE LTDA</p>
			</div>
			<div class="panel-right">
				<div class="box-form">
					<form
						action=""
						class="">
						<div class="box-form-inputs">
                            <div>
                                <label for="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Digite seu nome (obrigatório)"
                                    required />
                            </div>
                            <div>
                                <label for="telefone">Telefone</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    placeholder="Digite seu telefone (obrigatório)"
                                    required />
                            </div>
                            <div>
                                <label for="e-mail">E-mail</label>
                                <input
                                    type="email"
                                    name="e-mail"
                                    placeholder="Digite seu email (obrigatório)"
                                    required />


                            </div>
                            <div>
                                <label for="mensagem">Mensagem</label>
                                <textarea
                                    name="mensagem"
                                    required>
                                </textarea>


                            </div>
						</div>

						<button>Enviar</button>
					</form>
			</div>
		</div>



      
    `;
    }
}
customElements.define('comp-contato', Contato);
