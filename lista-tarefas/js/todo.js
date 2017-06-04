
$(document).ready(
  $(function(){
    function onTarefaDeleteClick () {
      console.log("Cliquei na lixeira!!");
    }
    $(".tarefa-delete").click(onTarefaDeleteClick);
  })
);