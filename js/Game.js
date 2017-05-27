var Elemental = Elemental || {};

//title screen
Elemental.Game = function(){this.level = null};

Elemental.Game.prototype = {

    create: function () {
        this.level = new Level(this.game);
        this.level.create();
    },

    update: function(){
        this.level.update();
    },

    render: function () {
        this.game.debug.body(this.level.player.sprite);
        this.level.wall.debug = true;
    }

};
