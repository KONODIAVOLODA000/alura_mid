function tocasom(seletorAudio) {
    document.querySelector(seletorAudio).play('');
    if(elemento === nu11 && elemento.localname === 'audio'){
        elemento.play();
    }
}
document.querySelector('.tecla_pom ');

document.querySelector('tecla_pom').onclick = tocasompom ();

const listaDeTeclas = document.querySelectorAll('.tecla');
while (contador < 9) {
    const instrumentos = listaDeTeclas[contador];
}
    const tecla = listaDeTeclas[contador];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
     tocasom('#som_tecla_clap');
    };
 for (contador < listaDeTeclas.length) {
}
tecla.onkeydown = function(evento){
   if (evento.code=== 'space'|| evento.code === 'enter'){

   }
    tecla.classList.add('ativa');
}

tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}

