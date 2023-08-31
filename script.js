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

