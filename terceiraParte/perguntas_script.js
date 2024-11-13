let currentQuestionIndex = 0;
const questions = document.querySelectorAll(".question-section");

// Adiciona eventos a todos os botões de verificação
document.querySelectorAll(".verificar-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o envio do formulário
    verificarResposta(event.target);
  });
});

function verificarResposta(button) {
  const form = button.parentElement;
  const questionSection = form.parentElement;
  const correctAnswer = questionSection.getAttribute("data-correct");
  const selectedOption = form.querySelector("input[type='radio']:checked");

  // Remove mensagens e botões de tentativas anteriores
  const existingElements = form.querySelectorAll(".result, .buttons-container");
  existingElements.forEach((el) => el.remove());

  if (!selectedOption) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  const resultMessage = document.createElement("div");
  resultMessage.classList.add("result");
  resultMessage.textContent =
    selectedOption.value === correctAnswer
      ? "Acertou!"
      : "Errou! Reveja o conteúdo.";
  resultMessage.style.color =
    selectedOption.value === correctAnswer ? "green" : "red";
  form.appendChild(resultMessage);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const nextButton = document.createElement("button");
  nextButton.textContent = "Próxima";
  nextButton.classList.add("next-button");
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarProximaPergunta();
  });

  buttonsContainer.appendChild(nextButton);
  form.appendChild(buttonsContainer);
}

function mostrarProximaPergunta() {
  questions[currentQuestionIndex].classList.remove("active");

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    questions[currentQuestionIndex].classList.add("active");
  } else {
    // Exibe uma mensagem de conclusão e cria o botão para o menu principal
    const quizContainer = document.querySelector(".quiz-container");
    const completionMessage = document.createElement("div");
    completionMessage.textContent =
      "Parabéns! Você concluiu todas as perguntas!";
    completionMessage.style.fontSize = "20px";
    completionMessage.style.fontWeight = "bold";
    completionMessage.style.marginTop = "20px";
    completionMessage.style.textAlign = "center";

    // Cria o botão para voltar ao menu principal
    const mainMenuButton = document.createElement("button");
    mainMenuButton.textContent = "Voltar ao Menu Principal";
    mainMenuButton.classList.add("main-menu-button");

    // Define a ação do botão para redirecionar ao menu principal
    mainMenuButton.onclick = () => {
      window.location.href = "index.html"; // Substitua "index.html" pelo caminho do menu principal
    };

    // Limpa o conteúdo do quiz e adiciona a mensagem de conclusão e o botão
    quizContainer.innerHTML = "";
    quizContainer.appendChild(completionMessage);
    quizContainer.appendChild(mainMenuButton);
  }
}
