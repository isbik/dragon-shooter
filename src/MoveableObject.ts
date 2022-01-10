export class MoveableObject extends Phaser.GameObjects.Sprite {
  body: Phaser.Physics.Arcade.Body;
  velocity: number;
  timer: any;

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.scene.events.on("update", this.update, this);
  }

  setAlive(flag: boolean) {
    this.body.enable = flag;
    this.setVisible(flag);
    this.setActive(flag);

    if (this.timer) {
      this.timer.paused = !flag;
    }
  }

  move() {
    this.body.setVelocityX(this.velocity);
  }
}
