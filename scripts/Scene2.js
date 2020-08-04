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
      


      
     
      this.addOneTree(config.width/2 - 50, config.height/2 + 180);
     
     
      
    }

    update() {
      this.background.tilePositionX += .5;
    }

    

    addOneTree(posx, posy) {
      // Create a pipe at the position x and y
      let trees = this.add.image(posx, posy, "tree");
      trees.setScale(2);
  
      // Add the pipe to our previously created group
      this.obstacles.add(trees);
  
      // Enable physics on the pipe 
      //this.physics.add(trees);
  
      // Add velocity to the pipe to make it move left
      trees.body.velocity.x = -200; 
  
      // Automatically kill the pipe when it's no longer visible 
      trees.checkWorldBounds = true;
      trees.outOfBoundsKill = true;

  }
 
}