document.addEventListener("DOMContentLoaded", function () {
  let numeroInscricao = null;

  const loginButton = document.querySelector("#login-button");
  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  const cadastroButton = document.querySelector("#Cadastro-button");
  cadastroButton?.addEventListener("click", function () {
    window.location.href = "register.html";
  });

  const botoesAlugar = document.querySelectorAll(".alugar-button");
  botoesAlugar.forEach(function (botao) {
    botao.addEventListener("click", function () {
      document.getElementById("modal-reserva").style.display = "block";

      if (numeroInscricao === null) {
        numeroInscricao = Math.floor(Math.random() * 9000) + 1000;
      }

      document.getElementById("numero-inscricao").textContent = "Número de Inscrição: " + numeroInscricao;
    });
  });

  const fecharModal = document.querySelectorAll(".fechar-modal");
  fecharModal.forEach(function (fechar) {
    fechar.addEventListener("click", function () {
      document.getElementById("modal-reserva").style.display = "none";
    });
  });

  const formReserva = document.getElementById("form-reserva");
  formReserva.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "reservas.html";
  });

  function abrirModalCarro() {
    var modalCarro = document.getElementById("modal-carro");
    modalCarro.style.display = "block";
  }

  function obterDetalhesCarro(id) {
    return {
      imagem: "caminho/para/imagem.jpg",
      titulo: "Carro Modelo X",
      descricao: "Descrição do carro Modelo X.",
      preco: "$100/dia",
    };
  }

  function reservarViagem(nome, hotel, nota, limpeza, qualidade, referencia) {
    sessionStorage.setItem("nomeViagem", nome);
    sessionStorage.setItem("hotelViagem", hotel);
    sessionStorage.setItem("notaViagem", nota);
    sessionStorage.setItem("limpezaViagem", limpeza);
    sessionStorage.setItem("qualidadeViagem", qualidade);
    sessionStorage.setItem("referenciaViagem", referencia);
    window.location.href = "reservas.html";
  }

  const modalReserva = document.getElementById("modal-reserva");
  modalReserva.addEventListener("click", function () {
    modalReserva.style.display = "none";
  });

  const modalContent = document.querySelector(".modal-content");
  modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  const modalTransporte = document.getElementById("opcao-transporte");
  const modalClasseViagem = document.getElementById("classe-viagem");
  const modalDescricao = document.getElementById("descricao-modal");

  modalTransporte.textContent = "Opção de Transporte: Avião";
  modalClasseViagem.textContent = "Classe de Viagem: Alta";
  modalDescricao.textContent = "Preço: $500, Nome do Local: Exemplo";
});

const imageUrls = [
  "pexels-pixabay-39691.jpg",
  "images/headerImg.jpg",
  "images/headerImg2.jpg",
];

const headerImages = document.querySelectorAll('.header-images img');
let currentImageIndex = 0;

function showNextImage() {
  headerImages.forEach(image => {
    image.style.display = 'none';
  });

  headerImages[currentImageIndex].style.display = 'block';
  currentImageIndex = (currentImageIndex + 1) % headerImages.length;
}

setInterval(showNextImage, 5000);

function scrollToTarget(target) {
  target.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.search-button').addEventListener('click', function () {
  var searchText = document.querySelector('.search-input').value.toLowerCase();
  var cardItems = document.querySelectorAll('.card-item');

  cardItems.forEach(function (item) {
    var title = item.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchText)) {
      scrollToTarget(item);
    }
  });
});
