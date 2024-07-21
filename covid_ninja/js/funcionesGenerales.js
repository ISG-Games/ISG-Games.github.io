const PLAYER_X = 200+10;
const PLAYER_MIN_Y = 160;
const PLAYER_MAX_Y = WORLD_HEIGHT - 70;
const JERINGA_VELOCITY = 760;
const JERINGA_GROUP_SIZE = 3;

const ENEMIGO_VELOCITY_A = [300, 325, 350];
const ENEMIGO_CICLO_TEMPORAL_A = [1.6*Phaser.Timer.SECOND, 1.25*Phaser.Timer.SECOND, 0.8*Phaser.Timer.SECOND] ;
const ENEMIGO_GROUP_SIZE_A = [6, 9, 15];
const ENEMIGO_CICLO_TEMPORAL_C = [1.8*Phaser.Timer.SECOND, 1.6*Phaser.Timer.SECOND, 1.25*Phaser.Timer.SECOND] ;
const ENEMIGO_GROUP_SIZE_C = [10, 18, 28];
const ENEMIGOMUERE_GROUP_SIZE = 20;

const HUMO_GROUP_SIZE = 11;

const DIAGONAL_GROUP_SIZE = 3;

const KIT_VIDA_PORCENTAJE_A = 0.45;
const KIT_VIDA_POQUITO_MAS = 50;
const KIT_GROUP_SIZE_A = 10;
const KIT_VIDA_TEDA = 3;

const CANTIDAD_NODOS=6;
const VIDA_MAXIMA=12;

const HUD_Y=52;

const ALCANTAR_GROUP_SIZE=200;

const POWERUP_PORCENTAJE = 0.06;

let cursorsB, fireButton;
let playerHilo, vHilos, vNodos, mantieneUp, mantieneDown;
let humoHiloRaton;

let groupJeringas;
let groupEnemigos;
let groupEnemigoMuere;
let groupVidas;
let groupHumo;
let groupDiagonales;
let groupAlcantar;

let loopEnemigos;
let killsPlayer;

let timerC;
let loopTiempo;
let tiempo=0;
let scoreBoard;
let score=0;
let vida;
let nivel, parte;
let nivelBoard;
let tiempoParaEnemigo = 2;
let vidaTween;
let healthBar;
let sonidoLanzar;
let sonidoCuración;
let sonidoBotiquin;
let sonidoVictoria

