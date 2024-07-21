const ALCANTARILLA_CICLO_TEMPORAL = 4*Phaser.Timer.SECOND;
const POWER_GROUP_SIZE = 2;
const TAPARDESTAPAR = 3;
let vAlcantar = [];
let vTimersAlcant = [];
let groupJeringasPower;
let groupObjetosPower;
let powerHUD;
let shootPowerPartC;

let loopTiempoTapar;
let tiempoTiempoTapar = 0;
let tapadoODestapado = false;
let CState = {
    preload: loadCAssets,
    create: createC,
    update: updateC,
};

function loadCAssets()
{
    genState.preloadGen();
    game.load.image('humoAlcantar', 'assets/imgs/playerSeparado4.png');
    game.load.image('powerHUD', 'assets/imgs/powerUp.png');
    game.load.image('jeringaPower', 'assets/imgs/jeringuillaPowerUP.png');
}

function createC()
{
    parte = 'C';
    vAlcantar = [];
    vTimersAlcant = [];
    genState.createGen();

    powerHUD=game.add.sprite(242, 12, 'powerHUD');
    powerHUD.visible=false;

    groupObjetosPower = game.add.group();
    groupObjetosPower.createMultiple(POWER_GROUP_SIZE, 'powerHUD');
    groupObjetosPower.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    groupObjetosPower.setAll('checkWorldBounds', true);
    groupObjetosPower.forEach(parametrosJeringas, this);

    groupJeringasPower = game.add.group();
    groupJeringasPower.createMultiple(POWER_GROUP_SIZE, 'jeringaPower');
    groupJeringasPower.callAll('events.onOutOfBounds.add','events.onOutOfBounds', resetMember);
    groupJeringasPower.setAll('checkWorldBounds', true);
    groupJeringasPower.forEach(parametrosJeringas, this);

    shootPowerPartC=0;

    sacarNodoAlcantarilla();
    sacarNodoAlcantarilla();

    loopTiempoTapar = game.time.events.loop(Phaser.Timer.SECOND, actualizarTiempoTapar, this);
}

function sacarNodoAlcantarilla()
{
    let posNodo, posHilo, imgAlcantar;

    let variableConfusa = true;
    let intentos=0;
    while(variableConfusa)
    {
        let porcentajePosX = Math.random();

        if (porcentajePosX < 0.5) posNodo = vNodos.length-1;
        else if (porcentajePosX < 0.8) posNodo = vNodos.length-2;
        else posNodo = vNodos.length-3;
        posHilo = Math.round(Math.random()*(vHilos.length-1));


        for( k = 0; k < vAlcantar.length; k++)
        {
            if(vAlcantar[k] != null & vAlcantar[k].hilo == posHilo & vAlcantar[k].nodo == posNodo)
            {
                variableConfusa = false;
                break;
            }
        }

        if(!variableConfusa) variableConfusa = true;
        else variableConfusa = false;
        intentos++;
        if(intentos>18)return;
    }

    imgAlcantar = groupAlcantar.getFirstExists(false);
    if (imgAlcantar) {
        let miPos=vAlcantar.length;
        vAlcantar.push(game.add.sprite(vNodos[posNodo], vHilos[posHilo], 'humo'));
        vAlcantar[miPos].alpha*=0;
        vAlcantar[miPos].hilo = posHilo;
        vAlcantar[miPos].nodo = posNodo;
        imgAlcantar.vector=miPos;
        imgAlcantar.reset(vNodos[posNodo], vHilos[posHilo]);
        vTimersAlcant[miPos] = game.time.events.loop(ALCANTARILLA_CICLO_TEMPORAL, enemigoNaceAlcant, this, miPos);
    }
}

function updateC()
{
    groupEnemigos.forEachExists(enemigoSuelta, this);
    game.physics.arcade.overlap(player,groupObjetosPower,colisionPOWERJugador,null,this);
    groupObjetosPower.forEachExists(cuidaoPOWER, this);
    game.physics.arcade.overlap(groupJeringasPower,groupEnemigos,colisionPOWEREnemigo,null,this);
    game.physics.arcade.overlap(groupJeringasPower,groupAlcantar,colisionPOWERAlcantar,null,this);

    genState.updateGen();

    actualizarTapar();
}

