let config = {
    width: 960,
    height: 540,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

let game = new Phaser.Game(config);