var Elemental = Elemental || {};

Elemental.Menu = function(){
	this.button = null;
	this.button2 = null;
}

Elemental.Menu.prototype = {
	
	create: function(){
		this.game.stage.backgroundColor = "#000000";
        this.button = this.game.add.button(SCREEN_WIDTH/2 - 95, 300, 'buttons', this.startGame, this, 3, 2, 2);
        this.button.smoothed = false;
		this.button.fixedToCamera = true;
        this.button.scale.set(3, 3);
		COUNTDOWN = 60;
        /*this.button2 = this.game.add.button(this.game.world.centerX - 95, 380, 'btn', this.scoreboard, this, 1, 0, 0);*/
    },

    startGame: function(){
        this.game.state.start("Game");
    }

    /*scoreboard: function(){
        this.game.state.start("Scoreboard");
    }*/
};