document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-jogos");

  function revealButtons() {
    buttons.forEach((button) => {
      const buttonTop = button.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (buttonTop < windowHeight - 100) {
        button.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealButtons);
  revealButtons(); // Chama uma vez no início para exibir os botões já visíveis
});

document.addEventListener("DOMContentLoaded", function () {
  const movers = document.querySelectorAll(".mover");

  function revealElements() {
    movers.forEach((mover) => {
      const moverTop = mover.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (moverTop < windowHeight - 100) {
        mover.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Chama uma vez no início para exibir os elementos já visíveis
});
