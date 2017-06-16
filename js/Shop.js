function Shop(game, level){
	this.game = game;
	this.level = level;
	this.shop = this.game.add.group();
	this.shop.fixedToCamera = true;
	this.shopElements = this.game.add.group();
	this.shopElements.fixedToCamera = true;
	this.create();
}

Shop.prototype = {
	
	create: function(){
		var shop = this.shop.create(SCREEN_WIDTH*0.1, SCREEN_HEIGHT*-0.1, 'shop');
		shop.scale.set(9, 6.5);
		this.exit = this.shop.create(SCREEN_WIDTH*0.813, SCREEN_HEIGHT*0.02, 'exit');
		var title = this.shop.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.02, 'shoptitle');
		
		var action = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.17, 'shopbtns');
		action.animations.add('action', [0]);
		action.animations.play('action');
		var art = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.17, 'shopbtns');
		art.animations.add('art', [1]);
		art.animations.play('art');
		var avatar = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.17, 'shopbtns');
		avatar.animations.add('avatar', [2]);
		avatar.animations.play('avatar');
		var balance = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.4, 'shopbtns');
		balance.animations.add('balance', [3]);
		balance.animations.play('balance');
		var challenges = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.4, 'shopbtns');
		challenges.animations.add('challenges', [4]);
		challenges.animations.play('challenges');
		var feedback = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.4, 'shopbtns');
		feedback.animations.add('feedback', [5]);
		feedback.animations.play('feedback');
		var levels = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.62, 'shopbtns');
		levels.animations.add('levels', [6]);
		levels.animations.play('levels');
		var luck = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.62, 'shopbtns');
		luck.animations.add('luck', [7]);
		luck.animations.play('luck');
		var progress = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.62, 'shopbtns');
		progress.animations.add('progress', [8]);
		progress.animations.play('progress');
		console.log(this.exit.tint);
		this.exit.inputEnabled = true;
		this.exit.events.onInputDown.add(this.close, this);
		this.exit.events.onInputOver.add(this.over, this);
		this.exit.events.onInputOut.add(this.out, this);
	},
	over: function(){
		
		this.exit.tint = 0xffffff;
		console.log(this.exit.tint);
	},
	
	out: function(){
		this.exit.tint = 0xffffff;
		console.log(this.exit.tint);
	},
	close: function(){
		this.shopElements.forEachAlive(function(element){
			element.kill();
		});
		this.shop.forEachAlive(function(element){
			element.kill();
		});
	}
};