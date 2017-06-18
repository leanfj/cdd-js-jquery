
var urlServicoCep = "http://api.postmon.com.br/v1/cep/";

var urlServicoRastreio = "http://api.postmon.com.br/v1/rastreio/ect/";

var respostaCep = $('#resposta__cep');

var respostaRastreio = $('#resposta__rastreio');

// CEP
function onCepDone(data) {
  var textFormat = "<p> Estado: " + data.estado + "<br> Cidade : " + data.cidade + "<br> Bairro : " + data.bairro + "<br> Endereço: " + data.logradouro +"</p>";
  respostaCep.append(textFormat);
}

function onCepError(error) {
  var errorTextCep = "<p>Erro: " + error.statusText + "</p>";
  respostaCep.append(errorTextCep);
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
}

function onRastreioError(error) {
  var errorTextRastreio = "<p>Erro: " + error.statusText + "</p>";
  respostaRastreio.append(errorTextRastreio);
}


function onBtnCepClick() {
  respostaCep.text("");
  var inputCep = $('#cep__input').val();
  var consultaCep = urlServicoCep + inputCep;
  $.getJSON(consultaCep).done(onCepDone).fail(onCepError);
  console.log(consultaCep);
}

function onBtnRastreioClick() {
  respostaRastreio.text("");
  var inputRastreio = $('#rastreio__input');
  var consultaRastreio = urlServicoRastreio + inputRastreio.val();
  $.getJSON(consultaRastreio).done(onRastreioDone).fail(onRastreioError);
  console.log(consultaRastreio);
}


$('#cep__btn').click(onBtnCepClick);
$('#rastreio__btn').click(onBtnRastreioClick)
