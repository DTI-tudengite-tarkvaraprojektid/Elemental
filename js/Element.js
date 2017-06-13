function Element(x, y, name, game, level){

    this.x = x;
    this.y = y;
    this.name = name;
    this.game = game;
    this.level = level;
    this.create();
	this.elementname = "";


}

Element.prototype = {

    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, this.name);
        this.sprite.fixedToCamera = true;
        this.sprite.scale.setTo(0.5, 0.5);
        if(this.name === 'actions'){
            this.actions();
        } else if(this.name === 'art'){
            this.art();
        } else if(this.name === 'avatar'){
            this.avatar();
        } else if(this.name === 'balance'){
            this.sprite.animations.add('armor', [0]);
            this.sprite.animations.add('nosword', [1]);
            this.balance();
        } else if(this.name === 'feedback'){
            this.sprite.animations.add('timer', [0]);
            this.sprite.animations.add('points', [1]);
            this.sprite.animations.add('health', [2]);
            this.feedback();
        } else if(this.name === 'challenge'){
            this.challenge();
        } else if(this.name === 'levels'){
            this.levels();
        } else if(this.name === 'luck'){
            this.luck();
        } else if(this.name === 'progress'){
            this.progress();
        } else if(this.name === 'scoreboard'){
            this.scoreboard();
        }
    },

    //krister
    actions: function(){
	this.luckyNumber = Math.floor((Math.random() * 2) + 1);
	if (this.luckyNumber == 1){
		
		if (!this.level.player.moveAbility) {
			this.level.player.moveAbility = true;
			this.level.player.inventory.forEach(function(element){
				if(element.elementname === "move"){
				element.kill();
				}
			}, this);
		} else {
			this.level.player.moveAbility = false;
			this.elementname = "jump"
		}
	} else if (this.luckyNumber == 2) {

				if (!this.level.player.jumpAbility) {
			this.level.player.jumpAbility = true;
			this.level.player.inventory.forEach(function(element){
				if(element.elementname === "jump"){
				element.kill();
				}
			}, this);
		} else {
			this.level.player.jumpAbility = false;
		this.elementname = "jump"
		}
	}
        //can't collect items
    },

    //richard
    art: function(){
        //level is low quality
    },
    //krister
    avatar: function(){
        //player avatar is low quality
    },

    balance: function(){
        this.sprite.animations.play('armor');
        this.sprite.animations.play('nosword');
    //krister
        //NPCs are weakened(player gains weapon/armor)
        //NPCs are strengthened(player loses all armor/weapon)
    //richard
        //More NPCs spawned
        //Take back as many elements you want for free
    },

    //richard
    challenge: function(){
        //timer is stopped
        //All NPCs removed
    },

    feedback: function(){
        var rand = Math.floor((Math.random() * 3) + 1);
        if(rand === 1){
            this.sprite.animations.play('timer');
        } else if(rand === 2){
            this.sprite.animations.play('points');
        } else if(rand === 3){
            this.sprite.animations.play('health');
        }

        // health bar removed
        // timer removed(still ticking)
        // points removed
    },

    //richard
    levels: function(){
        // all levels are same
    },

    luck: function(){
        //chests with points and elements differentiated

    },

    //richard
    progress: function(){
        //all chests become empty
        //no more points awarded
    },

    scoreboard: function(){
        //scoreboard removed
    }
};