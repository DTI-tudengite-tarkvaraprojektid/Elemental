function Player(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
}

Player.prototype = {
    //create sprite here
    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, 'player');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.gravity.y = 150;
        this.sprite.body.setSize(64, 230, 40, 20);
        this.game.camera.follow(this.sprite);

    },

    update: function(){

        this.game.physics.arcade.collide(this.sprite, this.level.wall);


    }
    //all other functionalities here
};



