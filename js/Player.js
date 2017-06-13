function Player(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
	this.jumpTimer = 0;
	this.walking = false;
	this.camera = null;
	this.jumpAbility = true;
	this.moveAbility = true;
	this.create();
	
}

Player.prototype = {
    //create sprite here
    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, 'peasant');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.gravity.y = 500;
        this.sprite.body.setSize(18, 58, 18, 5);
        this.camera = this.game.camera.follow(this.sprite);
        this.sprite.animations.add('player_walk', [1, 2, 3, 4]);
        this.sprite.animations.add('idle', [0]);
        this.sprite.scale.setTo(3, 3);
        this.sprite.anchor.setTo(0.5, 0.5);
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.elements = [];
        this.inventory = this.game.add.group();
    },

    update: function(){

        this.game.physics.arcade.collide(this.sprite, this.level.wall);
		this.game.physics.arcade.overlap(this.sprite, this.level.chests, this.interact, null, this);
		this.sprite.body.velocity.x = 0;
		this.movement();

	},

    movement: function(){

    this.walking = false;
	if (this.moveAbility) {
        if (this.cursors.left.isDown) {
            this.sprite.animations.play('player_walk', 5, true);
            this.sprite.body.velocity.x = -300;
            if (this.sprite.scale.x > 0) {
                this.sprite.scale.x *= -1;
            }
            this.walking = true;
        }
        else if (this.cursors.right.isDown) {
            this.sprite.animations.play('player_walk', 5, true);
            this.sprite.body.velocity.x = 300;
            if (this.sprite.scale.x < 0) {
                this.sprite.scale.x *= -1;
            }
            this.walking = true;
        }

    }
    if(!this.walking){
		this.sprite.animations.play('idle');
	}
	//this.sprite.animations.play('idle');
	if (this.jumpButton.isDown && this.sprite.body.onFloor() && this.jumpAbility) {
		this.sprite.body.velocity.y = -500;

		if(!this.moveAbility){
            if (this.cursors.left.isDown) {
                this.sprite.body.velocity.x = -200;
                if (this.sprite.scale.x > 0) {
                    this.sprite.scale.x *= -1;
                }
            }
            else if (this.cursors.right.isDown) {
                this.sprite.body.velocity.x = 200;
                if (this.sprite.scale.x < 0) {
                    this.sprite.scale.x *= -1;
                }

            }
		}
	}


	},
	
	interact: function(player, chest){
		if (this.game.input.keyboard.createCursorKeys().up.isDown && !chest.isEmpty){
			chest.opened = true;
		}
	}

    //all other functionalities here

    };





