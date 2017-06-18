function Level(game, name, tileset, gamestate, score_needed){
    this.gamestate = gamestate;
    this.game = game;
    this.name = name;
    this.tileset = tileset;
    this.tilemap = null;
    this.player = null;
    this.enemies = null;
    this.chests = null;
    this.platforms = null;
    this.background = null;
    this.wall = null;
	this.shop = null;
    this.score = 0;
    this.countdown = 10;
    this.last_tick = 0;
    this.score_needed = score_needed;
}

Level.prototype = {

    //load tilemap here
    create: function(){

        this.tilemap = this.game.add.tilemap(this.name);

        //the first parameter is the tileset name as specified in Tiled,
        //the second is the key to the asset in game.js
        this.tilemap.addTilesetImage(this.tileset, this.tileset, 64, 64);

        //create layers
        this.background = this.tilemap.createLayer('background');
        this.wall = this.tilemap.createLayer('wall');
        //collision on walls
        this.tilemap.setCollisionBetween(1, 2000, true, this.wall);

        //resizes the game world to match the layer dimensions
        this.background.resizeWorld();

        this.chest_objs = [];
        this.enemy_objs = [];
        this.chests = this.game.add.group();
        this.enemies = this.game.add.group();
        this.players = this.game.add.group();
        this.hearts = this.game.add.group();
        //iterate over all objects in the 'spawner' layer, spawning player and enemies
        // at coordinates given by json
        this.tilemap.objects['spawners'].forEach(function(element){

            if(element.name === "player"){
                this.player = new Player(this.game, this, element.x, element.y);
                this.players.add(this.player.sprite);
            }
            else if(element.name === "enemy"){
                var enemy = new Enemy(this.game, this, element.x, element.y);
                this.enemy_objs.push(enemy);
                this.enemies.add(enemy.sprite);
            }
            else if(element.name === "chest"){
                var chest = new Chest(this.game, this, element.x, element.y);
                this.chest_objs.push(chest);
                this.chests.add(chest.sprite);
            }
        }, this);
        this.timeframe = this.game.add.sprite(SCREEN_WIDTH*0.765, SCREEN_HEIGHT* 0.035, 'stats');
        this.timesprite = this.game.add.text(SCREEN_WIDTH*0.8, SCREEN_HEIGHT* 0.05,
            "Timer: " + this.countdown, {font: "24px Alagard", fill: '#d5aa00'});
        this.scoreframe = this.game.add.sprite(SCREEN_WIDTH*0.115, SCREEN_HEIGHT* 0.035, 'stats');
        this.scoresprite = this.game.add.text(SCREEN_WIDTH*0.15, SCREEN_HEIGHT*0.05,
            "Score: " + this.score, {font: "24px Alagard", fill: '#d5aa00'});


        for(var i=0; i<this.player.health; i++){
            this.hearts.create(SCREEN_WIDTH * 0.23 + i * 32, SCREEN_HEIGHT*0.03, 'heart');
        }
        this.hearts.scale.set(2, 2);
        this.timeframe.scale.set(3, 3);
        this.scoreframe.scale.set(3.5, 3);
        this.hearts.fixedToCamera = true;
        this.timeframe.fixedToCamera = true;
        this.scoreframe.fixedToCamera = true;
        this.timesprite.fixedToCamera = true;
        this.scoresprite.fixedToCamera = true;
    },

    //call all the update functions of sprites
    update: function() {
        if(this.game.time.now - this.last_tick >= 1000 && this.countdown !== 0){
            this.last_tick = this.game.time.now;
            this.countdown = Number(this.countdown) - 1;
            this.timesprite.setText("Timer: " + this.countdown);
        }
        this.player.update();
		if(this.player.health === 0 && this.shop === null){
			this.shop = new Shop(this.game, this.level);
		}
        this.chest_objs.forEach(function(chest) {
            if(!chest.isEmpty){
                chest.update(this.player);
            }
        }, this);
        this.enemy_objs.forEach(function(enemy){
            enemy.update(this.player);
        }, this);

        if(this.score >= this.score_needed){
            this.game.state.start('Game');
        }
    }


};


