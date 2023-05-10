const form = document.getElementById("form-contato");
const contato = document.getElementById('contato-form');
const numeroContato = document.getElementById('numero-form');

let linhas = "";
let contatos = [];
let numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();

})

function adicionaLinhas(){

    
    if (contatos.includes(contato.value) || numeros.includes(numeroContato.value)) {
        alert(`Contato já está existente na agenda.`)
    } else {        
        let linha = '<tr>';
        linha += `<td>${contato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
        
        
        contatos.push(contato.value);
        numeros.push(numeroContato.value);
        
        contato.value = '';
        numeroContato.value = '';
    }
}

function atualizaTabela(){
    const corpoForm = document.getElementById('corpo-form');
    corpoForm.innerHTML = linhas;
}






