const segundos20 = 20;
let tiempoEndScreen=0;
let timerEnd;
let looptiempoEndScreen;
let teclaEnter;


let endState = {
    preload: endLoadAssets,
    create: endDisplayScreen,
    update: actualizaFin
};

let btnBack;

function endLoadAssets() {
    game.load.image('backButton', 'assets/imgs/aBtnBack.png');
    game.load.image('botonEnter', 'assets/imgs/cEnter.png');
    game.load.image('CButton', 'assets/imgs/aBtnC.png');
}

function endDisplayScreen() {
    tiempoEndScreen=0;
    game.input.enabled = true;
    if(parte=="A") game.add.image(0, 0,'fondoA');
    else if(parte=="C") game.add.image(0, 0,'fondoC');
    else game.add.image(0, 0,'fondo');
    looptiempoEndScreen = game.time.events.loop(Phaser.Timer.SECOND, actualizarTiempoEndScreen, this);

    let textTitle = 'Better luck next time';
    let styleTitle = {
        font: 'Caveat Brush',
        fontSize: '30pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle2 = 'Your Score: ' + score;
    let styleTitle2 = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle3 = 'Play again?';
    let textTitleTiempo = 'Your time mark: ' + tiempo;
    let textTitleVida = 'SORRY, YOU HAVE BEEN FIRED';
    let styleTitleVida = {
        font: 'Caveat Brush',
        fontSize: '44pt',
        fontWeight: 'bold',
        fill: '#EEEEEE',
        stroke: '#000000',
        strokeThickness: 6
    };
    game.add.text(500, 200, textTitle2, styleTitle2);
    game.add.text(500, 250, textTitleTiempo, styleTitle2);

    jugarDeNuevoX=500;
    jugarDeNuevoY=400;
    let tempEnd = game.add.text(jugarDeNuevoX, jugarDeNuevoY, textTitle3, styleTitle);
    imgVolverAJugar = game.add.sprite(jugarDeNuevoX+tempEnd.width, jugarDeNuevoY, 'botonEnter');
    imgVolverAJugar.anchor.setTo(0, 0.5);

    let temp=game.add.text(500, game.world.height / 12, textTitleVida, styleTitleVida);

    let tempX = 500;
    let tempY = game.world.height / 3 *2.5;
    let styleTemp = {
        font: 'Caveat Brush',
        fontSize: '44pt',
        fontWeight: 'bold',
        fill: '#FFFFFF'
    };
    if (vida > 0){
        temp.text='VICTORY!';
        if (parte=='B')
        {
            botonC = game.add.button(tempX+475, tempY-15, 'CButton', continuarEnPartC);
            botonC.anchor.setTo(0.5, 0.5);
        }
    }
    else
    {
        sonidoDerrota.play();
        game.add.text(500, 125, textTitle, styleTitle);
    }
    btnBack = game.add.button(tempX, tempY-15, 'backButton', onBackButtonEnd);
    btnBack.anchor.setTo(0.5, 0.5);
    textB = game.add.text(tempX+15, tempY-15, 'BACK', styleTemp);
    textB.anchor.setTo(0.5, 0.5);

    reinicia();
}
function actualizaFin(){
    endScreenFinalizado();
}
function onBackButtonEnd() {
    tiempo=0;
    score=0;
    game.state.start('menu');
}

function reinicia(){
    tiempo=0;
    score=0;
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(function () {game.state.start('partA');}, this);
}
function actualizarTiempoEndScreen(){
    tiempoEndScreen++;
}
function endScreenFinalizado(){
    if (tiempoEndScreen >= segundos20){
        game.state.start('menu');
    }
}
function continuarEnPartC(){
    tiempo=0;
    score=0;
    game.state.start('inter1');
}