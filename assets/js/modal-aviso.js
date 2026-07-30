const avisoModal = document.querySelector("#aviso-modal");
const botaoFecharAviso = document.querySelector("#aviso-modal-fechar");

if (avisoModal && botaoFecharAviso) {

    function abrirAviso() {
        avisoModal.classList.add("ativo");
        document.body.classList.add("modal-aberto");

        botaoFecharAviso.focus();
    }

    function fecharAviso() {
        avisoModal.classList.remove("ativo");
        document.body.classList.remove("modal-aberto");
    }

    window.addEventListener("load", abrirAviso);

    botaoFecharAviso.addEventListener("click", fecharAviso);

    avisoModal.addEventListener("click", (evento) => {

        if (evento.target === avisoModal) {
            fecharAviso();
        }

    });

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            fecharAviso();
        }

    });

}