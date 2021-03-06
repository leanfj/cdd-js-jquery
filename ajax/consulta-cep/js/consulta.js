
var urlServicoCep = "https://api.postmon.com.br/v1/cep/";

var urlServicoRastreio = "https://api.postmon.com.br/v1/rastreio/ect/";

var respostaCep = $('#resposta__cep');

var respostaRastreio = $('#resposta__rastreio');

// CEP
function onCepDone(data) {
  var textFormat = "<p> Estado: " + data.estado + "<br> Cidade : " + data.cidade + "<br> Bairro : " + data.bairro + "<br> Endereço: " + data.logradouro +"</p>";
  respostaCep.append(textFormat);
  $('#jumbotron__cep').addClass("jumbotron-sucess");
}

function onCepError(error) {
  var errorTextCep = "Erro: " + error.statusText;
  console.log(errorTextCep);
  respostaCep.append(errorTextCep);
  $('#jumbotron__cep').addClass("jumbotron-error");
}

// RASTREIO
function onRastreioDone(data) {
  var locais = data.historico;

  var ordenados = locais.sort(function(a, b) {
    return moment(a.data.slice(0,10), 'DD/MM/YYYY', true).format('DDDD HH:mm') > moment(b.data.slice(0,10), 'DD/MM/YYYY', true).format('DDDD HH:mm');
  });

  for (var i = 0; i < data.historico.length; i++) {
    respostaRastreio.append("<p> Agência: " + ordenados[i].local + "<br> Data e Hora: " + moment(ordenados[i].data, 'DD/MM/YYYY HH:mm', true).format('D/MM/YYYY HH:mm') + "<br> Situação: " + ordenados[i].situacao + "<br>");
  }
  $('#jumbotron__rastreio').addClass("jumbotron-sucess");
}

function onRastreioError(error) {
  var errorTextRastreio = "Erro: " + error.statusText;
  respostaRastreio.append(errorTextRastreio);
  $('#jumbotron__rastreio').addClass("jumbotron-error");
}


function onBtnCepClick() {
  respostaCep.text("");
  $('#jumbotron__cep').removeClass("jumbotron-sucess jumbotron-error");
  var inputCep = $('#cep__input').val();
  var consultaCep = urlServicoCep + inputCep;
  $.getJSON(consultaCep).done(onCepDone).fail(onCepError);
  console.log(consultaCep);
}

function onBtnRastreioClick() {
  respostaRastreio.text("");
  $('#jumbotron__rastreio').removeClass("jumbotron-sucess jumbotron-error");
  var inputRastreio = $('#rastreio__input');
  var consultaRastreio = urlServicoRastreio + inputRastreio.val();
  $.getJSON(consultaRastreio).done(onRastreioDone).fail(onRastreioError);
  console.log(consultaRastreio);
}


$('#cep__btn').click(onBtnCepClick);
$('#rastreio__btn').click(onBtnRastreioClick)
