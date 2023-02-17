//Objetivo: Ao clicar no card, ele abre um modal mostrando o número ou icone

const btnAtivaModal = document.querySelector(".card");

const modal = document.querySelector(".modal");

function mostrarModal() {
  const displayModal = modal.style.display;

  if (displayModal == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
btnAtivaModal.addEventListener("click", mostrarModal);


// Fechar Modal
const btnFecharModal = document.querySelector(".fecharModal");
function fechaModal() {
  modal.style.display = "none";
}

btnFecharModal.addEventListener("click", fechaModal);

console.log(modal);
console.log(btnAtivaModal);
