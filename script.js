console.log("Pagina carregada!!");

 // Lista de clientes (array de objeto)
let customerList = [];
 /*o let permite que declare variaveis no escopo em bloco,
 instrucao ou uma expressao na qual ela é usada */
 
//document.querySelector - vai procurar no documento algum ID fieldName
const edtName = document.querySelector('#fieldName');
const edtAddress = document.querySelector('#fieldAddress');
const edtAge = document.querySelector('#fieldAge');


 /* addEventListener - permite q configure funcoes pra ser chamadas
 quando um evento acontece, exemplo: submit */
document.addEventListener('submit', function(event){
    event.preventDefault();
    /*O método event.preventDefault() evita o comportamento padrão de um
    elemento. Evita da pagina ser recarregada qundo o formulario for
    submetido*/

    console.log("Formulario submetido"); 
    //ira aparecer quando o botao salvar for clicado

    saveCustomer();

});

function saveCustomer(){
    console.log('Funcao saveCustomer executado!');
}

// pegando os edits(campos) digitados
const edtNameValue = edtName.value;
const edtAddressValue = edtAddress.value;
const edtAgeValue = edtAge.value;


console.log(edtNameValue, edtAddressValue, edtAgeValue);

// customer - cliente
const customer = {
    name: edtNameValue,
    address: edtAddressValue,
    age: edtAge
}

/*Adiciona(push) objeto (customer) na lista de clientes
(array customerList)*/
customerList.push(customer);

console.log(customerList);
