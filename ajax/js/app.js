// URL de serviço
var servico = "http://livro-capitulo07.herokuapp.com/hello";
// Parametro para o serviço
var parametro = {nome: "Caro Leandro"};

// Método get fornecido pelo jquery pode receber 3 parametros (url, parametros para o serviço, callback com retorno dos dados recebidos)
$.get(servico, parametro, function (data) {
  console.log(data);
  document.write("<h1>"+data+"</h1>");
});
