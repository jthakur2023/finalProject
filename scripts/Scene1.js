class Scene1 extends Phaser.Scene{
	constructor() {
		super("bootGame");
    }

    preload() {
      // Background Image
      this.load.image("background", "assets/images/landscape scaled.png");
      // Player Image
      this.load.image("player", "assets/images/kite.png");

      //flappy
      this.load.image("flappy", "assets/images/flappybird.png");
      
      //sprite
      this.load.spritesheet("bird", "assets/spritesheet/Carpa-Spritesheet.png", {
        frameWidth: 727,
        frameHeight: 465
      });
      // Miscellaneous Images
      this.load.image("cloud", "assets/images/cloud.png");
      this.load.image("rain", "assets/images/rain cloud.png");
      this.load.image("lightning", "assets/images/lightning cloud.png");
      this.load.image("tree", "assets/images/tree.png");
      this.load.image("cow", "assets/images/cow.png");

      // Font
      this.load.bitmapFont("pixelFont", "assets/font/font dark.png", "assets/font/font.xml");
    }
    
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
      this.anims.create({
        key: "bird_anim",
        frames: this.anims.generateFrameNumbers("bird"),
        frameRate: 20,
        repeat: -1,
    });
    }
}