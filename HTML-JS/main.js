const form = document.getElementById('form-deposito');
const valorA = document.getElementById("campo-a");
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorB = document.getElementById("campo-b");
    const mensagemSucesso = `Tudo certo, o <b>${valorA.value}</b> e menor que o <b>${valorB.value}</b>`

    formEValido = valorA.value < valorB.value;
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else{
        valorA.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    } 
})

valorA.addEventListener('keyup', function(e) {
    console.log(e.target.value);

    if (!formEValido) {
        valorA.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorA.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});
