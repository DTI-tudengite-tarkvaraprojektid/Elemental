var Elemental = Elemental || {};

Elemental.Menu = function(){
	this.button = null;
	this.button2 = null;
}

Elemental.Menu.prototype = {
	
	create: function(){
		this.game.stage.backgroundColor = "#000000";
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.button = this.game.add.button(this.game.world.centerX - 95, 300, 'buttons', this.startGame, this, 0, 1, 1);
        this.button.scale.set(3, 3);
        this.button2 = this.game.add.button(this.game.world.centerX - 70, 380, 'buttons2', this.credits, this, 0, 1, 1);
		this.button2.scale.set(3, 3);
    },

    startGame: function(){
        this.game.state.start("Game");
    },

    credits: function(){
        this.game.state.start("Credits");
    }
};