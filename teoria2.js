/*let btnterceiraPagina = document.querySelector(".terceiraPagina");

function paginaSeguinte() {
  window.location.href = "teoria3.html";
}

btnterceiraPagina = document.addEventListener("click", function () {
  paginaSeguinte();
});

 ------------------inicio do botão dark --------------------
const btnmudar = document.getElementById("escuro");

function trocarTema() {
  document.body.classList.toggle("dark");
}
btnmudar.addEventListener("change", function () {
  trocarTema();
});
/* ------------------fim do botão dark --------------------*/
/* ------------------inicio do botão dark --------------------*/
const checkbox = document.getElementById("Mudar-tema");

function MudarTema() {
  document.body.classList.toggle("dark");
}
checkbox.addEventListener("change", function () {
  MudarTema();
});
/* ------------------fim do botão dark --------------------*/

document.getElementById("pesquisa").addEventListener("blur", myFunction);

function myFunction() {
  document.getElementById("pesquisa").style.display = "none";
}
