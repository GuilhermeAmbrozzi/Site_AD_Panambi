const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});