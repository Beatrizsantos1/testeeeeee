// Função para aplicar o CSS digitado na área de edição
const cssInput = document.getElementById("cssInput");
const outputBox = document.getElementById("outputBox");

cssInput.addEventListener("input", function () {
  const styleTag = document.createElement("style");
  styleTag.type = "text/css";
  styleTag.innerHTML = cssInput.value;
  document.head.appendChild(styleTag);

  // Atualiza a exibição do CSS atual
  document.getElementById("currentCss").textContent = cssInput.value;
});
