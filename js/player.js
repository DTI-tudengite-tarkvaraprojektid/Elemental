function Player(game, x, y){
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
}

//create sprite here
Player.prototype.create(){
    this.sprite = this.game.add.sprite(this.x, this.y, 'player');
}

//collision here
Player.prototype.update(){

}

//all other functionalities here