class Scene1 extends Phaser.Scene{
	constructor() {
		super("bootGame");
    }

    preload() {
      // Background Image
      this.load.image("background", "assets/images/landscape scaled.png");
      // Player Image
      this.load.image("player", "assets/images/kite.png");
      // Miscellaneous Images
      this.load.image("cloud", "assets/images/cloud.png");
      this.load.image("rain", "assets/images/rain cloud.png");
      this.load.image("lightning", "assets/images/ligning cloud.png");
      this.load.image("tree", "assets/images/tree.png");
      this.load.image("cow", "assets/images/cow.png");
    }
    
    create() {
      this.add.text(20, 20, "Loading game...");
		  this.scene.start("playGame");
    }
}