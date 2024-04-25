/* ------------------inicio do botão Scratch -------------------- */
let btnScratch = document.querySelector(".btn-slide1");

function redirecionamenScratch() {
  window.open("https://scratch.mit.edu/download", "_blank");
}

btnScratch.addEventListener("click", function () {
  redirecionamenScratch();
});
/* ------------------fim do botão Scratch -------------------- */

/* ------------------inicio do botão Curso em video do site --------------------*/
let btnSite = document.querySelector(".btn-slide2");

function site() {
  window.open("https://www.cursoemvideo.com/", "_blank");
}

btnSite.addEventListener("click", function () {
  site();
});
/* ------------------Fim do botão Curso em video do site --------------------*/

/* ------------------inicio do botão Curso em video do Youtube --------------------*/
let btnYoutube = document.querySelector(".btn-slide3");

function youtube() {
  window.open("https://www.youtube.com/watch?v=GrPkuk1ezyo&t=352s", "_blank");
}

btnYoutube.addEventListener("click", function () {
  youtube();
});
/* ------------------fim do botão Curso em video do Youtube --------------------*/

/* ------------------inicio do botão voltar a tela anterior --------------------
const fecharTela = document.getElementById("voltar");

function sair() {
  window.history.back();
}

fecharTela.addEventListener("click", function () {
  sair();
});
/* ------------------fim do botão voltar a tela anterior --------------------*/
