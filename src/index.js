import Phaser from "phaser";
import BootScene from "./Scences/Boot.js";
import GameScene from './Scences/Game.js';

new Phaser.Game({
  type: Phaser.WEBGL,
  parent: "phaser-example",
  width: 256,
  height: 240,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: [
    BootScene,
    GameScene,
  ]
});