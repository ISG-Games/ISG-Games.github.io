let AState = {
    preload: loadAAssets,
    create: createA,
    update: updateA,
};

function loadAAssets()
{
    genState.preloadGen();
}
function createA()
{
    parte = 'A';
    genState.createGen();
}
function updateA()
{
    genState.updateGen();
}
