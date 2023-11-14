const form = document.getElementById('form-cadastro')

let linhas =''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    // obtendo os valores do form
    const nome = document.getElementById('nome-cliente')
    const telefone = document.getElementById('telefone-cliente')
    const estado = document.getElementById('estadosBR')

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += `<td>${estado.value}</td>`
    linha += '</tr>'

    linhas += linha

    // limpar campos
    nome.value =''
    telefone.value=''
    estado.value=''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}