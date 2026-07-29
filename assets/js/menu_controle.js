  const botaoMenu = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");
        const botoesSubmenu = document.querySelectorAll(".submenu-toggle");

        botaoMenu.addEventListener("click", () => {
            const menuAberto = menu.classList.toggle("ativo");
            botaoMenu.setAttribute("aria-expanded", String(menuAberto));
            botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
        });

        botoesSubmenu.forEach((botao) => {
            botao.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    const item = botao.closest(".menu-item");
                    const aberto = item.classList.toggle("submenu-aberto");
                    botao.setAttribute("aria-expanded", String(aberto));
                }
            });
        });