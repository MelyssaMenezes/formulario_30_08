console.log("Pagina carregada!");

// lista de clientes - customerList:
let customerList = []; // array de objeto

// obter os elementos do form no html:
const mainForm = document.querySelector('#mainForm')

// obtem o elemento ID fieldName do html
const edtName = document.querySelector('#fieldName');

// obtem o elemento ID fielAddress do html
const edtAddress = document.querySelector('#fieldAddress');

// obtem o elemento ID fieldAge do html
const edtAge = document.querySelector('#fieldAge');

// obtem o elemento button(cancelar)
const cancelButton = document.querySelector('#cancelButton');

// limpa o formulario e da o foco no campo Nome
//clearForm();


//Botão de salvar
// a funcão funciona quando ocorrer o evento submit
document.addEventListener('submit', async function(event){
    //evita a pagina ser recarregada ao submeter(salvar) ao formulario
    event.preventDefault();

    console.log("Formulario submetido!");

    // salva o cadastro do cliente
    saveCustomer();

    // limpa o formulario e da foco no campo Nome
    clearForm();
});



// Botão cancelar
// função funciona quando ocorrer o click no botão cancelar
cancelButton.addEventListener('click', async function(){
    const confirmation = confirm('Tem certeza que deseja cancelar?');
    if(confirmation) {

    // limpa o formulario e da foco no campo Nome
    clearForm();
    console.log('Cancelando edicao!');
    }

});




