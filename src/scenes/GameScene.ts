import Enemies from "../Enemies";
import Player from "../Player";

class GameScene extends Phaser.Scene {
  player: Player;
  enemies: Enemies;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  bg: Phaser.GameObjects.TileSprite;

  constructor() {
    super("Game");
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.createBackground();
    this.player = new Player(this);
    this.enemies = new Enemies(this);
    this.addOverlap();
  }

  addOverlap() {
    this.physics.add.overlap(
      this.player.fires,
      this.enemies,
      this.onOverlap,
      undefined,
      null
    );
    this.physics.add.overlap(
      this.enemies.fires,
      this.player,
      this.onOverlap,
      undefined,
      null
    );
  }

  onOverlap(source, target) {
    source.setAlive(false);
    target.setAlive(false);
  }

  update(time: number, delta: number): void {
    this.player.move();
    this.bg.tilePositionX += 0.5;
  }

  createBackground() {
    this.bg = this.add
      .tileSprite(0, 0, +this.game.config.width, +this.game.config.height, "bg")
      .setOrigin(0);
  }
}

export default GameScene;
