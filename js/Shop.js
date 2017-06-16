function Shop(game, level){
	this.game = game;
	this.level = level;
	this.shopElements = this.game.add.group();
	this.create();
}

Shop.prototype = {
	
	create: function(){
		this.shopElements.group.create();
	
}