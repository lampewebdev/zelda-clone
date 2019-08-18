import Phaser from "phaser";

class Hero extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y}) {
        super(scene, x, y);
        this.setTexture('heroIdleDown');
        scene.physics.world.enable(this);
        scene.add.existing(this);
        
    }
}


export default Hero;