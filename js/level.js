function Level(game){
    this.game = game;
    this.tilemap = null;
    this.player = null;
    this.enemies = null;
    this.chests = null;
    this.platforms = null;
}
//load tilemap here
Level.prototype.create = function(){
    this.tilemap = null;
    //get player, enemies, chests location from tilemap and instantiate them here
    this.player = new Player(this.game, 50, 50);
    this.enemies = this.game.add.group();
    this.chests = this.game.add.group();
    this.platforms = this.game.add.group();

}
//call all the update functions of sprites
Level.prototype.update = function(){
    this.player.update();
    for each (enemy in this.enemies){
        enemy.update();
    }

}
