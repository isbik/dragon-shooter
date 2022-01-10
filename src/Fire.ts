import { MoveableObject } from "./MoveableObject";
import GameScene from "./scenes/GameScene";

class Fire extends MoveableObject {
  body: Phaser.Physics.Arcade.Body;
  scene: GameScene;
  velocity: number;

  constructor(scene: Phaser.Scene, data) {
    super(scene, data.x, data.y, data.texture);
    this.velocity = data.velocity;
    this.init();
  }

  static generate(scene: Phaser.Scene, object) {
    return new Fire(scene, {
      x: object.x,
      y: object.y + 15,
      texture: object.bullet.texture,
      velocity: object.bullet.velocity,
    });
  }

  update(): void {
    if (
      (this.active && this.x < -this.width) ||
      this.x > this.width + +this.scene.game.config.width
    )
      this.setAlive(false);
  }

  reset(source) {
    this.x = source.x;
    this.y = source.y;
    this.setAlive(true);
  }
}

export default Fire;
