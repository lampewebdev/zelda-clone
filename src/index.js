import Phaser from "phaser";
import heroIdleDown from './assets/Character/Char_one/Idle/Char_idle_down.png';
import heroWalkLeft from './assets/Character/Char_one/Walk/Char_walk_left.png';
import heroWalkRight from './assets/Character/Char_one/Walk/Char_walk_right.png';
import heroWalkUp from './assets/Character/Char_one/Walk/Char_walk_up.png';
import heroWalkDown from './assets/Character/Char_one/Walk/Char_walk_down.png';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 256,
  height: 240,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

const game = new Phaser.Game(config);
let hero;
let cursors;
function preload() {
  this.load.spritesheet('heroIdleDown',
    heroIdleDown,
    { frameWidth: 16, frameHeight: 16 }
  );
  this.load.spritesheet('heroWalkLeft',
    heroWalkLeft,
    { frameWidth: 16, frameHeight: 16 }
  );
  this.load.spritesheet('heroWalkRight',
    heroWalkRight,
    { frameWidth: 16, frameHeight: 16 }
  );
  this.load.spritesheet('heroWalkUp',
    heroWalkUp,
    { frameWidth: 16, frameHeight: 16 }
  );
  this.load.spritesheet('heroWalkDown',
    heroWalkDown,
    { frameWidth: 16, frameHeight: 16 }
  );
}

function create() {
  hero = this.physics.add.sprite(50, 100, 'hero');
  hero.setCollideWorldBounds(true);
  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('heroIdleDown', { start: 0, end: 6 }),
    frameRate: 6,
    repeat: -1,
  });
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('heroWalkLeft', { start: 0, end: 6 }),
    frameRate: 6,
    repeat: -1
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('heroWalkRight', { start: 0, end: 6 }),
    frameRate: 6,
    repeat: -1
  });
  this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('heroWalkUp', { start: 0, end: 6 }),
    frameRate: 6,
    repeat: -1
  });
  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('heroWalkDown', { start: 0, end: 6 }),
    frameRate: 6,
    repeat: -1
  });
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.left.isDown) {
    hero.setVelocityX(-160);
    hero.anims.play('left', true);
  } else if (cursors.right.isDown) {
    hero.setVelocityX(160);
    hero.anims.play('right', true);
  } else if (cursors.up.isDown) {
    hero.setVelocityY(-160);
    hero.anims.play('up', true);
  } else if (cursors.down.isDown) {
    hero.setVelocityY(160);
    hero.anims.play('down', true);
  } else {
    hero.setVelocityX(0);
    hero.setVelocityY(0);
    hero.anims.play('idle');
  }
}