function Element(game, level, name){

    this.name = name;
    this.game = game;
    this.level = level;
    this.create();

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

    //krister
    actions: function(){
        //cannot move, jump, can't collect items
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
    },

    moveToInventory: function(){
        this.level.player.inventory.add(this.sprite);
    }
};