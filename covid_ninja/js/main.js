let game;


let wfConfig = {
    active: function () {
        startGame();
    },

    google: {
        families: ['Caveat Brush']
    }
};

WebFont.load(wfConfig);

function startGame() {
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'platformGameStage');
    // Welcome Screen
    game.state.add('menu', initialState);
    // Config Screen
    game.state.add('settings', settingState);
    // Play Screen
    game.state.add('partA', AState);
    // Play Screen
    game.state.add('partB', BState);
    // Play Screen
    game.state.add('partC', CState);

    game.state.add('end', endState);

    game.state.add('inter1', interState);



    game.state.start('menu');
}