let settingState = {
    preload: loadConfigAssets,
    create: doConfig
};

let btnRaton, btnTeclado;
let barraX, barraY, barra;
let barraSize, desplaza;
let bolaXpos=barraX, txtXpos=bolaXpos+12;

function loadConfigAssets() {
    game.load.image('imgTR', 'assets/imgs/aBtnTeclado.png');
    game.load.image('imgVolver', 'assets/imgs/aBtnBack.png');
    game.load.image('barra', 'assets/imgs/aBtnRaya.png');
    game.load.image('bola', 'assets/imgs/aBtnThreads.png');
    game.load.image('mas', 'assets/imgs/aBtnMas.png');
    game.load.image('menos', 'assets/imgs/aBtnMenos.png');
}

function doConfig() {
    game.add.image(0, 0, 'fondo');

    let textTitle = 'Settings';
    let styleTitle = {
        font: 'Caveat Brush',
        fontSize: '50pt',
        fontWeight: 'bold',
        fill: '#EEEEEE',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle2 = 'Number of Threads';
    let styleTitle2 = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let textTitle3 = 'Difficulty: ';
    let styleTitle3 = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#2c77d1',
        stroke: '#000000',
        strokeThickness: 6
    };
    let styleBack = {
        font: 'Caveat Brush',
        fontSize: '40pt',
        fontWeight: 'bold',
        fill: '#FFFFFF'
    };
    let styleNumberThreats = {
        font: 'Caveat Brush',
        fontSize: '40pt',
        fontWeight: 'bold',
        fill: '#000000'
    };
    let styleControls = {
        font: 'Caveat Brush',
        fontSize: '22pt',
        fontWeight: 'bold',
        fill: '#000000'
    };


    barraX=game.world.width / 6;
    barraY=game.world.height / 3;
    btnRaton = game.add.button(barraX *4, barraY *1.8, 'imgTR', onControlsPressed);
    btnRaton.anchor.setTo(0.5, 0.5);
    btnTeclado = game.add.button(barraX *3, barraY *1.8, 'imgTR', onControlsPressed);
    btnTeclado.anchor.setTo(0.5, 0.5);
    btnBack = game.add.button(barraX *2, barraY *2.5, 'imgVolver', onBackPressed);
    btnBack.anchor.setTo(0.5, 0.5);


    barraX2=barraX *3.5;
    barraY2=barraX;
    barra=game.add.image(barraX2, barraY2, 'barra');
    barra.anchor.setTo(0.5, 0.5);

    barraSize=barra.width;
    desplaza=barraSize/6;
    bolaXpos=barraX2-barraSize/2+desplaza*(threats-3);
    txtXpos=bolaXpos;

    bolaThreats=game.add.image(bolaXpos, barraY2, 'bola');
    bolaThreats.anchor.setTo(0.5, 0.5);
    textThreats=game.add.text(txtXpos, barraY2+8, threats, styleNumberThreats);
    textThreats.anchor.setTo(0.5, 0.5);
    btnMenosThreats=game.add.button(barraX2-barraSize/2-100, barraY2, 'menos', onRangePressed);
    btnMenosThreats.anchor.setTo(0.5, 0.5);
    btnMasThreats=game.add.button(barraX2+barraSize/2+100, barraY2, 'mas', onRangePressed);
    btnMasThreats.anchor.setTo(0.5, 0.5);

    game.add.text(200, 40, textTitle, styleTitle);
    textT=game.add.text(barraX *3, barraY *1.8, 'KEYBOARD', styleControls);
    textT.anchor.setTo(0.5, 0.5);
    textR=game.add.text(barraX *4, barraY *1.8, 'MOUSE', styleControls);
    textR.anchor.setTo(0.5, 0.5);
    textTemp = game.add.text(barraX2, barraY2-120, textTitle2, styleTitle2);
    textTemp.anchor.setTo(0.5, 0.5);
    textTemp2 = game.add.text(barraX *2 +15, barraY *2.5, 'BACK', styleBack);
    textTemp2.anchor.setTo(0.5, 0.5);
    textoDificultad = game.add.text(barraX2, barraY2-80, textTitle3, styleTitle3);
    textoDificultad.anchor.setTo(0.5, 0.5);


    if(teclado) onControlsPressed(btnTeclado);
    else onControlsPressed(btnRaton);


    ActualizarTextoDificultad();
}


function onBackPressed() {
        vuelveDeSettings = true;
        game.state.start('menu');
}


function onControlsPressed(button) {
    if(button === btnRaton)
    {
        teclado = false;
        button.alpha=1;
        btnTeclado.alpha=0.5;
    }
    if(button === btnTeclado)
    {
        teclado = true;
        button.alpha=1;
        btnRaton.alpha=0.5;
    }
}


function onRangePressed(button) {
    if(button === btnMasThreats && threats<9)
    {
        threats+=1;
        textThreats.x+=desplaza;
        bolaThreats.x+=desplaza;
        ActualizarTextoDificultad();
    }
    else if(button === btnMenosThreats && threats>3)
    {
        threats-=1;
        textThreats.x-=desplaza;
        bolaThreats.x-=desplaza;
        ActualizarTextoDificultad();
    }
    textThreats.text=threats;
}


function ActualizarTextoDificultad() {
    if(threats<5) textoDificultad.text="Difficulty: Easy";
    else if(threats>8) textoDificultad.text="Difficulty: EXTREME";
    else if(threats>6) textoDificultad.text="Difficulty: Hard";
    else textoDificultad.text="Difficulty: Normal";
}

