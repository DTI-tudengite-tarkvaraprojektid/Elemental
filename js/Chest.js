function Chest(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.opened = false;
    this.isEmpty = false;
    this.elements = ['actions', 'art', 'avatar',
        'balance', 'challenges', 'feedback',
        'levels', 'luck', 'progress', 'scoreboard'];
    this.points = [ '100', '150', '200', '250', '300'];
    this.item = null;
    this.create();

}

Chest.prototype = {

    create: function(){
        this.sprite = this.game.add.sprite(this.x, this.y, 'chest_closed');
        this.game.physics.arcade.enable(this.sprite);
        var rand = [Math.floor((Math.random() * 2) + 1)];
        var rand = 2;
        if(rand === 1){
            this.item = this.elements[Math.floor(Math.random() * this.elements.length)];
        } else {
            this.item = this.points[Math.floor(Math.random() * this.points.length)];
        }
        this.sprite.body.immovable = true;
        console.log(this.item.slice(2, 3));

    },

    update: function(player){
        if(this.sprite.opened){
            this.sprite.loadTexture('chest_opened');

            if(this.item.slice(2, 3) === '0'){
                this.setScore();
            } else {
                this.giveItem(player);
            }
            this.isEmpty = true;
        }
    },

    setScore: function(){
        this.level.score = Number(this.level.score) + Number(this.item);
        this.level.scoresprite.setText("Score: " + this.level.score);
    },

    giveItem: function(player){
        var element = new Element(player.inventory.length * 20 + 20, 100, this.item, this.game, this.level);
        player.elements.push(element);
        player.inventory.add(element.sprite);
    }

};