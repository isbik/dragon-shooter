import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";
import PreloadScene from "./scenes/PreloadScene";
import StartScene from "./scenes/StartScene";

const ratio = Math.max(
  window.innerWidth / window.innerHeight,
  window.innerHeight / window.innerWidth,
  1280 / 720
);
const DEFAULT_HEIGHT = 720; // any height you want
const DEFAULT_WIDTH = ratio * DEFAULT_HEIGHT;

let config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [BootScene, PreloadScene, StartScene, GameScene],
};

new Phaser.Game(config);
