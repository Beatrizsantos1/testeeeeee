// Direcionando o usuario para o site do Senai, para apredner o conteudo
document.getElementById("conteudoBtn").addEventListener("click", function () {
  window.open("desenvolvimento.html", "_blank");
});

// direicona o usuario para o youtube para assitir as aulas
document.getElementById("videoBtn").addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
    "_blank"
  );
});

// Volta à página anterior
document.getElementById("voltarBtn").addEventListener("click", function () {
  window.history.back();
});
