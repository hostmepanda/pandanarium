'use strict'

const config = {
  type: Phaser.AUTO,
  width: 280,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: { preload, create },
};