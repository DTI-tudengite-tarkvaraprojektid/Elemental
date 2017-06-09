function Level(game){
    this.game = game;
    this.tilemap = null;
    this.player = null;
    this.enemies = null;
    this.chests = null;
    this.platforms = null;
    this.background = null;
    this.wall = null;
}

Level.prototype = {

    //load tilemap here
    create: function(){

        this.tilemap = this.game.add.tilemap('level');

        //the first parameter is the tileset name as specified in Tiled,
        //the second is the key to the asset in game.js
        this.tilemap.addTilesetImage('tiles', 'tiles', 64, 64);

        //create layers
        this.background = this.tilemap.createLayer('background');
        this.wall = this.tilemap.createLayer('wall');

        //collision on walls
        this.tilemap.setCollisionBetween(1, 2000, true, this.wall);

        //resizes the game world to match the layer dimensions
        this.background.resizeWorld();

        this.chest_objs = [];
        this.enemies = this.game.add.group();
        this.chests = this.game.add.group();

        //iterate over all objects in the 'spawner' layer, spawning player and enemies
        // at coordinates given by json
        this.tilemap.objects['spawners'].forEach(function(element){

            if(element.name === "player"){
                this.player = new Player(this.game, this, element.x, element.y);
                this.player.create();

            }
            else if(element.name === "enemy"){
                var enemy = "";
            }
            else if(element.name === "chest"){
                var chest = new Chest(this.game, this, element.x, element.y);
                chest.create();
                this.chest_objs.push(chest);
                this.chests.add(chest.sprite);
            }
        }, this);
    },

    //call all the update functions of sprites
    update: function() {
        this.player.update();

        this.chest_objs.forEach(function(c){
            c.update(this.player);
        }, this);
        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update();
        }
    }


};


