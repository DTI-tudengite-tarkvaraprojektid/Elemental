var Elemental = Elemental || {};

<<<<<<< HEAD
Elemental.game = new Phaser.Game(1360, 768, Phaser.AUTO, '');
=======
Elemental.game = new Phaser.Game(1920, 974, Phaser.AUTO, '');
>>>>>>> origin/krister

Elemental.game.state.add('Boot', Elemental.Boot);
Elemental.game.state.add('Preload', Elemental.Preload);
Elemental.game.state.add('Game', Elemental.Game);

Elemental.game.state.start('Boot');
