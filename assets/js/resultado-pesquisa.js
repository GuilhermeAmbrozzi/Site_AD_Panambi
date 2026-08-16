const parametros = new URLSearchParams(window.location.search);

const termoOriginal = parametros.get("q") || "";

const resumo = document.querySelector("#pesquisa-resumo");
const lista = document.querySelector("#lista-resultados");

function normalizarPesquisa(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

const termo = normalizarPesquisa(termoOriginal);

const resultados = dadosPesquisa.filter((item) => {

    const conteudo = normalizarPesquisa([
        item.titulo,
        item.descricao,
        item.categoria,
        ...item.palavrasChave
    ].join(" "));

    console.log("Termo original:", termoOriginal);
    console.log("Termo normalizado:", termo);
    console.log("Resultados encontrados:", resultados);

    return conteudo.includes(termo);
});

if (!termo) {

    resumo.textContent =
        "Digite um termo para realizar uma pesquisa.";

} else if (resultados.length === 0) {

    resumo.textContent =
        `Nenhum resultado encontrado para "${termoOriginal}".`;

    lista.innerHTML = `
        <div class="pesquisa-vazia">

            <p>
                Tente utilizar palavras diferentes ou mais gerais.
            </p>

            <a href="/Site_AD_Panambi/index.html">
                Voltar para a página inicial
            </a>

        </div>
    `;

} else {

    resumo.textContent =
        `${resultados.length} resultado(s) encontrado(s) para "${termoOriginal}".`;

    lista.innerHTML = resultados
        .map((item) => `
            <article class="resultado-card">

                <span class="resultado-categoria">
                    ${item.categoria}
                </span>

                <h2>
                    <a href="${item.url}">
                        ${item.titulo}
                    </a>
                </h2>

                <p>
                    ${item.descricao}
                </p>

                <a
                    class="resultado-link"
                    href="${item.url}">
                    Acessar conteúdo
                </a>

            </article>
        `)
        .join("");
}