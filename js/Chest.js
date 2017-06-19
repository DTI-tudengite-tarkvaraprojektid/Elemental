function Chest(game, level, x, y, chesttype, elementname){
    this.game = game;
    this.level = level;
    this.x = x;
    this.y = y;
    this.sprite = null;
    this.opened = false;
    this.isEmpty = false;
    this.elements = ['actions', 'avatar', 'balance', 'feedback', 'progress', 'luck', 'art', 'levels', 'challenges'];
	this.elementname = elementname;
    this.points = [ '100', '150', '200', '250', '300'];
    this.chest_type = chesttype;
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
        if(this.chest_type === 'elementchest'){
            if(this.elementname === 'lock' || this.elementname === 'shop' || this.elementname === 'jump' ||
                this.elementname === 'move'){
                this.item = 'actions';
            }
            else if(this.elementname === 'art' || this.elementname === 'text'){
                this.item = 'art';
            }
            else if(this.elementname === 'avatar'){
                this.item = 'avatar';
            }
            else if(this.elementname === 'noArmor' || this.elementname === 'noSword' ||
                this.elementname === 'enemySpawn' || this.elementname === 'armor' || this.elementname === 'sword' ||
                this.elementname === 'getElements'){
                this.item = 'balance';
            }
            else if(this.elementname === 'timer' || this.elementname === 'health' ||
                this.elementname === 'points'){
                this.item = 'feedback';
            }
            else if(this.elementname === 'allempty' || this.elementname === 'zeropoints'){
                this.item = 'progress';
            }
            else if(this.elementname === 'levels'){
                this.item = 'levels';
            }
            else if(this.elementname === 'enemyKill' || this.elementname === 'freeze'){
                this.item = 'challenges';
            }
            else if(this.elementname === 'luck'){
                this.item = 'luck';
            }

            if(this.sprite.differentiate){
                this.sprite.animations.play('echest');
            } else {
                this.sprite.animations.play('chest');
            }
        } else if(this.chest_type === 'scorechest'){
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
            if(this.item.slice(2, 3) === '0' || this.item.slice(0,1) === '0'){
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
            if(this.item.slice(2, 3) === '0' || this.item.slice(0, 1) === '0'){
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
        var element = new Element(player.inventory.length * 35 + 35, 100, this.item, this.game, this.level, this.elementname);
        player.elements.push(element);
        player.inventory.add(element.sprite);
    }

};