let genState = {
    preloadGen: preloadGen,
    createGen: createAssets,
    updateGen: updateGen
};
function preloadGen()
{
    preloadGenSprites();
}
function preloadGenSprites()
{
    game.load.image('jeringa','assets/imgs/jeringuilla.png');
    game.load.image('camino', 'assets/imgs/camino.png');
    game.load.image('marcaCamino', 'assets/imgs/marcaCamino.png');
    game.load.spritesheet('playerSprites', 'assets/imgs/playerJuntado.png', 135, 152);
    game.load.spritesheet('enemigo', 'assets/imgs/enemyJuntado.png', 105, 139);
    game.load.spritesheet('enemigoMuere', 'assets/imgs/enemyMuere.png', 105, 139);
    game.load.image('barraTiempo', 'assets/imgs/bTime.png');
    game.load.image('barraScore', 'assets/imgs/bScore.png');
    game.load.image('humo', 'assets/imgs/playerSeparado3.png');
    game.load.image('vida', 'assets/imgs/botiquin.png');
    game.load.image('barra_vida1', 'assets/imgs/barraVida1.png');
    game.load.image('barra_vida2AB', 'assets/imgs/barraVida2AB.png');
    game.load.image('barra_vida2C', 'assets/imgs/barraVida2C.png');
    game.load.image('barra_vida3', 'assets/imgs/barraVida3.png');
    game.load.image('diagonal', 'assets/imgs/caminoDiagonal.png');
    game.load.image('alcantarilla', 'assets/imgs/alcantarilla.png');

    game.load.audio('lanzamiento', 'assets/snds/lanzamiento.mp3');
    game.load.audio('camblvl', 'assets/snds/cambiolvl.mp3');
    game.load.audio('curado', 'assets/snds/curado.mp3');
    game.load.audio('masvida', 'assets/snds/vida.mp3');
    game.load.audio('victoria', 'assets/snds/victoria.mp3');
    game.load.audio('mascarillaActiva', 'assets/snds/mascarillaActiva.wav');
    game.load.audio('derrota','assets/snds/derrota.mp3' );
    game.load.audio('damage','assets/snds/damage.mp3' );
}
function createAssets()
{
    vida=VIDA_MAXIMA;
    nivel=0;
    killsPlayer=0;

    cursorsB = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    sonidoLanzar = game.sound.add('lanzamiento');
    sonidocambio = game.sound.add('camblvl');
    sonidoCuración = game.sound.add('curado');
    sonidoLanzar.volume=0.3;
    sonidoCuración.volume=0.2;
    sonidoBotiquin = game.sound.add('masvida');
    sonidoBotiquin.volume=0.4;
    sonidoVictoria = game.sound.add('victoria');
    sonidoVictoria.volume=0.15;
    sonidoMascarilla = game.sound.add('mascarillaActiva');
    sonidoMascarilla.volume=0.6;
    sonidoDerrota = game.sound.add('derrota');
    sonidoDerrota.volume=0.2;
    sonidoDamage = game.sound.add('damage');
    sonidoDamage.volume=0.3;

    game.input.enabled = true;
    if(parte=="A") game.add.image(0, 0,'fondoA');
    else if(parte=="C") game.add.image(0, 0,'fondoC');
    else game.add.image(0, 0,'fondo');

    game.add.sprite(10, 10, 'barra_vida1');
    if(parte=="C") healthBar =game.add.sprite(10+7, 10, 'barra_vida2C');
    else healthBar =game.add.sprite(10+7, 10, 'barra_vida2AB');
    game.add.sprite(10, 10, 'barra_vida3');

    groupDiagonales = game.add.group();
    groupDiagonales.createMultiple(DIAGONAL_GROUP_SIZE, 'diagonal');
    groupDiagonales.callAll('anchor.setTo', 'anchor', 0, 0.5);

    marcaCamino=game.add.sprite(0, PLAYER_MIN_Y+10, 'marcaCamino');
    marcaCamino.anchor.setTo(0, 0.5);

    groupHumo = game.add.group();
    groupHumo.createMultiple(HUMO_GROUP_SIZE, 'humo');
    groupHumo.forEach(parametrosHumo, this);

    player = game.add.sprite(PLAYER_X, PLAYER_MIN_Y, 'playerSprites');
    game.physics.arcade.enable(player);
    player.anchor.setTo(0.5, 0.5);
    player.animations.add('disparo', [1, 0], 5, false);
    if(threats>=8){
        player.height*=1-(threats-5)/10;
        player.width*=1-(threats-5)/10;
    }
    else if(threats>=6){
        player.height*=1-(threats-5)/20;
        player.width*=1-(threats-5)/20;
    }


    playerHilo = 0;
    humoHiloRaton=playerHilo;
    vHilos = [];
    for (let i = 0; i < threats; i++){
        vHilos.push(PLAYER_MIN_Y + i/(threats-1) * (PLAYER_MAX_Y - PLAYER_MIN_Y))
        temp=game.add.sprite(0, vHilos[i]+35, 'camino');
        temp.anchor.setTo(0, 0.5);
        if(threats>=5) temp.height*=0.7-(threats-5)/10;
    }

    vNodos=[];
    for (let i = 0; i < CANTIDAD_NODOS; i++){
        vNodos.push(PLAYER_X + i/(CANTIDAD_NODOS-1) * (WORLD_WIDTH - PLAYER_X - 200));
    }

    groupAlcantar = game.add.group();
    groupAlcantar.createMultiple(ALCANTAR_GROUP_SIZE, 'alcantarilla');
    groupAlcantar.forEach(parametrosVidas, this);

    //Grupos para disparo y enemigos
    groupJeringas = game.add.group();
    groupJeringas.createMultiple(JERINGA_GROUP_SIZE, 'jeringa');
    groupJeringas.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    groupJeringas.setAll('checkWorldBounds', true);
    groupJeringas.forEach(parametrosJeringas, this);

    groupEnemigos = game.add.group();
    groupEnemigos.enableBody = true;
    groupEnemigos.createMultiple(ENEMIGO_GROUP_SIZE_C[2], 'enemigo');
    groupEnemigos.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    groupEnemigos.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    groupEnemigos.setAll('checkWorldBounds', true);
    groupEnemigos.forEach(parametrosEnemigos, this);
    timerEnemigosGroup();

    groupEnemigoMuere = game.add.group();
    groupEnemigoMuere.createMultiple(ENEMIGOMUERE_GROUP_SIZE, 'enemigoMuere');
    groupEnemigoMuere.forEach(parametrosEnemigoMuere, this);

    groupVidas = game.add.group();
    groupVidas.createMultiple(KIT_GROUP_SIZE_A, 'vida');
    groupVidas.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    groupVidas.setAll('checkWorldBounds', true);
    groupVidas.forEach(parametrosVidas, this);

    //HUD
    barraTiempo = game.add.sprite(game.world.width/2, HUD_Y, 'barraTiempo');
    barraTiempo.anchor.setTo(0.5, 0.5);
    barraScore = game.add.sprite(game.world.width-200, HUD_Y, 'barraScore');
    barraScore.anchor.setTo(0.5, 0.5);
    let styleTimer = {
        font: 'Caveat Brush',
        fontSize: '40pt',
        fontWeight: 'bold',
        fill: '#000000'
    };
    let styleScore = {
        font: 'Caveat Brush',
        fontSize: '20pt',
        fontWeight: 'bold',
        fill: '#000000'
    };
    let stylePart = {
        font: 'Caveat Brush',
        fontSize: '30pt',
        fontWeight: 'bold',
        fill: '#000000'
    };
    timerC = game.add.text(game.world.width/2, HUD_Y+10, tiempo, styleTimer);
    timerC.anchor.setTo(0.5, 0.5);
    loopTiempo = game.time.events.loop(Phaser.Timer.SECOND, actualizarTiempo, this);

    scoreBoard = game.add.text(game.world.width-200-22, HUD_Y-20, 'Score: '+score, styleScore);
    scoreBoard.anchor.setTo(0.5, 0.5);
    nivelBoard = game.add.text(game.world.width-200-20, HUD_Y+17, 'Part - '+ parte + (nivel + 1), stylePart);
    nivelBoard.anchor.setTo(0.5, 0.5);
}

