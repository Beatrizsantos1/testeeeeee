document.querySelectorAll(".section .menu-item").forEach((item, index) => {
  item.addEventListener("click", function () {
    switch (index) {
      case 0: // Primeiro item (CONTEÚDO)
        window.location.href = "algoritmo.html"; // Abre na mesma aba para a página de conteúdo
        break;
      case 1: // Segundo item (VIDEO AULA)
        window.open(
          "https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&pp=iAQB",
          "_blank"
        ); // Abre em nova aba
        break;
      case 2: // Terceiro item (EXERCÍCIOS)
        window.location.href = "perguntas.html"; // Abre na mesma aba para a página de exercícios
        break;
      default:
        console.warn("Nenhuma ação definida para este item.");
    }
  });
});
