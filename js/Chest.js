function Chest(game, level, x, y){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.opened = false;
    this.isEmpty = false;
    //'art',  'levels', , 'progress', 'scoreboard'
    this.elements = ['actions', 'avatar', 'balance', 'feedback', 'challenges', 'luck'];
    this.points = [ '100', '150', '200', '250', '300'];
    this.item = null;
    this.create();

}

Chest.prototype = {

    create: function(){
        this.sprite = this.game.add.sprite(this.x, this.y, 'chests');

        this.sprite.differentiate = false;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.gravity.y = 500;
        var rand = Math.floor((Math.random() * 2) + 1);
        //differentiate chests: echest = element chest, chest = score chest
        this.sprite.animations.add('chest', [0]);
        this.sprite.animations.add('chest_open', [1]);
        this.sprite.animations.add('echest', [2]);
        this.sprite.animations.add('echest_open', [3]);
        if(rand === 1){
            this.item = this.elements[Math.floor(Math.random() * this.elements.length)];
            if(this.sprite.differentiate){
                this.sprite.animations.play('echest');
            } else {
                this.sprite.animations.play('chest');
            }
        } else if(rand === 2){
            this.item = this.points[Math.floor(Math.random() * this.points.length)];
            this.sprite.animations.play('chest');
        }
        console.log(this.item);
        this.sprite.body.immovable = true;
        this.sprite.locked = false;


    },

    update: function(player){
        this.game.physics.arcade.collide(this.sprite, this.level.wall);
        if(this.sprite.opened && !this.sprite.locked){
            this.sprite.body.gravity.y = 0;
            if(this.item.slice(2, 3) === '0'){
                this.setScore();
                this.sprite.animations.play('chest_open');
            } else {
                this.giveItem(player);
                if(this.sprite.differentiate){
                    this.sprite.animations.play('echest_open');
                } else {
                    this.sprite.animations.play('chest_open');
                }
            }
            this.isEmpty = true;
        }
        /*if(this.sprite.locked){
            if(this.item.slice(2, 3) === '0'){
                this.sprite.animations.play('chest_locked');
            } else {
                if(this.sprite.differentiate){
                    this.sprite.animations.play('echest_locked');
                } else {
                    this.sprite.animation.play('chest_locked');
                }
            }
        } */
        if(!this.sprite.opened && !this.sprite.locked){
            if(this.item.slice(2, 3) === '0'){
                this.sprite.animations.play('chest');
            } else {
                if(this.sprite.differentiate){
                    this.sprite.animations.play('echest');
                } else {
                    this.sprite.animations.play('chest');
                }
            }
        }
    },

    setScore: function(){
        SCORE = Number(SCORE) + Number(this.item);
        this.level.scoresprite.setText("Score: " + SCORE);
    },

    giveItem: function(player){
        var element = new Element(player.inventory.length * 35 + 35, 100, this.item, this.game, this.level);
        player.elements.push(element);
        player.inventory.add(element.sprite);
    }

};