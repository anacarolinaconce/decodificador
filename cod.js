const CaixaEntrada = document.querySelector('#input-entrada');
const CaixaResultado = document.querySelector ('#Caixa-resultado');
const botao = document.querySelector ('#botCopiar');
botao.style.display = "none";

function Criptografar() {
    
    var texto = CaixaEntrada.value;

    var RetornoCriptografia = texto.replace(/e/g,'enter')
        .replace(/i/g,'imes')
        .replace(/a/g,'ai')
        .replace(/o/g,'ober')
        .replace(/u/g,'ufat');

    if (!/^[a-z\s]*$/.test(texto)) {
        alert('Por favor, insira apenas letras minúsculas e sem acento!');
    return;
    } if (texto === '') {
        alert('Campo vazio! Por favor, insira um texto.');
    } else {
        CaixaResultado.textContent = RetornoCriptografia;
        CaixaEntrada.value = ''; 
        botao.style.display= "block";
    }
   
    botao.addEventListener('click', copiar);
}

function Descriptografar() {

    var texto = CaixaEntrada.value;

    var RetornoDescriptografia = texto
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');

    if (!/^[a-z\s]*$/.test(texto)) {
            alert('Por favor, insira apenas letras minúsculas e sem acento');
            return;
    } if (texto === '') {
            alert('Campo vazio! Por favor, insira um texto.');
    } else {
            CaixaResultado.textContent = RetornoDescriptografia;
            CaixaEntrada.value = ''; 
        }
    botao.addEventListener('click', copiar);
}

function copiar() {

    var textoParaCopiar = CaixaResultado.innerText;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(function() {

            alert('Texto copiado!');
            CaixaResultado.innerText = 'Nenhuma mensagem.';

        })
        .catch(function(error) {
   
            console.error('Falha ao copiar o texto: ', error);
            alert('Falha ao copiar o texto.');
        });
}
