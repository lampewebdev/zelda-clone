import Phaser from "phaser";

class SkeletonGroup extends Phaser.Physics.Arcade.Group  {
    constructor(world, scene, config) {
        super(world, scene, config)
    }

    hitPlayer(hero) {
        hero.hit(10);
    }
}

export default SkeletonGroup;