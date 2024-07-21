let vNodos_inicio = [];
let vNodos_final = [];

let BState = {
    preload: loadBAssets,
    create: createB,
    update: updateB,
};

function loadBAssets()
{
    genState.preloadGen();
}

function createB()
{
    parte = 'B';
    genState.createGen();

    recursivaNodos(nivel);
}

function recursivaNodos(n)
{
    let nodo_x_primero, nodo_y_primero;
    let posNodo, posHilo;
    let imgDiagonal;
    // crear nodo inicio diagonal

    let variableConfusa = true;
    while(variableConfusa)
    {
        let porcentajePosX = Math.random();

        if (porcentajePosX < 0.4) posNodo = vNodos.length-1;
        else if (porcentajePosX < 0.6) posNodo = vNodos.length-2;
        else if (porcentajePosX < 0.8) posNodo = vNodos.length-3;
        else posNodo = vNodos.length-4;
        posHilo = Math.round(Math.random()*(vHilos.length-1));


        for( k = 0; k < vNodos_inicio.length; k++)
        {
            if(vNodos_inicio[k] != null & vNodos_inicio[k].hilo == posHilo & vNodos_inicio[k].nodo == posNodo)
            {
                variableConfusa = false;
                break;
            }
        }

        if(!variableConfusa) variableConfusa = true;
        else variableConfusa = false;
    }
    vNodos_inicio[n] = game.add.sprite(vNodos[posNodo], vHilos[posHilo], 'humo');
    vNodos_inicio[n].alpha*=0;
    vNodos_inicio[n].hilo = posHilo;
    vNodos_inicio[n].nodo = posNodo;
    nodo_x_primero = posNodo;
    nodo_y_primero = posHilo;

    // crear nodo final diagonal
    variableConfusa = true;

    while(variableConfusa)
    {

        posNodo = Math.round(Math.random()*(nodo_x_primero-1));
        do {posHilo = Math.round(Math.random()*(vHilos.length-1));}
        while (posHilo == nodo_y_primero);

        for( k = 0; k < vNodos_final.length; k++)
        {
            if(vNodos_final[k] != null & vNodos_final[k].hilo == posHilo & vNodos_final[k].nodo == posNodo)
            {
                variableConfusa = false;
                break;
            }
        }

        if(!variableConfusa) variableConfusa = true;
        else variableConfusa = false;
    }
    vNodos_final[n] = game.add.sprite(vNodos[posNodo], vHilos[posHilo], 'humo');
    vNodos_final[n].alpha*=0;
    vNodos_final[n].hilo = posHilo;
    vNodos_final[n].nodo = posNodo;

    let dX = vNodos_inicio[n].x - vNodos_final[n].x;
    let dY = vNodos_final[n].y - vNodos_inicio[n].y;
    if (dY < 0) dY = -dY;
    let dist = Math.sqrt(dX * dX + dY * dY);
    imgDiagonal = groupDiagonales.getFirstExists(false);
    if (imgDiagonal) {
        imgDiagonal.reset(vNodos_inicio[n].x, vNodos_inicio[n].y);
        imgDiagonal.width=dist;

        if(vNodos_final[n].y >= vNodos_inicio[n].y){
            let angulo=Math.asin(dX/dist);
            angulo*=180/Math.PI;
            angulo+=90;
            imgDiagonal.angle=angulo;
        }
        else{
            let angulo=Math.asin(dY/dist);
            angulo*=180/Math.PI;
            angulo+=180;
            imgDiagonal.angle=angulo;
        }
    }
}

function updateB()
{
    groupEnemigos.forEachExists(nodoEnemigos, this);

    genState.updateGen();
}

function nodoEnemigos(enemigo)
{
    for( n = 0; n < vNodos_inicio.length; n++)

    {

    if(enemigo.diagonal == -1
       & enemigo.hilo == vNodos_inicio[n].hilo
       & enemigo.body.x < vNodos_inicio[n].x + 3 & enemigo.body.x > ( vNodos_inicio[n].x - 3 )
       & Math.random()< 0.6)
    {
        let dX = vNodos_inicio[n].x - vNodos_final[n].x;
        let dY = vNodos_final[n].y - vNodos_inicio[n].y;
        if (dY < 0) dY = -dY;
        let dist = Math.sqrt(dX * dX + dY * dY);
        let velTotal = enemigo.body.velocity.x;
        enemigo.body.velocity.x = velTotal * (dX/dist);
        enemigo.body.velocity.y = velTotal * (dY/dist);
        if (vNodos_final[n].y > vNodos_inicio[n].y) enemigo.body.velocity.y = -enemigo.body.velocity.y;
        enemigo.diagonal = n;
        enemigo.velTotal = velTotal;
        return;

    }
    if(enemigo.diagonal == n
       & enemigo.body.x <= vNodos_final[n].x)
    {
        enemigo.body.velocity.x = enemigo.velTotal;
        enemigo.body.velocity.y = 0;
        enemigo.diagonal = -1;
        enemigo.hilo = vNodos_final[n].hilo;
        enemigo.y = vHilos[enemigo.hilo];
        return;
    }

    }
}

function destroyNodos() {
    for(i = 0; i < vNodos_inicio.length; i++)
        {
            vNodos_inicio[i].destroy();
            vNodos_final[i].destroy();
        }
        vNodos_inicio = [];
        vNodos_final = [];
}