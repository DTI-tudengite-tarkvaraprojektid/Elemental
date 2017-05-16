function Enemy(game, x, y){
    this.game = game;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.health = 100;
}

//create sprite here
Enemy.prototype.create(){
    this.sprite = this.game.add.sprite(this.x, this.y, 'enemy');
}

//collision here
Enemy.prototype.update(){

}

//all other functionalities here