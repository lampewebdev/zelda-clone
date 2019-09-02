import Phaser from "phaser";

class Skeleton extends Phaser.GameObjects.Sprite {
    constructor({ scene, x, y }) {
        super(scene, x, y);
        this.setTexture('skelIdleDown');
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(true);
        scene.add.existing(this);
    }
}

export default Skeleton;