function Enemy(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
    this.create();
}

//create sprite here
Enemy.prototype = {

    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, 'enemy');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.gravity.y = 500;
        this.sprite.scale.setTo(2, 2);
        this.sprite.body.velocity.x = 300;

    },
//collision here
    update: function(player){
        this.game.physics.arcade.collide(this.sprite, this.level.wall);
        this.game.physics.arcade.collide(this.sprite, player.sprite);
        this.level.tilemap.objects['spawners'].forEach(function(element) {
            if(element.name === "reverse"){
                if(this.sprite.body.x > element.x || this.sprite.body.x + this.sprite.body.width === element.x){
                    this.reverse();
                    console.log(this.sprite.x, element.x);

                }
            }
        }, this);
    },

    reverse: function(){
        console.log("reverse");
        this.sprite.body.velocity.x *= -1;

    },

    attack: function(){

    },

    spawn: function(){

    }


//all other functionalities here
};