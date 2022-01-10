class StartScene extends Phaser.Scene {
  constructor() {
    super("Start");
  }
  create() {
    this.createBackground();
    this.createText();
    this.setEvents();
  }
  createBackground() {
    this.add.sprite(0, 0, "bg").setOrigin(0);
  }
  createText() {
    this.add
      .text(+this.sys.game.config.width / 2, 500, "Tap to start", {
        font: "40px CurseCasual",
        color: "#FFFFFF",
      })
      .setOrigin(0.5);
  }
  setEvents() {
    this.input.on("pointerdown", () => {
      this.scene.start("Game");
    });
    this.scene.start("Game");
  }
}

export default StartScene;
