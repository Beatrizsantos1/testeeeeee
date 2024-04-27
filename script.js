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

/*<------------ Fim zomm nos icones<---------------*/
AOS.init();

/*let input = document.getElementById("texto-barra-pesquisa").value;
input = input.toLowerCase();
let x = document.getElementsByClassName("pesquisa-dentro-site");
function pesquisar() {
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

x.addEventListener("keyup", function () {
  pesquisar();
});*/

let inputElement = document.querySelector("input");
let listElement = document.querySelector("ul");
let itemElement = listElement.querySelectorAll("li");

inputElement.addEventListener("input", (e) => {
  let inputed = e.target.value.toLowerCase();
  itemElement.forEach((li) => {
    let text = li.textContent.toLowerCase();
    if (text.includes(inputed)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
    if (inputed == "") {
      li.style.display = "none";
    }
    if (e.key === "Enter") {
      if (inputed) {
        window.location.href = "quarta-pagina";
      }
    }
  });
});
