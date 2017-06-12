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
        this.sprite.body.immovable = true;
        this.sprite.body.setSize(18, 58, 18, 5);
        this.sprite.scale.setTo(3, 3);
        this.sprite.anchor.setTo(0.5, 0.5);
    },
//collision here
    update: function(player){
        this.sprite.body.velocity.x = 50 * this.sprite.scale.x;
        this.game.physics.arcade.collide(this.sprite, this.level.wall);
        this.game.physics.arcade.collide(this.sprite, player.sprite);
        this.level.tilemap.objects['spawners'].forEach(function(element) {
            if(element.name === "reverse"){
                if(this.sprite.body.x < element.x + element.width && this.sprite.body.x > element.x ||
                    this.sprite.body.x + this.sprite.body.width > element.x &&
                    this.sprite.body.x + this.sprite.body.width < element.x + element.width){
                    this.reverse();
                }
            }
        }, this);
        if(Math.abs(this.sprite.body.x - player.sprite.body.x) < 80){
            this.sprite.body.velocity.x = 0;
            this.attack(player);
        }
    },

    reverse: function(){
        this.sprite.body.velocity.x *= -1;
        this.sprite.scale.x *= -1;

    },

    attack: function(player){
        //this.sprite.animations.play('attack');
        //this.sprite.animations.currentAnim.frame;
        /*
        if(Math.abs(this.sprite.body.x - player.sprite.body.x) < 80 && this.sprite.animations.currentAnim.frame === 2){
            player.health = Number(player.health) - 1;
        } */
    }
};