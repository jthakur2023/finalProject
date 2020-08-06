class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
    }

    create() {
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0,0);

      this.player = this.physics.add.image(config.width/2,config.height/2, "player");
      this.physics.world.setBounds(0, 0, config.width, config.height);
      

      this.obstacles = this.physics.add.group();
      this.treeEvent = this.time.addEvent({ delay: 1500, callback: this.addOneTree, callbackScope: this, repeat: 1 });

      this.birdEvent = this.time.addEvent({delay: 500, callback: this.addOneBird, callbackScope: this, repeat: 1});
      this.flappyEvent = this.time.addEvent({delay: 2000, callback: this.addOneFlappy, callbackScope: this, repeat: 1});
      
     
      this.physics.add.overlap(this.player, this.obstacles, this.hitObstacle, null, this);

      this.cloudEvent = this.time.addEvent({delay: 2500, callback: this.addCloud, callbackScope: this, repeat: 1});
      

      // Score Label
      this.score = 0;
      let scoreFormated = this.zeroPad(this.score, 6);
      this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " + scoreFormated, 32);
    }

    update() {
      this.background.tilePositionX += .5;
      let mouseX = this.input.mousePointer.x;
      let mouseY = this.input.mousePointer.y;
      this.player.setPosition(mouseX, mouseY)
    }

    zeroPad(number, size) {
      let stringNumber = String(number);
      while (stringNumber.length < (size || 2)) {
        stringNumber = "0" + stringNumber;
      }
      return stringNumber;
    }

    addOneTree() {
      // Create a pipe at the position x and y
      let trees = this.add.image(config.width, config.height /2 + 180, "tree");
      let randomNumber = Math.floor(Math.random() * 3) + 2
      console.log(randomNumber);
      trees.setScale(randomNumber);

  
      // Add the pipe to our previously created group
      this.obstacles.add(trees);
  
      // Enable physics on the pipe 
      //this.physics.add(trees);
  
      // Add velocity to the pipe to make it move left
      trees.body.velocity.x = -200; 
  
      // Automatically kill the pipe when it's no longer visible 
      trees.checkWorldBounds = true;
      trees.outOfBoundsKill = true;
      this.treeEvent.reset({ delay: Phaser.Math.Between(500,3000), callback: this.addOneTree, callbackScope: this, repeat: 1});

  }

  addOneBird(){
    let randomNumber = Math.floor(Math.random() * (config.height / 2));
    let bird = this.physics.add.sprite(config.width - 1, randomNumber);
    bird.setScale(.1);
    bird.play("bird_anim");
    this.obstacles.add(bird);
    bird.body.velocity.x = -400;
    bird.checkWorldBounds = true;
    bird.outOfBoundsKill = true;
    this.addScore();
    this.birdEvent.reset({ delay: Phaser.Math.Between(500,3000), callback: this.addOneBird, callbackScope: this, repeat: 1});
  }

  addOneFlappy(){
    let randomNumber = Math.floor(Math.random() * (config.width / 2));

    let flappy = this.add.image((config.width / 2) + randomNumber, 0, "flappy");
    flappy.setScale(.15);
    flappy.setFlipX(true);
    flappy.angle = -45;
    this.obstacles.add(flappy);
    flappy.body.velocity.x = -400;
    flappy.body.velocity.y = 400;
    flappy.checkWorldBounds = true;
    flappy.outOfBoundsKill = true;
    this.addScore();
    this.flappyEvent.reset({ delay: Phaser.Math.Between(500,3000), callback: this.addOneFlappy, callbackScope: this, repeat: 1});
  }

  addCloud(){
    let cloud = this.physics.add.image(config.width, config.height * .1, "cloud");;
    switch (gamesettings.weather){
      case "Clouds": 
        cloud.setAlpha(.1);
        cloud.body.velocity.x = -400;
        cloud.checkWorldBounds = true;
        cloud.outOfBoundsKill = true;
        this.cloudEvent.reset({delay: Phaser.Math.Between(250, 1000), callback: this.addCloud, callbackScope: this, repeat: 1});
        break;
      case "Drizzle": cloud.setTexture("rain");
          this.cloudEvent.reset({delay: Phaser.Math.Between(500, 2000), callback: this.addCloud, callbackScope: this, repeat: 1});
          cloud.body.velocity.x = -400;
        cloud.checkWorldBounds = true;
        cloud.outOfBoundsKill = true;
        break;
      case "Rain": cloud.setTexture("rain");
          this.cloudEvent.reset({delay: Phaser.Math.Between(300, 1000), callback: this.addCloud, callbackScope: this, repeat: 1});
          cloud.body.velocity.x = -400;
        cloud.checkWorldBounds = true;
        cloud.outOfBoundsKill = true;
        break;
      //need thunderstorm
      case "Clear": 
      this.cloudEvent.reset({delay: Phaser.Math.Between(1000, 4000), callback: this.addCloud, callbackScope: this, repeat: 1});
      cloud.body.velocity.x = -400;
        cloud.checkWorldBounds = true;
        cloud.outOfBoundsKill = true;
      cloud.setAlpha(.05);
    break;
      default:
          this.cloudEvent.reset({delay: Phaser.Math.Between(1000, 4000), callback: this.addCloud, callbackScope: this, repeat: 1});
          cloud.body.velocity.x = -400;
        cloud.checkWorldBounds = true;
        cloud.outOfBoundsKill = true;
          cloud.setAlpha(.05);
    }
  
  }

  hitObstacle(){
    console.log("ouch");
  }

  addScore(){
    console.log("oof");
    this.score += 1;
    this.scoreLabel.text = this.zeroPad(this.score, 6);
  }
 
}