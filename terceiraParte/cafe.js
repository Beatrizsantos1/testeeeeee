const images = document.querySelectorAll(".cafe");

function showImagesSequentially() {
  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.display = "block"; // Exibe a imagem após um intervalo
    }, index * 2000); // 2000 ms = 2 segundos entre cada imagem
  });
}

showImagesSequentially();
