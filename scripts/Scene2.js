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

      
      //this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
      this.addOneTree(config.width/2 - 50, config.height/2 + 180);
     
      
    }

    update() {
      this.background.tilePositionX += .5;
    }

    jump() {
      // Add a vertical velocity to the bird
      this.player.body.velocity.y = -350;
    }

    addOneTree(posx, posy) {
      // Create a pipe at the position x and y
      let trees = this.add.image(posx, posy, "tree");
      trees.setScale(2);
  
      // Add the pipe to our previously created group
      this.obstacles.add(trees);
  
      // Enable physics on the pipe 
      //this.physics.arcade(trees);
  
      // Add velocity to the pipe to make it move left
      trees.body.velocity.x = -200; 
  
      // Automatically kill the pipe when it's no longer visible 
      trees.checkWorldBounds = true;
      trees.outOfBoundsKill = true;
  }
  addRowOfPipes{
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 5) + 1;

    // Add the 6 pipes 
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole + 1) 
            this.addOnePipe(400, i * 60 + 10);   
  }



    //reset
}