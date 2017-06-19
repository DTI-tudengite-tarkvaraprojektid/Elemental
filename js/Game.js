var Elemental = Elemental || {};

//title screen
Elemental.Game = function(){
    this.level = null;
    this.index = 0;
    this.levels = ['level', 'level2', 'level3'];
};

Elemental.Game.prototype = {

    create: function () {

        if(this.level === null){
            this.level = new Level(this.game, 'level', 'tileset1', this, 150);
        } if(SCORE >= 150){
            this.level = new Level(this.game, 'level2', 'tileset2', this, 600);
        } if(SCORE >= 600){
            this.level = new Level(this.game, 'level3', 'tileset3', this, 1000);
        } if(SCORE >= 1000){
            this.level = new Level(this.game, 'level4', 'tileset4', this, 2000);
        }
        this.level.create();
    },

    update: function(){
        this.level.update();


    }/*,

	
    render: function (){
        this.game.debug.body(this.level.player.attackbox);
        //this.level.wall.debug = true;
        this.renderGroup(this.level.enemy_objs);
    },

    renderGroup: function(group){
        group.forEach(function (member){
            this.game.debug.body(member.sprite);
            this.game.debug.body(member.attackbox);
        }, this);
    }
    */
};
