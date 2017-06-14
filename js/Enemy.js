function Enemy(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
    this.reverse_cd = 0;
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
        this.sprite.body.setSize(18, 48, 24, 16);
        this.sprite.scale.setTo(3, 3);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.animations.add('walk', [0, 1, 2, 3]);
        this.sprite.animations.add('attack', [1, 2]);

        this.attackbox = this.game.add.sprite(this.sprite.body.x-this.sprite.body.x*0.2, this.sprite.body.y * 0.5, null);
        this.game.physics.arcade.enable(this.attackbox);
        this.sprite.body.immovable = true;
    },
//collision here
    update: function(player){
        this.sprite.body.velocity.x = 50 * this.sprite.scale.x;
        this.game.physics.arcade.collide(this.sprite, this.level.wall);
        this.game.physics.arcade.overlap(this.sprite, player.sprite);
        this.level.tilemap.objects['spawners'].forEach(function(element) {
            if(element.name === "reverse"){
                if(this.sprite.body.x < element.x + element.width && this.sprite.body.x > element.x ||
                    this.sprite.body.x + this.sprite.body.width > element.x &&
                    this.sprite.body.x + this.sprite.body.width < element.x + element.width){
                        if(this.game.time.now - this.reverse_cd >= 1000){
                            this.reverse_cd = this.game.time.now;
                            this.reverse();
                        }
                }
            }
        }, this);
        if(Math.abs(this.sprite.body.x - player.sprite.body.x) < 80){
            this.attack(player);
        } else {
            this.sprite.animations.play('walk', 5, true);
        }
    },

    reverse: function(){
        this.sprite.body.velocity.x *= -1;
        this.sprite.scale.x *= -1;


    },

    attack: function(player){
        this.sprite.animations.play('attack', 5, true);

        if(Math.abs(this.sprite.body.x - player.sprite.body.x) < 80 && this.sprite.animations.currentAnim.frame === 2){
            this.attackbox = this.game.add.sprite(this.sprite.body.x, this.sprite.body.y + this.sprite.body.height*0.5, null);
            this.game.physics.arcade.enable(this.attackbox);
            this.sprite.body.immovable = true;
        }
    }
};