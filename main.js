function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio).play();

    if (elemento /*!= null*/ && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

