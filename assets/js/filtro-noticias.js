const botoesFiltro =
    document.querySelectorAll(".filtro-noticia");

const noticias =
    document.querySelectorAll(".noticia-card");

const avisoSemNoticias =
    document.querySelector("#nenhuma-noticia");


botoesFiltro.forEach((botao) => {

    botao.addEventListener("click", () => {

        const categoria =
            botao.dataset.filtro;


        /* Remove ativo de todos */

        botoesFiltro.forEach((item) => {
            item.classList.remove("ativo");
        });


        /* Marca o selecionado */

        botao.classList.add("ativo");


        let quantidadeVisivel = 0;


        noticias.forEach((noticia) => {

            const categoriaNoticia =
                noticia.dataset.categoria;


            const mostrar =
                categoria === "todas" ||
                categoriaNoticia === categoria;


            noticia.hidden = !mostrar;


            if (mostrar) {
                quantidadeVisivel++;
            }

        });


        avisoSemNoticias.hidden =
            quantidadeVisivel !== 0;

    });

});