function parametrosHumo(humo) {
    humo.anchor.x = 0.55;
    humo.anchor.y = 0.25;
    humo.width*=0.8;
    humo.height*=0.8;
    if(threats>=8){
        humo.height*=1-(threats-5)/10;
        humo.width*=1-(threats-5)/10;
    }
    else if(threats>=6){
        humo.height*=1-(threats-5)/20;
        humo.width*=1-(threats-5)/20;
    }
}

function parametrosJeringas(jeringa) {
    game.physics.arcade.enable(jeringa);
    jeringa.anchor.x = 0.5;
    jeringa.anchor.y = 0.5;
}

function parametrosEnemigos(enemigo){
    if(threats>=8){
        enemigo.height*=0.9-(threats-5)/10;
        enemigo.width*=0.9-(threats-5)/10;
    }
    else if(threats>=5){
        enemigo.height*=0.9-(threats-5)/20;
        enemigo.width*=0.9-(threats-5)/20;
    }
    enemigo.animations.add('andarRapido', [0, 1], 5, true);
    enemigo.animations.add('andarLento', [2, 3], 3, true);
    enemigo.animations.add('sueltaAlcantar', [4, 5], 4, true);
    enemigo.animations.add('mascarillaInmune', [6, 7], 4, true);
    enemigo.animations.add('mascarilla', [8, 9], 4, true);
}

function parametrosVidas(vida) {
    game.physics.arcade.enable(vida);
    vida.anchor.x = 0.5;
    vida.anchor.y = 0.5;
    if(threats>=8){
        vida.height*=0.9-(threats-5)/10;
        vida.width*=0.9-(threats-5)/10;
    }
    else if(threats>=5){
        vida.height*=0.9-(threats-5)/20;
        vida.width*=0.9-(threats-5)/20;
    }
}

function parametrosEnemigoMuere(enemigo){
    enemigo.animations.add('normal', [0], 1, false);
    enemigo.animations.add('conMascar', [1], 1, false);
    if(threats>=8){
        enemigo.height*=0.9-(threats-5)/10;
        enemigo.width*=0.9-(threats-5)/10;
    }
    else if(threats>=5){
        enemigo.height*=0.9-(threats-5)/20;
        enemigo.width*=0.9-(threats-5)/20;
    }
}

function resetMember(item) {
    item.kill();
}

function muereEnemyNace(posX, posY, mascarilla){
    let temp = groupEnemigoMuere.getFirstExists(false);
    if (temp) {
        if(mascarilla==0) temp.animations.play('normal');
        else temp.animations.play('conMascar');
        temp.reset(posX, posY);
        temp.alpha=1;
        let tween=game.add.tween(temp).to({alpha: 0}, 400, Phaser.Easing.Circular.In, true);
        tween.onComplete.add(resetMember, temp);
    }
}

