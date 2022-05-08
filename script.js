const botao = document.getElementsByClassName("mudar");
const botao1 = document.querySelector('.mudar')

function mudar_modo() {
    var elem = document.body
    elem.classList.toggle("dark_mode");

    if (elem.classList == 'dark_mode') {

        botao1.innerHTML = 'Light';

    } else {
        botao1.innerHTML = 'Dark';
    }
}
