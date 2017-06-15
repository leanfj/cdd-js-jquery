// Associa eventos assim que o doc é carregado
$(document).ready(

  $(function(){
    // Armazena tarefa que está sendo editada
    var $ultimoCLick;

    function onTarefaDeleteClick () {
      // console.log("Cliquei na lixeira!!");
      // Metodo Parent utilizado para selecionar o elemento pai
      // console.log($(this).parent('.tarefa-item').text().trim());

      // Metodo hide utilizado para esconder o elemento, parametro slow para aplicar efeito. Metodo remove elemina o elemento do DOM
      // Primeiro this se refere ao elemento tarefa-delete associado ao evento onde a função vai ser chamada
      // O segundo thi se refere ao elemento tarefa-item
      $(this).parent('.tarefa-item')
        .off('click')
        .hide('slow', function () {
          $(this).remove();
      });
    }

    $(".tarefa-delete").click(onTarefaDeleteClick);

    function onTarefaItemClick() {
      // Verifica se o item em edição é o mesmo e evit o a rechamada da function
      if (!$(this).is($ultimoCLick)) {
        if($ultimoCLick !== undefined) {
          salvaEdicaoPendente($ultimoCLick);
        }
        $ultimoCLick = $(this);
        // Pega o texto dentro do elemento tarefa-texto
        var texto = $ultimoCLick.children('.tarefa-texto').text();
        // Novo elemento Ipunt que vai conter o texto
        var novoElementoInput = "<input type='text' " + "class='tarefa-edit' value='" + texto + "'>";
        // Coloca o novo conteudo digitado no input dentro do elemento de texto
        $ultimoCLick.html(novoElementoInput);
        // Function para salvar edição
        $(".tarefa-edit").keydown(onTarefaEditKeydown);
      }
    }

    // Verifica a tecla enter para salvar
    function onTarefaEditKeydown(event) {
      if(event.which === 13) {
        salvaEdicaoPendente($ultimoCLick);
        $ultimoCLick = undefined;
      }
    }

    function salvaEdicaoPendente($tarefa) {
      console.log("Salvando");
      // Pega o valor do input com o novo texto
      var texto = $tarefa.children('.tarefa-edit').val();
      // Apaga todo o html
      $tarefa.empty();
      // Inclui o hmtl no elemento
      $tarefa.append($("<div />").addClass("tarefa-texto").text(texto))
            .append($("<div />").addClass("tarefa-delete fa fa-trash-o"))
            .append($("<div />").addClass("clear"));
      // $tarefa.append("<div class='tarefa-texto'>" + texto + "</div>")
      //        .append("<div class='tarefa-delete fa fa-trash-o'></div>")
      //        .append("<div class='clear'></div>");

      // Recria os eventos que podem ser chamados
      $(".tarefa-delete").click(onTarefaDeleteClick);
      $tarefa.click(onTarefaItemClick);
    }

    $('.tarefa-item').click(onTarefaItemClick);

  })
);
