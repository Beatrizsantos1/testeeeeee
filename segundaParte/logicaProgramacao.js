// Direcionando o usuario para o site do Senai, para apredner o conteudo
document.getElementById("conteudoBtn").addEventListener("click", function () {
  window.open(
    "https://es.senaiead.senai.br/Launcher?assignment=19667&group=8837&ref=https%3A%2F%2Fes.senaiead.senai.br%2F%23workspace%2F8837%2Fcomponents",
    "_blank"
  );
});

// direicona o usuario para o youtube para assitir as aulas
document.getElementById("videoBtn").addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=1",
    "_blank"
  );
});

// Volta à página anterior
document.getElementById("voltarBtn").addEventListener("click", function () {
  window.history.back();
});
