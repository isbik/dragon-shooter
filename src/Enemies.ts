import Enemy from "./Enemy";

class Enemies extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;
  timer: Phaser.Time.TimerEvent;
  countCreated = 0;
  countMax = 10;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this,
    });

    this.countCreated = 0;
  }

  tick() {
    if (this.countCreated < this.countMax) {
      this.createEnemy();
    } else {
      this.timer.remove();
    }
  }

  createEnemy() {
    let enemy = this.getFirstDead();

    if (enemy) {
      enemy.reset();
    } else {
      enemy = Enemy.generate(this.scene);
      this.add(enemy);
    }

    enemy.move();
    ++this.countCreated;
  }
}

export default Enemies;
