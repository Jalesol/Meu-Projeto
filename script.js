const imagens = document.querySelector("#imagens");

const loginButton = document.querySelector("#login-button");
const socialButtons = document.querySelectorAll(".social-button");


// Animação quando a página carregar
window.addEventListener("load", function () {

    setTimeout(function () {
        imagens.classList.add("animar-entrada");
    }, 200);

});


// Função para animar as imagens
function animarImagens() {

    imagens.classList.remove("animar-login");

    // Força o navegador a reiniciar a animação
    void imagens.offsetWidth;

    imagens.classList.add("animar-login");
}


// Botão principal
loginButton.addEventListener("click", function () {

    animarImagens();

});


// Botões Google, Microsoft, Apple e Slack
socialButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        animarImagens();

    });

});