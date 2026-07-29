const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botao && menu) {
    botao.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}