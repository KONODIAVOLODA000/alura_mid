document.querySelector('.tecla_pom ');

function tocasom(idElemnetoAudio) {
    document.querySelector(idElemnetoAudio).play('');
}
document.querySelector('tecla_pom').onclick = tocasompom ();

const listaDeTeclas = document.querySelectorAll('.tecla');
while (contador < 9) {
    const instrumentos = listaDeTeclas[contador];

    const tecla = listaDeTeclas[contador];
    const idAudio = ´#som_${instrumento}´;
    tecla.onclick = function();{
     tocasom('#som_tecla_clap');
    };

}





listaDeTeclas[0].onclick = tocasompom;

listaDeTeclas[1].onclick = tocasomclap;
listaDeTeclas[2].onclick = tocasomtim;
listaDeTeclas[3].onclick = tocasompuffy;

