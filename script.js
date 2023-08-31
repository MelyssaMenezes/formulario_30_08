console.log("Pagina carregada!!");


/* addEventListener - permite q configure funcoes pra ser chamadas
 quando um evento acontece, exemplo: submit */
document.addEventListener('submit', function(event){
    event.preventDefault();
/*O método event.preventDefault() evita o comportamento padrão de um
 elemento. Evita da pagina ser recarregada qundo o formulario for
submetido*/

    console.log("Formulario submetido"); 
    //ira aparecer quando o botao salvar for clicado
});


/*atribuir na variavel edtName o valor q foi digitado onde tem o ID 
 fieldName */
const edtName = document.getElementById('fieldName');
// getElementById - retorna o elemento cujo o ID foi especificado

const nameValue = edtName.value;
// guarda o valor digitado no edtName no nameValue

console.log('Nome:', nameValue);


const edtAddress = document.getElementById('fieldAddress');
const addressValue = edtAddress.value;
console.log('Endereco:', addressValue);


const edtAge = document.getElementById('fieldAge');
const ageValue = edtAge.value;
console.log('Idade:', ageValue);