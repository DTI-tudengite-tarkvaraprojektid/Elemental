var game = new Phaser.Game(800, 600, Phaser.AUTO, '',
                            {preload: preload, create: create, update: update});

//load assets here
function preload(){
    //game.load.image('name', 'directory')
}

var level;

//instantiate level here from tilemap "new Level()"
function create(){
    level = new Level(game);
    level.create();
}

//update level components here "level.update()"
function update(){
    level.update();
}
