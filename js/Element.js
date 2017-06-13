function Element(x, y, name, game, level){

    this.x = x;
    this.y = y;
    this.category = name;
    this.game = game;
    this.level = level;
    this.create();
	this.elementname = "";


}

Element.prototype = {

    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, this.category);
        if(this.category === 'actions'){
            this.actions();
        } else if(this.category === 'art'){
            this.art();
        } else if(this.category === 'avatar'){
            this.avatar();
        } else if(this.category === 'balance'){
            this.balance();
        } else if(this.category === 'challenge'){
            this.feedback();
        } else if(this.category === 'levels'){
            this.levels();
        } else if(this.category === 'luck'){
            this.luck();
        } else if(this.category === 'progress'){
            this.progress();
        } else if(this.category === 'scoreboard'){
            this.scoreboard();
        }
    },

    //krister
    actions: function(){
	var this.luckyNumber= Math.floor(Math.random(1,2));
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
			this.elementname = "move";
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
		this.elementname = "jump";
		} 
	} else {
		if(!this.level.player.chestOpen) {
			this.level.player.chestOpen = true;
		} else {
			this.level.player.chestOpen = false;
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