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
                <div class="panel-infos">
                    <p class="p1">CONTATO</p>
                    <p class="p2">PORTO ALEGRE/RS</p>
                    <p class="p2">atendimento@makarcontabilidade.com.br</p>
                    <p class="p2">MAKAR CONTABILIDADE LTDA</p>
                </div>

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
			</div>

            <div class="panel-right">
				<div class="box-form">
					<form class="" id="form" name="form"> 
						<div class="box-form-inputs">
        
                            <div>
                                <label for="nome">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    placeholder="Digite seu nome (obrigatório)"
                                    required />
                            </div>
                            <div>
                                <label for="telefone">Telefone</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="Digite seu telefone (obrigatório)"
                                    required />
                            </div>
                            <div>
                                <label for="e-mail">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Digite seu email (obrigatório)"
                                    required />


                            </div>
                            <div>
                                <label for="mensagem">Mensagem</label>
                                <textarea
                                    name="mensagem"
                                    id="mensagem"
                                    required>
                                </textarea>


                            </div>
						</div>

						<button type="">Enviar</button>
					</form>
			</div>
		</div>



      
    `;
    }
}
customElements.define('comp-contato', Contato);

// <form
// 	/*action="https://api.web3forms.com/submit"
// 	class="" method="POST"*/ id="form-contato">
// 	<div class="box-form-inputs">
//          <input type="hidden" name="access_key" value="06abef79-685c-42e7-a662-3ad1b2d95793"></input>
