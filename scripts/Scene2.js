class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
    }

    create() {
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0,0);

      this.player = this.add.image(config.width/2,config.height/2, "player");
      this.tree = this.add.image(config.width/2 - 50, config.height/2 + 180, "tree");
      this.tree.setScale(2);
      
    }

    update() {
      this.background.tilePositionX += .5;
    }
    

    //reset
}