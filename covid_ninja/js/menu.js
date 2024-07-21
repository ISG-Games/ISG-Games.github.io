const WORLD_WIDTH = 1280;
const WORLD_HEIGHT = 720;

let teclado = true;
let threats = 3;
let sonidoFondo;
let vuelveDeSettings = false;


let initialState = {
    preload: loadAssets,
    create: displayScreen,
};

let btnA, btnB, btnC, btnSettings;

function loadAssets() {
    game.load.image('fondo', 'assets/imgs/fondoB.png');
    game.load.image('fondoA', 'assets/imgs/fondoA.png');
    game.load.image('fondoC', 'assets/imgs/fondoC.png');
    game.load.image('settingsButton', 'assets/imgs/aBtnSettings.png');
    game.load.image('AButton', 'assets/imgs/aBtnA.png');
    game.load.image('BButton', 'assets/imgs/aBtnB.png');
    game.load.image('CButton', 'assets/imgs/aBtnC.png');

    game.load.audio('mfondo', 'assets/snds/fondomenu.mp3');
}

function displayScreen() {

    game.input.enabled = true;
    game.add.image(0, 0, 'fondo');

    if(vuelveDeSettings) vuelveDeSettings = false; // Pues en settings debe seguir la cancion sonando y no debe empezar ninguna nueva.
    
    else 
    {
    sonidoFondo = game.sound.add('mfondo');
    sonidoFondo.volume=0.2;
    sonidoFondo.play();
    }

    let textTitle = 'Team Terror presents';
    let styleTitle = {
        font: 'Caveat Brush',
        fontSize: '35pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle2 = 'COVID Ninja';
    let styleTitle2 = {
        font: 'Caveat Brush',
        fontSize: '60pt',
        fontWeight: 'bold',
        fill: '#EEEEEE',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle3 = 'Diego Sansano, Joel Aguilella e Iván Safón';
    let styleTitle3 = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle4 = 'GAME INSTRUCTIONS';
    let styleTitle4 = {
        font: 'Caveat Brush',
        fontSize: '28pt',
        fontWeight: 'bold',
        fill: '#EEEEEE',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle5 = 'We must prevent the increase in infections. \n Use the arrow keys or the mouse to change paths\n and the spacebar or left click to shoot the vaccines.\n You must stop the pandemic.';
    let styleTitle5 = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    game.add.text(game.world.width / 2.5, 30, textTitle, styleTitle);
    game.add.text(500, 80, textTitle2, styleTitle2);
    game.add.text(500, game.world.height / 4, textTitle3, styleTitle3);
    game.add.text(500, game.world.height / 4 * 2.7, textTitle4, styleTitle4);
    game.add.text(400, game.world.height / 4 * 3, textTitle5, styleTitle5);

    btnA = game.add.button(game.world.width / 6 *2, game.world.height / 3*1.5 , 'AButton', onPartAButtonMenu);
    btnA.anchor.setTo(0.5, 0.5);
    btnB = game.add.button(game.world.width / 6 *3, game.world.height / 3 *1.5, 'BButton', onPartBButtonMenu);
    btnB.anchor.setTo(0.5, 0.5);
    btnC = game.add.button(game.world.width / 6 *4, game.world.height / 3 *1.5, 'CButton', onPartCButtonMenu);
    btnC.anchor.setTo(0.5, 0.5);
    btnSettings = game.add.button(game.world.width / 6 *5, game.world.height / 3 *1.5, 'settingsButton', onSettingsButtonMenu);
    btnSettings.anchor.setTo(0.5, 0.5);
}

function onSettingsButtonMenu() {
    game.state.start('settings');
}

function onPartAButtonMenu(){
    sonidoFondo.stop();
    game.state.start('partA');
}

function onPartBButtonMenu() {
    sonidoFondo.stop();
    game.state.start('partB');
}

function onPartCButtonMenu() {
    sonidoFondo.stop();
    game.state.start('partC');
}

