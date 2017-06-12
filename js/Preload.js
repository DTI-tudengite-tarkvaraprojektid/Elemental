var Elemental = Elemental || {};

Elemental.Preload = function(){};

Elemental.Preload.prototype = {
    preload: function() {

        //load game assets
        this.load.tilemap('level', 'Assets/maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'Assets/maps/tiles.png');
        this.load.image('chest_opened', 'Assets/openchest.png');
        this.load.image('chest_closed', 'Assets/chest.png');
        this.load.image('enemy', 'Assets/enemyprop1.png');
        /*
        this.load.spritesheet('actions', 'Assets/actions.png');
        this.load.spritesheet('art', 'Assets/art.png');
        this.load.spritesheet('avatar', 'Assets/avatar.png');
        this.load.spritesheet('balance', 'Assets/balance.png');
        this.load.spritesheet('challenges', 'Assets/challenges.png');
        this.load.spritesheet('feedback', 'Assets/feedback.png');
        this.load.spritesheet('levels', 'Assets/levels.png');
        this.load.spritesheet('luck', 'Assets/luck.png');
        this.load.spritesheet('progress', 'Assets/progress.png');
        this.load.spritesheet('scoreboard', 'Assets/scoreboard.png');
        */
        this.load.spritesheet('peasant', 'Assets/sprites.png', 48, 64);

    },
    create: function() {
        this.state.start('Game');
    }
};