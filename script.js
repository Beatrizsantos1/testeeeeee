const checkbox = document.getElementById("Mudar-tema");

function MudarTema() {
  document.body.classList.toggle("dark");
}

checkbox.addEventListener("change", function () {
  MudarTema();
});

/*<------------ AJEITAR ESSA PARTE NÃO ESTA FUNCINADO zomm nos icones<---------------*/
const zoom = document.querySelector(".fa-solid");

function MudarTamanho() {
  document.classList.toggle("fullsize-icons");
}
zoom.addEventListener("change", function () {
  MudarTamanho();
});

/*<------------ Fim zomm nos icones<---------------*/
AOS.init();
