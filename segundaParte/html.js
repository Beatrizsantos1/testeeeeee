// Direcionando o usuario para o site do Senai, para apredner o conteudo
document.getElementById("conteudoBtn").addEventListener("click", function () {
  window.open("desenvolvimento.html", "_blank");
});

// direicona o usuario para o youtube para assitir as aulas
document.getElementById("videoBtn").addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o",
    "_blank"
  );
});

// Volta à página anterior
document.getElementById("voltarBtn").addEventListener("click", function () {
  window.history.back();
});