function nuevoNivel()
{
    game.time.events.remove(loopEnemigos);
    if(nivel < 2)
    {
        killsPlayer=0;
        nivel += 1;
        if(parte == 'B') recursivaNodos(nivel);
        if(parte == 'C'){
            nacePowerUP();
            sacarNodoAlcantarilla();
        }

        nivelBoard.text = 'Part - '+ parte + (nivel + 1);
        sonidocambio.play();

        timerEnemigosGroup();

    }
    else if (nivel == 2)
    {
        if(parte=="C") frenarAlcantarillas();
        let temp = groupEnemigos.getFirstExists(true);
        if(!temp){
            player.alpha=1;
            let tween=game.add.tween(player).to({alpha: 0}, 5000, Phaser.Easing.Circular.Out, true);
            tween.onComplete.add(parteAcabada);
            game.time.events.remove(loopTiempo);
            sonidocambio.play();
        }
    }
}

function parteAcabada(){
    if(vida<=0){
        game.state.start('end');
    }
    else if(parte=="A")
    {
        game.state.start('inter1');
    }
    else if(parte=="B")
    {
        destroyNodos();
        game.state.start('end');
    }
    else if(parte=="C")
    {
        game.state.start('end');
    }
}
function updateGen()
{
    game.physics.arcade.overlap(groupJeringas,groupEnemigos,colisionJeringaEnemigo,null,this);
    groupEnemigos.forEachExists(cuidaoEnemigos, this);

    game.physics.arcade.overlap(player,groupVidas,colisionVidaJugador,null,this);
    groupVidas.forEachExists(cuidaoVidas, this);

    game.physics.arcade.overlap(groupJeringas,groupVidas,colisionJeringaVida,null,this);

    movementTecladoRaton();
    disparoTecladoRaton();
}

function movementTecladoRaton()
{
    if(teclado)
    {
        if (cursorsB.down.isDown && playerHilo != (vHilos.length - 1) && !mantieneDown)
        {
            humoNace(playerHilo);
            playerHilo++;
            player.y = vHilos[playerHilo];
            marcaCamino.y = vHilos[playerHilo]+10;
            mantieneDown = true;
        }
        else if (cursorsB.up.isDown && playerHilo!= 0 && !mantieneUp)
        {
            humoNace(playerHilo);
            playerHilo--;
            player.y = vHilos[playerHilo];
            marcaCamino.y = vHilos[playerHilo]+10;
            mantieneUp = true;
        }
        if(cursorsB.down.isUp)
        {
            mantieneDown = false;
        }
        if(cursorsB.up.isUp)
        {
            mantieneUp = false;
        }
    }
    else
    {
        let masCercano = 0;
        for (let i = 1; i < vHilos.length; i++)
        {
            if( (game.input.mousePointer.y - vHilos[masCercano]) * (game.input.mousePointer.y - vHilos[masCercano]) >
                (game.input.mousePointer.y - vHilos[i]) * (game.input.mousePointer.y - vHilos[i]) ) masCercano = i;
        }
        if(humoHiloRaton!=playerHilo){
            humoNace(humoHiloRaton);
            humoHiloRaton=playerHilo;
        }
        playerHilo = masCercano;
        player.y = vHilos[playerHilo];
        marcaCamino.y = vHilos[playerHilo]+10;
    }
}

function disparoTecladoRaton()
{
    if(teclado)
    {
        if (fireButton.justDown) firevJeringas();
    }

    else
    {
        if (game.input.mousePointer.leftButton.justPressed(30)) firevJeringas();
    }
}

function firevJeringas()
{
    if(parte=="C" && shootPowerPartC>0){
        let temp = groupJeringasPower.getFirstExists(false);
        if (temp) {
            sonidoLanzar.play();
            player.animations.play('disparo');
            temp.reset(PLAYER_X+20, vHilos[playerHilo]+10);
            temp.body.velocity.x = JERINGA_VELOCITY*1.5;
            shootPowerPartC--;
            if(shootPowerPartC<=0){
                shootPowerPartC=0;
                powerHUD.visible=false;
            }
        }
        return temp;
    }
    else{
        let temp = groupJeringas.getFirstExists(false);
        if (temp) {
            sonidoLanzar.play();
            player.animations.play('disparo');
            temp.reset(PLAYER_X+20, vHilos[playerHilo]+10);
            temp.body.velocity.x = JERINGA_VELOCITY;
        }
        return temp;
    }
}

function timerEnemigosGroup(){
    if(parte=="C") loopEnemigos=game.time.events.loop(ENEMIGO_CICLO_TEMPORAL_C[nivel], enemigoNace, this);
    else loopEnemigos=game.time.events.loop(ENEMIGO_CICLO_TEMPORAL_A[nivel], enemigoNace, this);
}

