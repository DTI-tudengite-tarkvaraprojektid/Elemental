function Shop(game, level){
	this.game = game;
	this.level = level;
	this.shopgroup = this.game.add.group();
	this.shopgroup.fixedToCamera = true;
	this.shopElements = this.game.add.group();
	this.shopElements.fixedToCamera = true;
	this.create();
}

Shop.prototype = {
	
	create: function(){
        this.shop = this.shopgroup.create(SCREEN_WIDTH*0.1, SCREEN_HEIGHT*-0.1, 'shop');
		this.shop.scale.set(9, 6.5);
		this.exit = this.shopgroup.create(SCREEN_WIDTH*0.813, SCREEN_HEIGHT*0.02, 'exit');
        this.title = this.shopgroup.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.02, 'shoptitle');
		
		this.action = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.17, 'shopbtns');
        this.action.animations.add('action', [0]);
        this.action.animations.play('action');
        this.art = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.17, 'shopbtns');
        this.art.animations.add('art', [1]);
        this.art.animations.play('art');
        this.avatar = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.17, 'shopbtns');
        this.avatar.animations.add('avatar', [2]);
        this.avatar.animations.play('avatar');
        this.balance = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.4, 'shopbtns');
        this.balance.animations.add('balance', [3]);
        this.balance.animations.play('balance');
        this.challenges = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.4, 'shopbtns');
        this.challenges.animations.add('challenges', [4]);
        this.challenges.animations.play('challenges');
        this.feedback = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.4, 'shopbtns');
        this.feedback.animations.add('feedback', [5]);
        this.feedback.animations.play('feedback');
        this.levels = this.shopElements.create(SCREEN_WIDTH*0.25, SCREEN_HEIGHT*0.62, 'shopbtns');
        this.levels.animations.add('levels', [6]);
        this.levels.animations.play('levels');
        this.luck = this.shopElements.create(SCREEN_WIDTH*0.45, SCREEN_HEIGHT*0.62, 'shopbtns');
        this.luck.animations.add('luck', [7]);
        this.luck.animations.play('luck');
        this.progress = this.shopElements.create(SCREEN_WIDTH*0.65, SCREEN_HEIGHT*0.62, 'shopbtns');
        this.progress.animations.add('progress', [8]);
        this.progress.animations.play('progress');
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
	close: function() {
        this.shopgroup.destroy();
        this.shopElements.destroy();
    }
};