//let botaoEntrar = document.getElementById("#loginBtn");
//let botaoRegistrar = document.getElementById("#registerBtn");
let loginContainer = document.getElementById("login-container");
let cadastrarContainer = document.getElementById("cadastrar-container");

function login() {
  loginContainer.style.left = "400px";
  cadastrarContainer.style.right = "-920px";
  loginContainer.style.transition = "3.5s";
  loginContainer.style.opacity = 1;
  cadastrarContainer.style.opacity = 0;
}

function register() {
  loginContainer.style.left = "-910px";
  cadastrarContainer.style.right = "500px";
  cadastrarContainer.style.transition = "5.5s";
  loginContainer.style.opacity = 0;
  cadastrarContainer.style.opacity = 1;
}

let botaoEntrar = document.getElementById("loginBtn");
botaoEntrar.addEventListener("click", function () {
  login();
});

let botaoRegistrar = document.getElementById("registerBtn");
botaoRegistrar.addEventListener("click", function () {
  register();
});

/*function redirecioneComHistorico() {
  // Faz um redirecionamento mantendo a página original no histórico de navegaçãodo browser.
  window.location.href = "quinta-pagina";
}

let botaofechar = document.getElementById("fechar");
botaofechar.addEventListener("click", function () {
  redirecioneComHistorico();
});*/
