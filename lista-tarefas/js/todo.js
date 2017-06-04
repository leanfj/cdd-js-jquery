// Associa eventos assim que o doc é carregado
$(document).ready(

  $(function(){
    function onTarefaDeleteClick () {
      // console.log("Cliquei na lixeira!!");
      // Metodo Parent utilizado para selecionar o elemento pai
      console.log($(this).parent('.tarefa-item').text().trim());

      // Metodo hide utilizado para esconder o elemento, parametro slow para aplicar efeito. Metodo remove elemina o elemento do DOM
      // Primeiro this se refere ao elemento tarefa-delete associado ao evento onde a função vai ser chamada
      // O segundo thi se refere ao elemento tarefa-item
      $(this).parent('.tarefa-item').hide('slow', function () {
        $(this).remove();
      });
    }
    $(".tarefa-delete").click(onTarefaDeleteClick);

    function onTarefaItemClick() {
      console.log("Clique para editar");
    }

    $('.tarefa-item').click(onTarefaItemClick);
  })
);
