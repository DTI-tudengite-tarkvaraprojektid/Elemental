var Elemental = Elemental || {};

Elemental.Boot = function(){};

Elemental.Boot.prototype = {

    preload: function(){
        //load menu assets here
    },

    create: function(){
        //stretch screen
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }
};
