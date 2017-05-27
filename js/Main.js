var Elemental = Elemental || {};

Elemental.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Elemental.game.state.add('Boot', Elemental.Boot);
Elemental.game.state.add('Preload', Elemental.Preload);
Elemental.game.state.add('Game', Elemental.Game);

Elemental.game.state.start('Boot');
