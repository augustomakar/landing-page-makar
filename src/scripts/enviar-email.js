const host = document.getElementById('contato');
const form = host.shadowRoot.getElementById('form');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('access_key', '06abef79-685c-42e7-a662-3ad1b2d95793');

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            alert('Obrigado! Sua mensagem foi enviada');
            form.reset();
        } else {
            alert('Error: ' + data.message);
        }
    } catch (error) {
        alert('Não foi possível enviar o email.');
    }
});
