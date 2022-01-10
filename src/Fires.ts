import Fire from "./Fire";

class Fires extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
  }

  createFires(source) {
    let fire = this.getFirstDead();

    if (fire) {
      fire.reset(source);
    } else {
      fire = Fire.generate(this.scene, source);
      this.add(fire);
    }

    fire.move();
  }
}

export default Fires;
