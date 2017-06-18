var urlServico = "http://api.postmon.com.br/v1/cep/";

var cep = "21236-060";

var cepError = "12345-678";

var consulta = urlServico + cepError;

function onCepDone(data) {
  console.log("Seu endereço fica na " + data.logradouro);
}

function onCepError(error) {
  console.log("Erro: " + error.statusText);
}

$.getJSON(consulta).done(onCepDone).fail(onCepError);