function enemigoNaceAlcant(posV)
{
    let humoAlSalir=game.add.sprite(vNodos[vAlcantar[posV].nodo], vHilos[vAlcantar[posV].hilo], 'humoAlcantar');
    humoAlSalir.anchor.setTo(0.5, 0.5);
    humoAlSalir.alpha*=0.9;
    if(threats>=8){
        humoAlSalir.height*=0.9-(threats-5)/10;
        humoAlSalir.width*=0.9-(threats-5)/10;
    }
    else if(threats>=5){
        humoAlSalir.height*=0.9-(threats-5)/20;
        humoAlSalir.width*=0.9-(threats-5)/20;
    }

    game.add.tween(humoAlSalir).to({alpha: 0}, 400, Phaser.Easing.Circular.In, true);

    let temp = groupEnemigos.getFirstExists(false);
        if (temp) {
            temp.reset(vNodos[vAlcantar[posV].nodo], vHilos[vAlcantar[posV].hilo]);

            temp.suelta=0;
            temp.mascarilla=0;
            temp.inmune = 0;

            temp.body.velocity.x = -ENEMIGO_VELOCITY_A[nivel];

            temp.life=1;
            temp.animations.play('andarRapido');

            let randomMasc = Math.random();
            if (randomMasc > 0.5)
            {
                if(tapadoODestapado)
                {
                    temp.inmune = 1;
                    temp.animations.play('mascarillaInmune');
                }
                else temp.animations.play('mascarilla');
                temp.mascarilla=1;
                temp.body.velocity.x = -(ENEMIGO_VELOCITY_A[nivel] / 5);
            }
        }
}

function frenarAlcantarillas(){
    for(let i=0; i<vTimersAlcant.length; i++){
        game.time.events.remove(vTimersAlcant[i]);
    }
    vTimersAlcant=[];
}

function enemigoSuelta(enemigo){
    for( n = CANTIDAD_NODOS/2; n < CANTIDAD_NODOS; n++)
    {
        if(enemigo.suelta==1
        & enemigo.body.x < vNodos[n] + 3
        & enemigo.body.x > (vNodos[n] - 3 )
        & Math.random()< 1.1-n/CANTIDAD_NODOS){
            let a = sacarAlcantarillaEnemigo(n, enemigo.hilo);
            if(a>0){
                enemigo.suelta=0;
                enemigo.animations.play('andarRapido');
            }
        }
    }
}

function enemigoDestapa(enemigo)
{
    if(enemigo.mascarilla==1)
    {

        if(tapadoODestapado)
        {
            enemigo.inmune = 1;
            enemigo.animations.play('mascarillaInmune');
        }
        else
        {
            enemigo.inmune = 0;
            enemigo.animations.play('mascarilla');
        }
    }
}

function actualizarTiempoTapar()
{
    tiempoTiempoTapar++;
}
function actualizarTapar()
{
    if(tiempoTiempoTapar >= TAPARDESTAPAR)
    {
        tiempoTiempoTapar = 0;
        if (tapadoODestapado) tapadoODestapado = false;
        else tapadoODestapado = true;
        groupEnemigos.forEachExists(enemigoDestapa, this);
    }
}

function sacarAlcantarillaEnemigo(nodo, hilo)
{
    let imgAlcantar;

    for( k = 0; k < vAlcantar.length; k++)
    {
        if(vAlcantar[k] != null & vAlcantar[k].hilo == hilo & vAlcantar[k].nodo == nodo)
        {
            return 0;
        }
    }

    imgAlcantar = groupAlcantar.getFirstExists(false);
    if (imgAlcantar) {
        let miPos=vAlcantar.length;
        vAlcantar.push(game.add.sprite(vNodos[nodo], vHilos[hilo], 'humo'));
        vAlcantar[miPos].alpha*=0;
        vAlcantar[miPos].hilo = hilo;
        vAlcantar[miPos].nodo = nodo;
        imgAlcantar.vector=miPos;
        imgAlcantar.reset(vNodos[nodo], vHilos[hilo]);
        vTimersAlcant[miPos] = game.time.events.loop(ALCANTARILLA_CICLO_TEMPORAL, enemigoNaceAlcant, this, miPos);
        return 1;
    }
    return -1;
}

function colisionPOWERJugador(player, power) {
    sonidoBotiquin.play();
    resetMember(power);
    powerHUD.visible=true;
    shootPowerPartC++;
}

function colisionPOWEREnemigo(jeringa, enemigo) {
    enemigo.life=0;
    killsPlayer++;
    muereEnemyNace(enemigo.body.x, enemigo.body.y, enemigo.mascarilla);
    resetMember(enemigo);
    if(killsPlayer>=ENEMIGO_GROUP_SIZE_C[nivel]) nuevoNivel();
    score = score + 1;
    actualizarScoreBoard();
}

function colisionPOWERAlcantar(jeringa, alcantar) {
    game.time.events.remove(vTimersAlcant[alcantar.vector]);
    vAlcantar[alcantar.vector].hilo=50;
    vAlcantar[alcantar.vector].nodo=50;
    alcantar.visible=false;
    alcantar.body.enable=false;
}

function nacePowerUP(){
    let temp = groupObjetosPower.getFirstExists(false);
        if (temp) {
            let aleatorio=Math.round(Math.random()*(vHilos.length-1));
            temp.reset(WORLD_WIDTH, vHilos[aleatorio]);
            temp.body.velocity.x = -ENEMIGO_VELOCITY_A[2] * (4/3);
        }
}

function cuidaoPOWER(power)
{
    if(power.body.x < vNodos[0] - KIT_VIDA_POQUITO_MAS ){
        resetMember(power);
    }
}