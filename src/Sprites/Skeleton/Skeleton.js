import Phaser from "phaser";
import skelPattern from "./movePattern.js"

class Skeleton extends Phaser.GameObjects.Sprite {
    constructor({ scene, x, y }) {
        super(scene, x, y);
        this.setTexture('skelIdleDown');
        scene.add.existing(this);
        skelPattern({scene, skel: this});
    }
}

export default Skeleton;