// URL de serviço
var servico = "http://livro-capitulo07.herokuapp.com/hello";
var servicoError = "http://livro-capitulo07.herokuapp.com/error";
// Parametro para o serviço
var parametro = {nome: "Caro Leandro", idade: 31};

// Exemplo com resposta correta e parametro
var $xhr = $.get(servico, parametro);

// Exemplo de metodo get com resposta de erro
var $xhrError = $.get(servicoError);


// Método get fornecido pelo jquery pode receber 3 parametros (url, parametros para o serviço, callback com retorno dos dados recebidos)

// $.get(servico, parametro, function (data) {
//   console.log(data);
//   document.write("<h1>"+data+"</h1>");
// });


// Callback para recebimento correto
$xhr.done(function(data) {
  console.log(data);
  document.write("<h1>"+data+"</h1>");
});

//Callback para recebimento com erro
$xhrError.fail(function(data) {
  console.log(data.responseText);
  document.write("<h1>"+data.responseText+"</h1>");
});
