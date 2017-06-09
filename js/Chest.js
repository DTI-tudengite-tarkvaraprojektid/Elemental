function Chest(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.opened = false;
    this.items = ['actions', 'art', 'avatar',
        'balance', 'challenges', 'feedback',
        'levels', 'luck', 'progress', 'scoreboard'];
    this.item = null;
}

Chest.prototype = {

    create: function(){
        this.sprite = this.game.add.sprite(this.x, this.y, 'chest_closed');
        this.game.physics.arcade.enable(this.sprite);
		this.sprite.scale.setTo(3,3);
        this.item = this.items[Math.floor(Math.random() * this.items.length)];
		this.sprite.body.immovable = true;
    },

    update: function(player){
        if(this.sprite.opened){
			console.log("if");
            this.sprite.loadTexture('chest_opened');
            this.giveItem(player);
        }
    },

    giveItem: function(player){
        player.inventory[player.inventory.length] = this.item;
    }

/* changes */

};