function enemigoNace()
{
    let temp = groupEnemigos.getFirstExists(false);
        if (temp) {
            let aleatorio=Math.round(Math.random()*(vHilos.length-1));

            if(parte=="B"){
                temp.diagonal = -1;
            }
            if(parte=="C") temp.suelta=0;

            temp.mascarilla=0;

            temp.hilo = aleatorio;

            temp.reset(WORLD_WIDTH, vHilos[aleatorio]);

            temp.body.velocity.x = -ENEMIGO_VELOCITY_A[nivel];

            let aleatorioVida = Math.random();

            if(parte=="C" && aleatorioVida <= 0.45){
                temp.life=1;
                temp.animations.play('sueltaAlcantar');
                temp.body.velocity.x *= 0.85;
                temp.suelta=1;
            }
            else if (aleatorioVida <= (0.75)){
                temp.life=1;
                temp.animations.play('andarRapido');
            }
            else
            {
                temp.life=3;
                temp.animations.play('andarLento');
                temp.body.velocity.x *= 0.75;
            }
            temp.inmune = 0;
        }
}

function vidaNace()
{
    let temp = groupVidas.getFirstExists(false);
        if (temp) {
            let aleatorio=Math.round(Math.random()*(vHilos.length-1));
            temp.reset(WORLD_WIDTH, vHilos[aleatorio]);
            temp.body.velocity.x = -ENEMIGO_VELOCITY_A[2] * (4/3);
        }
}

function humoNace(atr)
{
    let temp = groupHumo.getFirstExists(false);
    if (temp) {
        temp.reset(PLAYER_X, vHilos[atr]);
        temp.alpha=0.8;
        let tween=game.add.tween(temp).to({alpha: 0}, 300, Phaser.Easing.Circular.In, true);
        tween.onComplete.add(resetMember, atr);
    }
}

function colisionJeringaEnemigo(jeringa, enemigo) {
    resetMember(jeringa);
    if(enemigo.inmune == 1)
    {
        sonidoMascarilla.play();
        return;
    }
    enemigo.life-=1;
    if(enemigo.life<=0){
        sonidoCuración.play();
        killsPlayer++;
        muereEnemyNace(enemigo.body.x, enemigo.body.y, enemigo.mascarilla);
        resetMember(enemigo);
        if(parte!="C" && killsPlayer>=ENEMIGO_GROUP_SIZE_A[nivel]) nuevoNivel();
        else if(parte=="C" && killsPlayer>=ENEMIGO_GROUP_SIZE_C[nivel]) nuevoNivel();

        else if(parte=="C" && nivel>=1 && Math.random() <= POWERUP_PORCENTAJE) nacePowerUP();
        else if(Math.random() <= KIT_VIDA_PORCENTAJE_A-nivel/15) vidaNace();
        score = score + 1;
        actualizarScoreBoard();
    }
}

function colisionJeringaVida(jeringa, kVida) {
    resetMember(jeringa);
    resetMember(kVida);
}

function colisionVidaJugador(player, kVida) {
    vida+=3;
    sonidoBotiquin.play();
    if(vida > VIDA_MAXIMA) vida = VIDA_MAXIMA;
    resetMember(kVida);
    actualizarVida();
}

function cuidaoEnemigos(enemigo)
{
    if(enemigo.body.x < vNodos[0]){
        resetMember(enemigo);
        vida-=enemigo.life;
        score-= enemigo.life;
        actualizarScoreBoard();
        if(vida <= 0)
        {
            parteAcabada();
        }
        else sonidoDamage.play();
        actualizarVida();
        if(nivel==2 & parte!="C" & killsPlayer>=ENEMIGO_GROUP_SIZE_A[nivel]) nuevoNivel();
        else if(nivel==2 & parte=="C" && killsPlayer>=ENEMIGO_GROUP_SIZE_C[nivel]) nuevoNivel();
    }
}

function cuidaoVidas(kVida)
{
    if(kVida.body.x < vNodos[0] - KIT_VIDA_POQUITO_MAS ){
        resetMember(kVida);
    }
}

function actualizarTiempo()
{
    tiempo++;
    timerC.text = tiempo;
}

function actualizarScoreBoard()
{
    if (score < 0) score = 0;
    scoreBoard.text= 'Score: '+ score;
}
function actualizarVida()
{
    if (vidaTween)
        vidaTween.stop();
    vidaTween = game.add.tween(healthBar.scale).to({ x: vida / VIDA_MAXIMA}, 300);
    vidaTween.start();
}
