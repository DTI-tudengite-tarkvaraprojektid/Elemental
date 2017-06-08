function Player(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
	this.facing = 'idle';
	this.jumpTimer = 0;
	this.jumpButton;
	this.inventory = [];
	
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
		this.cursors = this.game.input.keyboard.createCursorKeys()
		this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function(){

        this.game.physics.arcade.collide(this.sprite, this.level.wall);
		this.sprite.body.velocity.x = 0;
		
		if (this.cursors.left.isDown)
    {
        this.sprite.body.velocity.x = -150;

        if (this.facing != 'left')
        {
			//animatsioon siia
            this.facing = 'left';
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.velocity.x = 150;
		
        if (this.facing != 'right')
        {
			//animatsioon siia
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle')
        {
            
            if (this.facing == 'left')
            {
                //player.frame = 0;
            }
            else
            {
                //player.frame = 5;
            }

            facing = 'idle';
        }
    }
    
    if (this.jumpButton.isDown && this.sprite.body.onFloor() && this.game.time.now > this.jumpTimer)
    {
        this.sprite.body.velocity.y = -250;
        this.jumpTimer = this.game.time.now + 750;
    }



    }
    //all other functionalities here
};



