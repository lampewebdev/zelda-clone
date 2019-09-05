import Phaser from "phaser";

class SkeletonGroup extends Phaser.Physics.Arcade.Group  {
    constructor(world, scene, config) {
        super(world, scene, config)
    }

    hitPlayer() {
        console.log('hello')
    }
}

export default SkeletonGroup;