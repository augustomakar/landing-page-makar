const shadowHost = document.querySelector('comp-contato');
const botaoCnpj = shadowHost.shadowRoot.getElementById('btnCnpj');
const inputCnpj = shadowHost.shadowRoot.getElementById('cnpj');

botaoCnpj.addEventListener('click', () => {
    consultaCnpj(shadowHost);
});

inputCnpj.addEventListener('focus', () => {
    inputCnpj.value = '';
});

async function consultaCnpj(host) {
    const cnpjBruto = host.shadowRoot.getElementById('cnpj').value;
    const cnpj = cnpjBruto.replace(/\D/g, '');

    try {
        const response = await fetch(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`,
        );
        const data = await response.json();
        console.log(data);

        host.shadowRoot.getElementById('panel-cnpj').style.visibility =
            'visible';

        host.shadowRoot.getElementById('lblCnpj').innerText =
            'CNPJ: ' + data.cnpj;
        host.shadowRoot.getElementById('lblRazao').innerText =
            'Razão Social: ' + data.razao_social;
        host.shadowRoot.getElementById('lblStatus').innerText =
            'Situação Cadastral: ' + data.descricao_situacao_cadastral;
    } catch (error) {
        console.error(error);
        window.alert('Não foi possível consultar o CNPJ');
    }
}
