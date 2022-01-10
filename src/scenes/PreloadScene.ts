class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }
  preload() {
    this.load.atlas("dragon", "images/dragon.png", "images/dragon.json");
    this.load.atlas("enemy", "images/enemy.png", "images/enemy.json");
    this.load.image("fire", "images/fire.png");
    this.load.image("bullet", "images/bullet.png");
  }
  create() {
    this.scene.start("Start");
  }
}

export default PreloadScene;
