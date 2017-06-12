var Elemental = Elemental || {};

Elemental.Preload = function(){};

Elemental.Preload.prototype = {
    preload: function() {

        //load game assets
        this.load.tilemap('level', 'Assets/maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'Assets/maps/tiles.png');
        this.load.image('chest_opened', 'Assets/openchest.png');
        this.load.image('chest_closed', 'Assets/chest.png');
        this.load.image('enemy', 'Assets/enemyprop.png');
        this.load.spritesheet('peasant', 'Assets/spritesheet.png', 48, 64);

    },
    create: function() {
        this.state.start('Game');
    }
};