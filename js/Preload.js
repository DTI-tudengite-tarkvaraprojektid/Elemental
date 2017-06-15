var Elemental = Elemental || {};

Elemental.Preload = function(){};

Elemental.Preload.prototype = {
    preload: function() {

        //load game assets
        this.load.tilemap('level', 'Assets/maps/level_11.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level2', 'Assets/maps/level_2.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'Assets/maps/tiles.png');
        this.load.image('tileset1', 'Assets/maps/tileset1.png');
        this.load.spritesheet('chests', 'Assets/chests.png', 84, 64);

        this.load.spritesheet('player', 'Assets/playersprites.png', 92, 64);
        this.load.spritesheet('enemy', 'Assets/enemy.png', 68, 64);

        this.load.spritesheet('actions', 'Assets/actions.png', 64, 64);
        this.load.spritesheet('balance', 'Assets/balance.png', 64, 64);
        this.load.spritesheet('feedback', 'Assets/feedback.png', 64, 64);
        this.load.spritesheet('progress', 'Assets/progress.png', 64, 64);
        this.load.spritesheet('avatar', 'Assets/avatar.png', 64, 64);
        this.load.spritesheet('challenges', 'Assets/challenges.png', 64, 64);
        this.load.spritesheet('art', 'Assets/art.png', 64, 64);
		this.load.spritesheet('buttons', 'Assets/buttons.png', 76, 19);

        this.load.image('heart', 'Assets/heart.png');
        this.load.image('stats', 'Assets/stats.png');
        /*
        this.load.spritesheet('levels', 'Assets/levels.png');
        this.load.spritesheet('luck', 'Assets/luck.png');

        this.load.spritesheet('scoreboard', 'Assets/scoreboard.png');
        */

    },
    create: function() {
        this.state.start('Menu');
    }
};