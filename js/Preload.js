var Elemental = Elemental || {};

Elemental.Preload = function(){};

Elemental.Preload.prototype = {
    preload: function() {

        //load game assets
        this.load.tilemap('level', 'Assets/maps/level.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'Assets/maps/tiles.png');
        this.load.image('player', 'Assets/peasant.png');
        this.load.image('chest_opened', 'Assets/chest.png');
        this.load.image('chest_closed', 'Assets/chest.png');

    },
    create: function() {
        this.state.start('Game');
    }
};