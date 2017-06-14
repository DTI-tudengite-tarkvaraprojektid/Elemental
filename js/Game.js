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

    render: function (){
        this.game.debug.body(this.level.player.sprite);
        this.level.wall.debug = true;
        this.renderGroup(this.level.enemy_objs);
    },

    renderGroup: function(group){
        group.forEach(function (member){
            this.game.debug.body(member.sprite);
            this.game.debug.body(member.attackbox);
        }, this);
    }

};
