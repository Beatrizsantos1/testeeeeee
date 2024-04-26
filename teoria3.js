/* ------------------inicio do botão dark --------------------*/
const checkbox = document.getElementById("Mudar-tema");

function MudarTema() {
  document.body.classList.toggle("dark");
}
checkbox.addEventListener("change", function () {
  MudarTema();
});
/* ------------------fim do botão dark --------------------*/
