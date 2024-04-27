/* ------------------inicio do botão dark --------------------*/
const checkbox = document.getElementById("Mudar-tema");

function MudarTema() {
  document.body.classList.toggle("dark");
}
checkbox.addEventListener("change", function () {
  MudarTema();
});
/* ------------------fim do botão dark --------------------*/

/* ------------------inicio do botão voltar a tela anterior --------------------*/
const fecharTela = document.getElementById("voltar");

function fechar() {
  window.history.back();
}

fecharTela.addEventListener("click", function () {
  fechar();
});
/* ------------------fim do botão voltar a tela anterior --------------------*/

/* ------------------Inicio do botão para segunda pagina teoria --------------------*/
const btnsegundaPagina = document.getElementById("segundaPagina");

function proximaPagina() {
  window.location.href = "teoria2.html";
}

btnsegundaPagina.addEventListener("click", function () {
  proximaPagina();
});
/* ------------------Fim do botão para segunda pagina teoria --------------------*/
function telaseguinte() {
  window.location = "teoria3.html";
}

function telaanterior() {
  window.location = "teoria.html";
}
function telaantes() {
  window.location = "teoria2.html";
}

/* ------------------inicio do botão voltar a tela anterior --------------------*/

function toclose() {
  window.history.go(-2);
}

function toclose3() {
  window.history.go(-3);
}
/* ------------------fim do botão voltar a tela anterior --------------------*/
