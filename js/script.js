function textParaFloat(texto) {
  // Utilização do método REPLACE para troca de caracteres dentro da string
  var textoLimpo = texto.replace("R$ ", "").replace(",", ".");
  // Retorna o valor transformado em float
  return parseFloat(textoLimpo);
}

// Retorna o valor de total ja em float
function lerTotal() {
  // var total = document.getElementById("total");
  var total = $("#total").text();
  // return textParaFloat(total.innerHTML);
  return textParaFloat(total);
}

// Retorna o valor transofomado em string
function floatParaText(valor) {
  var text = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
  text = "R$ " + text;
  return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

// Inserir no html do id total o valor
function escreveNoTotal(valor) {
  // var total = document.getElementById("total");
  // total.innerHTML = floatParaText(valor);
  var texto = floatParaText(valor);
  $("#total").text(texto);
}

// Compatibilidade com IE 8

if (document.getElementsByClassName === undefined) {
  document.getElementsByClassName = function (className) {
    var todosElementos = getElementsByTagName("*");
    var resultados = [];

    var elemento;

    for (var i = 0; (elemento = todosElementos[i]) != null; i++) {
      var elementoClass = elemento.className;
      if (elemento && elementoClass.indexOf(className) != -1) {
        resultados.push(elemento);
      }
    }
    return resultados;
  }
}


// Faz o calculo do valor pela quantidade e retorna a soma total
function calculaTotalProdutos() {

  // var produtos = document.getElementsByClassName("produto");
  // var produtos = $(".produto");

  var totalProdutos = 0;

  // for (var posicao = 0; posicao < produtos.length; posicao++) {
    // Preco
    // var elementoPreco = produtos[posicao].getElementsByClassName("preco");
    // var precoEmTexto = elementoPreco[0].innerHTML;
    // var preco = textParaFloat(precoEmTexto);
    // Quantidade
    // var elementoQuantidade = produtos[posicao].getElementsByClassName("quantidade");
    // Como quantidade é um input temos que busca um value
    // var quantidadeEmTexto = elementoQuantidade[0].value;
    // var quantidade = textParaFloat(quantidadeEmTexto);

    // var subTotal = quantidade * preco;
    // totalProdutos = totalProdutos + subTotal;
  //
  //   var $produto = $(produtos[posicao]);
  //   var quantidade = textParaFloat($produto.find('.quantidade').val());
  //   var preco = textParaFloat($produto.find('.preco').text());
  //   totalProdutos += quantidade * preco;
  //
  // }

  // EACH executa a function para elemento encontrado
  $(".produto").each(function(posicao, produto) {
    var $produto = $(produto);
    var quantidade = textParaFloat($produto.find(".quantidade").val());
    var preco = textParaFloat($produto.find(".preco").text());

    totalProdutos += quantidade * preco;
  });

// console.log(produtos);

  return totalProdutos;
}

// Calcula o valor relacionado a quantidade de coloca no total
function quantidadeMudou() {
  escreveNoTotal(calculaTotalProdutos());
}


function quandoDocCarregar() {
  var quantidadeEditado = document.getElementsByClassName("quantidade");

  for (var i = 0; i < quantidadeEditado.length; i++) {

    // onchange usado para quando o valor mudar chamar as functions para calcular e colocar o valor no total
    quantidadeEditado[i].onchange = quantidadeMudou;
  }
}



window.onload = quandoDocCarregar;
