function Element(game, level, name){

    this.name = name;
    this.game = game;
    this.level = level;

}

Element.prototype = {

    create: function(){

        this.sprite = this.game.add.sprite(1200, 20, this.name);
        if(this.name === 'actions'){
            this.actions();
        } else if(this.name === 'art'){
            this.art();
        } else if(this.name === 'avatar'){
            this.avatar();
        } else if(this.name === 'balance'){
            this.balance();
        } else if(this.name === 'challenge'){
            this.feedback();
        } else if(this.name === 'levels'){
            this.levels();
        } else if(this.name === 'luck'){
            this.luck();
        } else if(this.name === 'progress'){
            this.progress();
        } else if(this.name === 'scoreboard'){
            this.scoreboard();
        }
        this.moveToInventory();
    },

    actions: function(){
        //cannot move, jump, can't collect items
    },

    art: function(){
        //level is lo-res
    },

    avatar: function(){
        //player avatar is lo-res
    },

    balance: function(){
        //NPCs are weakened(player gains weapon/armor)
        //NPCs are strengthened(player loses all armor/weapon)
        //More NPCs spawned
        //NPCs disappear
    },

    challenge: function(){
        //timer is stopped
        //
    },

    feedback: function(){
        // health bar removed
        // timer removed(still ticking)
        // points removed
    },

    levels: function(){
        // all levels are same
    },

    luck: function(){


    },

    progress: function(){

    },

    scoreboard: function(){

    },

    moveToInventory: function(){
        this.level.player.inventory.add(this.sprite);
    }
};