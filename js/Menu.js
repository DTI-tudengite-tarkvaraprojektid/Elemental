var Elemental = Elemental || {};

Elemental.Menu = function() {
    this.button = null;
    this.button2 = null;
};

Elemental.Menu.prototype = {
	
	create: function(){
		this.game.stage.backgroundColor = "#000000";
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.button = this.game.add.button(this.game.world.centerX - 95, 300, 'buttons', this.startGame, this, 3, 2, 2);
        this.button.smoothed = false;
        this.button.scale.set(3, 3);
        /*this.button2 = this.game.add.button(this.game.world.centerX - 95, 380, 'btn', this.scoreboard, this, 1, 0, 0);*/
    },

    startGame: function(){
        this.game.state.start("Game");
    }

    /*scoreboard: function(){
        this.game.state.start("Scoreboard");
    }*/
};