function Chest(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.opened = false;
    this.elements = ['actions', 'art', 'avatar',
        'balance', 'challenges', 'feedback',
        'levels', 'luck', 'progress', 'scoreboard'];
    this.item = null;
    this.points = [ '100', '200', '300', '400', '500'];

}

Chest.prototype = {

    create: function(){
        this.sprite = this.game.add.sprite(this.x, this.y, 'chest_closed');
        this.game.physics.arcade.enable(this.sprite);
        var rand = [Math.floor((Math.random() * 2) + 1)];
        if(rand === 1){
            this.item = this.elements[Math.floor(Math.random() * this.elements.length)];
        } else {
            this.item = this.points[Math.floor(Math.random() * this.points.length)];
        }
		this.sprite.scale.setTo(0.5, 0.5);
        this.item = this.elements[Math.floor(Math.random() * this.elements.length)];
		this.sprite.body.immovable = true;

    },

    update: function(player){
        if(this.sprite.opened){
            this.sprite.loadTexture('chest_opened');
            this.giveItem(player);
        }
    },

    giveItem: function(player){
        player.inventory.push(this.item);
    }

/* changes */

};