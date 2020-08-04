class Scene2 extends Phaser.Scene{
	constructor() {
		super("playGame");
    }

    create() {
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0,0);

      this.player = this.add.image(config.width/2,config.height/2, "player");

      this.obstacles = this.add.group();
      

      this.obstacles = this.physics.add.group();
      
      this.timedEvent = this.time.addEvent({ delay: 1500, callback: this.addOneTree, callbackScope: this, repeat: 1 });
      
     
     
      
    }

    update() {
      this.background.tilePositionX += .5;
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
      this.timedEvent.reset({ delay: Phaser.Math.Between(500,3000), callback: this.addOneTree, callbackScope: this, repeat: 1});

  }
 
}