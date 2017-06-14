function Player(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
	this.jumpTimer = 0;
	this.walking = false;
	this.jumping = false;
	this.attacking = false;
	this.camera = null;
	this.jumpAbility = true;
	this.moveAbility = true;
	this.chestOpen = true;
	this.attack_cd = 0;
	this.create();
	
	
}

Player.prototype = {
    //create sprite here
    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, 'player');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.gravity.y = 500;
        this.sprite.body.setSize(18, 64, 38, 0);
        this.camera = this.game.camera.follow(this.sprite);
        this.sprite.animations.add('player_walk', [22, 23, 24, 25]);
		this.sprite.animations.add('player_jump', [21]);
        this.sprite.animations.add('idle', [20]);
		this.sprite.animations.add('unarmored_attack', [16,17,18,19]);
        this.sprite.scale.setTo(3, 3);
        this.sprite.anchor.setTo(0.5, 0.5);
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.attackButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.openChests = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
		this.elements = [];
        this.inventory = this.game.add.group();
    },

    update: function(){

        this.game.physics.arcade.collide(this.sprite, this.level.wall);
		this.game.physics.arcade.overlap(this.sprite, this.level.chests, this.interact, null, this);
		this.sprite.body.velocity.x = 0;
		this.movement();
		if (this.attackButton.isDown && !this.walking){
			this.attack();
			}
		
	},

    movement: function(){

    this.walking = false;
	if (this.moveAbility) {
        if (this.cursors.left.isDown) {
            this.sprite.animations.play('player_walk', 5, true);
            this.sprite.body.velocity.x = -250;
            if (this.sprite.scale.x > 0) {
                this.sprite.scale.x *= -1;
            }
            this.walking = true;
        }
        else if (this.cursors.right.isDown) {
            this.sprite.animations.play('player_walk', 5, true);
            this.sprite.body.velocity.x = 250;
            if (this.sprite.scale.x < 0) {
                this.sprite.scale.x *= -1;
            }
            this.walking = true;
        }

    }
    if(!this.walking && !this.jumping && !this.attacking){
		this.sprite.animations.play('idle');
	}
	if(this.jumping){
		this.sprite.animations.play('player_jump', 1, true);
	}
	if(!this.sprite.body.onFloor() && !this.sprite.body.blocked.up){
		this.jumping = true;
	} else {
		this.jumping = false;
	}
	//this.sprite.animations.play('idle');
	if (this.cursors.up.isDown && this.sprite.body.onFloor() && this.jumpAbility) {
		this.sprite.body.velocity.y = -500;
	}
	if (!this.sprite.body.onFloor() && this.cursors.right.isDown && !this.moveAbility){
		this.sprite.body.velocity.x = 250;
	}
	
	if (!this.sprite.body.onFloor() && this.cursors.left.isDown && !this.moveAbility){
		this.sprite.body.velocity.x = -250;
	}

	},
	
	interact: function(player, chest){
		if (this.openChests.isDown && !chest.isEmpty && this.chestOpen){
			chest.opened = true;
		}
	},
	
	attack: function (enemy){
		if(this.game.time.now - this.attack_cd >= 450 && !this.jumping){
            this.attack_cd = this.game.time.now;
			this.attacking = true;
			this.sprite.animations.play('unarmored_attack', 10, false);
			console.log("pikachu uses quick attack");
        }
		this.sprite.animations.currentAnim.onComplete.add(function () {
			this.attacking = false;
		}, this);
	}
    //all other functionalities here

    };





