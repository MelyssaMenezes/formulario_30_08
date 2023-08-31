console.log("Pagina carregada!!");

// Lista de clientes (array de objeto)
let customerList = [];
 /*o let permite que declare variaveis no escopo em bloco,
 instrucao ou uma expressao na qual ela é usada */
 

//main form - formulario principal
const mainForm = document.querySelector('#mainForm');
/* vai procurar no html um ID mainForm q ta na tag form e guardar
na variavel mainForm*/


//document.querySelector - vai procurar no documento algum ID fieldName
const edtName = document.querySelector('#fieldName');
const edtAddress = document.querySelector('#fieldAddress');
const edtAge = document.querySelector('#fieldAge');

//chamando a funcao clearForm
clearForm();

 /* addEventListener - permite q configure funcoes pra ser chamadas
 quando um evento acontece, exemplo: submit */
document.addEventListener('submit', function(event){
    event.preventDefault();
    /*O método event.preventDefault() evita o comportamento padrão de um
    elemento. Evita da pagina ser recarregada qundo o formulario for
    submetido*/

    console.log("Formulario submetido"); 
    //ira aparecer quando o botao salvar for clicado

    // chamando a funcao para salvar os dados dos clientes
    saveCustomer();
    /* chamando a funcao para limpar o formulario e por o foco no 
     campo do nome */
    clearForm();

});


function saveCustomer(){
    console.log('Funcao saveCustomer executado!');

    // pegando os edits(campos) digitados
    const edtNameValue = edtName.value;
    const edtAddressValue = edtAddress.value;
    const edtAgeValue = edtAge.value;


    console.log(edtNameValue, edtAddressValue, edtAgeValue);

    // customer - cliente
    const customer = {
        name: edtNameValue,
        address: edtAddressValue,
        age: edtAgeValue
    }

    /*Adiciona(push) objeto (customer) na lista de clientes
    (array customerList)*/
    customerList.push(customer);

    console.log(customerList);

}

//criando uma funcao para limpar o formulario
function clearForm() {
    mainForm.reset(); // reset vai limpar o formulario
    edtName.focus(); 
    /* focus vai deixar o cursor no campo nome depois de recarregar
     a pagina ou salvar os dados */
}


