var Elemental = Elemental || {};

Elemental.Menu = function(){
	this.button = null;
	this.button2 = null;
}

Elemental.Menu.prototype = {
	
	create: function(){
		this.game.stage.backgroundColor = "#000000";
		this.logo = this.game.add.sprite(SCREEN_WIDTH*0.37, SCREEN_HEIGHT*0.2, 'logo');
		this.logo.scale.set(5,5);
        this.button = this.game.add.button(SCREEN_WIDTH*0.42, SCREEN_HEIGHT*0.4, 'buttons', this.startGame, this, 0, 1, 1);
        this.button.scale.set(3, 3);
        this.button2 = this.game.add.button(SCREEN_WIDTH*0.44, SCREEN_HEIGHT*0.5, 'buttons2', this.credits, this, 0, 1, 1);
		this.button2.scale.set(3, 3);
		COUNTDOWN = 60;
    },

    startGame: function(){
        this.game.state.start("Game");
    },

    credits: function(){
        this.game.state.start("Credits");
    }
};