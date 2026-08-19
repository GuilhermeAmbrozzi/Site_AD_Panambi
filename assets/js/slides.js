// pega os elementos no html
let slides = document.querySelectorAll('.slide')
let dots = document.querySelectorAll('.dot')
// controla qual imagem está ativa
let index = 0

// essa função showSlide controla a troca das imagem sem recarregar a página, ele recebe um numero onde dentifica cada imagem
function showSlide(i){
    // o forEach é para cada iem da lista faça algo nesse caso ele remove o active da class de todos os itens da classList
    slides.forEach(s => s.classList.remove('active'))
        dots.forEach(d => d.classList.remove('active'))
        //aqui ele add o active no item selecionado tento do slide como no dots atraves da função (i)
        slides[i].classList.add('active')
        dots[i].classList.add('active')
}
// ao clicar no dot ele muda a foto
dots.forEach((dot, i) =>{
    // Aqui temos novamente o forEach e aqi ele monitora o clik em cada item da lista mudando para o item selecionado pelo usuario, e atraves do item selecionado atraves da função (i) ele identifica qual imagem é
    dot.addEventListener('click', () =>{
        index = i
        showSlide(index)
    })
})
// tempo que faz mudar a imagem aqui esta com 4segundos
setInterval(() =>{
    // aqui ele controla quando chega na ultima imaem ele retorna para a primeira.
    index = (index +1 ) % slides.length
    showSlide(index)
}, 6500)