const form = document.getElementById('form-agenda');
const nomes = [];
const telefone = [];

let linhas = '';




form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();

})


function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');


    if(nomes.includes(inputNome.value)){
        alert(`O nome digitado e igual a um ja salvo em sua lista`);
    
    }else if(telefone.includes(inputNumero.value)){
        alert(`O número digitado e igual a um ja salvo em sua lista `)
    
    }else{
        nomes.push(inputNome.value);
        telefone.push(parseInt(inputNumero.value));


        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}
