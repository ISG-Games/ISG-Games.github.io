let timepoInterScreen=0;
let temporizadorInter;
let loopTiempoInter;
const SEGUNDOS5 =5;

let interState = {
    create: intDisplayScreen,
    update: actualizaInter
};
function intDisplayScreen() {
    timepoInterScreen=0;
    sonidoVictoria.play();
    if(parte=="A") game.add.image(0, 0,'fondoA');
    else if(parte=="B") game.add.image(0, 0,'fondo');

        let textTitle = 'CONGRATULATIONS';
        let styleTitle = {
            font: 'Caveat Brush',
            fontSize: '44pt',
            fontWeight: 'bold',
            fill: '#EEEEEE',
            stroke: '#000000',
            strokeThickness: 6
        };
        let textTitle2 = 'A better hospital made an offer for you';
        let styleTitle2 = {
            font: 'Caveat Brush',
            fontSize: '30pt',
            fontWeight: 'bold',
            fill: '#2c77d1',
            stroke: '#000000',
            strokeThickness: 6
        };
        game.add.text(500, 125, textTitle, styleTitle);
        game.add.text(500, 200, textTitle2, styleTitle2);

    loopTiempoInter = game.time.events.loop(Phaser.Timer.SECOND, actualizarTiempoInterScreen, this);

}
function actualizaInter()
{
    interScreenFinalizado();
}

function actualizarTiempoInterScreen(){
    timepoInterScreen++;
}
function interScreenFinalizado(){
    if (timepoInterScreen == SEGUNDOS5){
        if(parte=="A") game.state.start('partB');
        if(parte=="B") game.state.start('partC');
    }
}
