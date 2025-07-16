// tema.js

// Função chamada ao clicar em "Iniciar Quiz"
function redirecionar() {
  const tema = document.getElementById("tema").value; // Captura o tema selecionado
  window.location.href = `quiz.html?tema=${tema}`; // Redireciona para quiz.html com o tema na URL
}
