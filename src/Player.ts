import Enemy from "./Enemy";
import Fires from "./Fires";
import GameScene from "./scenes/GameScene";

class Player extends Enemy {
  body: Phaser.Physics.Arcade.Body;
  timer: Phaser.Time.TimerEvent;
  scene: GameScene;
  velocity = 500;
  fires: Fires;

  bullet = {
    delay: 500,
    texture: "fire",
    velocity: 750,
  };

  constructor(scene: GameScene) {
    super(scene, 150, +scene.game.config.height / 2, "dragon", "dragon2");
  }

  move() {
    this.body.setVelocity(0);

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    }
  }
}

export default Player;
