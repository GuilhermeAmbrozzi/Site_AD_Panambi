const formulariosPesquisa = document.querySelectorAll(".pesquisa-form");

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

formulariosPesquisa.forEach((formulario) => {

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const campo = formulario.querySelector('input[type="search"]');

        const termoOriginal = campo.value.trim();
        const termo = normalizarTexto(termoOriginal);

        if (!termo) {
            return;
        }

        const resultados = dadosPesquisa.filter((item) => {

            const conteudo = normalizarTexto([
                item.titulo,
                item.descricao,
                item.categoria,
                ...item.palavrasChave
            ].join(" "));

            return conteudo.includes(termo);
        });

        if (resultados.length === 1) {

            window.location.href = resultados[0].url;

            return;
        }

        const termoURL = encodeURIComponent(termoOriginal);

        window.location.href =
            `/Site_AD_Panambi/pages/pesquisa.html?q=${termoURL}`;
    });

});