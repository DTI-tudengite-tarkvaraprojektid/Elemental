function Element(x, y, name, game, level, elementname){

    this.x = x;
    this.y = y;
    this.category = name;
    this.game = game;
    this.level = level;
	this.elementname = elementname;
	this.levelCD = 0;
    this.create();
	


}

Element.prototype = {

    create: function(){

        this.sprite = this.game.add.sprite(this.x, this.y, this.category);
        this.sprite.smoothed = false;
        this.sprite.fixedToCamera = true;
        this.sprite.scale.setTo(0.5, 0.5);
        if(this.category === 'actions'){
            this.sprite.animations.add('lock', [0]);
            this.sprite.animations.add('shop', [1]);
            this.sprite.animations.add('jump', [2]);
            this.sprite.animations.add('move', [3]);
            this.actions();
        } else if(this.category === 'art'){
            this.sprite.animations.add('art', [0]);
            this.sprite.animations.add('text', [1]);
            this.art();
        } else if(this.category === 'avatar'){
            this.sprite.animations.add('avatar', [0]);
            this.avatar();
        } else if(this.category === 'balance'){
            this.sprite.animations.add('armor', [0]);
			this.sprite.animations.add('noArmor', [1]);
            this.sprite.animations.add('noSword', [2]);
			this.sprite.animations.add('enemySpawn', [3]);
			this.sprite.animations.add('sword',[4]);
			this.sprite.animations.add('getElements', [5]);
            this.balance();
        } else if(this.category === 'feedback'){
            this.sprite.animations.add('timer', [0]);
            this.sprite.animations.add('points', [1]);
            this.sprite.animations.add('health', [2]);
            this.feedback();
        } else if(this.category === 'levels'){
            this.sprite.animations.add('levels', [0]);
            this.levels();
        } else if(this.category === 'challenges'){
            this.sprite.animations.add('enemyKill', [0]);
            this.sprite.animations.add('freeze', [1]);
            this.challenge();
        }
        else if(this.category === 'luck'){
            this.sprite.animations.add('luck', [0]);
            this.luck();

        } else if(this.category === 'progress'){
            this.sprite.animations.add('allempty', [0]);
            this.sprite.animations.add('zeropoints', [1]);
            this.progress();
        } else if(this.category === 'scoreboard'){
            this.scoreboard();
        }
	},

    //krister
    actions: function(){
        if (this.elementname === 'move'){
            this.sprite.animations.play('move');
            if (!this.level.player.moveAbility) {
                this.level.player.moveAbility = true;
            } else {
                if(this.level.player.jumpAbility) {
                    this.level.player.moveAbility = false;
                } else {
                    this.level.player.jumpAbility = true;
                    this.level.player.moveAbility = false;
                }
            }
        } else if (this.elementname === 'jump') {
            this.sprite.animations.play('jump');
            if (!this.level.player.jumpAbility) {
                this.level.player.jumpAbility = true;
            } else {
                if(this.level.player.moveAbility){
                this.level.player.moveAbility = false;
                } else {
                    this.level.player.moveAbility = true;
                    this.level.player.jumpAbility = false;
                }
            }
        } else if(this.elementname === 'lock'){
            this.sprite.animations.play('lock');
            this.level.chests.forEach(function(chest){
                chest.locked = true;
            });
        } else if (this.elementname === 'shop'){
            this.sprite.animations.play('shop');
            this.level.canShop = false;
        }
    },
	//DONE

    art: function(){
        //UI is low quality
		if (this.elementname === 'shop') {
			this.level.timeframe.destroy();
			this.level.timesprite.font = 'Times New Roman';
			this.level.scoresprite.font = 'Times New Roman';
			this.level.scoreframe.destroy();
		}
		//DONE
    },
    //krister
    avatar: function(){
	    //low leveled avatar
		if (this.elementname === 'avatar') {
			this.sprite.animations.play('avatar');
			this.level.player.greyAvatar = true;
		}
    },

    balance: function(){
        var rand = Math.floor((Math.random() * 4) + 1);
		if(rand === 1){
			if(this.level.player.armored){
			this.sprite.animations.play('noArmor');
			
			this.level.player.armored = false;		
			} else {
				this.sprite.animations.play('armor');
				this.level.player.armored = true;
			}
		
		} else if (rand === 2){
			if(this.level.player.armed){
				this.sprite.animations.play('noSword');
				this.level.player.armed = false;	
			} else {
				this.sprite.animations.play('sword');
				this.level.player.armed = true;
			}
						 

		} else if (rand === 3){
			this.sprite.animations.play('enemySpawn');
            this.level.tilemap.objects['spawners'].forEach(function(element){
                if(element.name === "enemy"){
                    var enemy = new Enemy(this.game, this.level, element.x, element.y);
                    this.level.enemy_objs.push(enemy);
                    this.level.enemies.add(enemy.sprite);

                }
            }, this);
		} else if(rand === 4){
			this.sprite.animations.play('getElements');
			//choose from items displayed in shop (open shop, 0 price??)
		}
		

    },

    //richard
    challenge: function(){
        var rand = Math.floor((Math.random() * 2) + 1);
        if(rand === 1){
            this.sprite.animations.play('freeze');
            this.level.timerStopped = true;
        } else if (rand === 2){
            this.sprite.animations.play('enemyKill');
            this.level.enemies.destroy();
            this.level.enemies = this.game.add.group();
            this.level.enemy_objs = [];
        }
        //timer is stopped
        //All NPCs removed
		//DONE
		
    },

    feedback: function(){
        // health bar removed
        // timer removed(still ticking)
        // points removed
        var rand = Math.floor((Math.random() * 3) + 1);
        if(rand === 1){
            this.sprite.animations.play('timer');
            this.level.timesprite.kill();
        } else if(rand === 2){
            this.sprite.animations.play('points');
            this.level.scoresprite.kill();
        } else if(rand === 3){
            this.sprite.animations.play('health');
            this.level.hearts.forEachAlive(function(heart){
                heart.kill();
            });
        }
    },

    //richard
    levels: function(){
        this.sprite.animations.play('levels');
        // all levels are same
    },

    luck: function(){
        //chests with points and elements differentiated
        this.sprite.animations.play('luck');
        this.level.chests.forEachAlive(function(chest){
            chest.differentiate = true;
        });
    },

    //richard
    progress: function(){
		//all chests become empty: DONE
        //no more points awarded: DONE: 
		//Level peab jätkuma. mõlemad suudavad takistada edasi liikumist.
		var rand = Math.floor((Math.random() * 2) + 1);
		if(rand === 1){
            this.sprite.animations.play('allempty');
            this.level.chest_objs.forEach(function(chest){
                if (chest.item.slice(2, 3) === "0") {
                    chest.item = '000';
                } else {
                    chest.item = '';
                }
			
			});
        } else {
            this.sprite.animations.play('zeropoints');
		    this.level.chest_objs.forEach(function(c){
                if (c.item.slice(2, 3) === "0") {
                    c.item = '000';
                }
			});
			
			setTimeout(function(){ this.game.state.start('Game') }, 5000);
		}
	},

    scoreboard: function(){
        //scoreboard removed
    }
};