class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
    }

    create() {
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0,0);

      this.player = this.add.image(config.width/2,config.height/2, "player");
    }

    update() {
      this.background.tilePositionX += .5;
    }
}