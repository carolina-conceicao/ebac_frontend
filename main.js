const form = document.getElementById('form-contato');
const imgOk = '<img src="./images/ok.png" alt="emoji check" />'
const imgErro = '<img src="./images/cross.png" alt="emoji x" />'

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumTelefone = document.getElementById('num-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumTelefone.value}</td>`;
    linha += `<td>${inputNumTelefone.value >= 0 ? imgOk : imgErro}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = ''
    inputNumTelefone.value = ''
});