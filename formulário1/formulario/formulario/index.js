/* ---- Elementos ---- */

const inputNome = document.querySelector('input#nome')
const inputTelefone = document.querySelector('input#telefone')
const textareaMensagem = document.querySelector('textarea#mensagem')
const buttonEnviar = document.querySelector('button#enviar')

/* ---- Eventos ---- */

buttonEnviar.addEventListener('click', enviarFormulario)

/* ---- Callbacks ---- */

function enviarFormulario () {
    const nome = inputNome.value
    const telefone = inputTelefone.value
    const mensagem = textareaMensagem.value

    const dados = prepararDados(nome, telefone, mensagem)
    enviarParaDiscord(dados)
}

/* ---- Aux Functions ---- */

function prepararDados (nome, telefone, mensagem) {
    const dados = {
        content: `
:green_circle: **Nova Mensagem no Formulário**

:person_bald: **Nome**
${nome}

:telephone: **Telefone**
${telefone}

:envelope: **Mensagem**
${mensagem}
        `
    }

    return JSON.stringify(dados)
}

function enviarParaDiscord (dados) {
    const url = 'https://discord.com/api/webhooks/SEU_ID'
    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: dados
    }

    window.fetch(url, config)
        .then(limparCampos)
        .catch(error => console.log(error.message))
}

function limparCampos () {
    inputNome.value = ''
    inputTelefone.value = ''
    textareaMensagem.value = ''
}