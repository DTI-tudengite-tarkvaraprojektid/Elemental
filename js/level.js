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

        this.enemies = this.game.add.group();
        this.chests = this.game.add.group();

        //iterate over all objects in the 'spawner' layer, spawning player and enemies
        // at coordinates given by json
        this.tilemap.objects['spawners'].forEach(function(element){

            if(element.name === "player"){
                this.player = new Player(this.game, this, element.x, element.y);
                this.player.create();

            }
            if(element.name === "enemy"){
                this.createFromTiledObject(element, this.enemies);
            }
        }, this);
    },

    //call all the update functions of sprites
    update: function() {
        this.player.update();
        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update();
        }
    },

    //create a sprite from an object
    createFromTiledObject: function(element, group) {
        var sprite = group.create(element.x, element.y, element.properties.sprite);

        //copy all properties to the sprite
        Object.keys(element.properties).forEach(function(key){
            sprite[key] = element.properties[key];
        });
    }

};


