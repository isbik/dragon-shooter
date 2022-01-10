import Fires from "./Fires";
import { MoveableObject } from "./MoveableObject";
import GameScene from "./scenes/GameScene";

class Enemy extends MoveableObject {
  body: Phaser.Physics.Arcade.Body;
  scene: GameScene;
  velocity = -250;
  fires: Fires;
  timer: Phaser.Time.TimerEvent;
  bullet = {
    delay: 1000,
    texture: "bullet",
    velocity: -500,
  };

  static generate(scene: Phaser.Scene) {
    const x = +scene.game.config.width + 200;
    const y = Phaser.Math.Between(100, +scene.game.config.height - 100);
    const frame = "enemy" + Phaser.Math.Between(1, 4);

    return new Enemy(scene, x, y, "enemy", frame);
  }

  constructor(scene: Phaser.Scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  init() {
    super.init();
    this.fires = new Fires(this.scene);

    this.timer = this.scene.time.addEvent({
      delay: this.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    });
  }
  fire() {
    this.fires.createFires(this);
  }

  update(): void {
    if (this.active && this.x < -this.width) this.setAlive(false);
  }

  reset() {
    const x = +this.scene.game.config.width + 200;
    const y = Phaser.Math.Between(100, +this.scene.game.config.height - 100);
    const frame = "enemy" + Phaser.Math.Between(1, 4);

    this.x = x;
    this.y = y;
    this.setFrame("enemy" + frame);
    this.setAlive(true);
  }
}

export default Enemy;
