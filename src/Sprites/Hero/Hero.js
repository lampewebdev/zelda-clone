import Phaser from "phaser";

class Hero extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y}) {
        super(scene, x, y);
        this.setTexture('heroIdleDown');
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.life = 100;
        this.invincibility = false;
        this.coolDowntime = 1000
    }
    
    hit(amount) {
        if (this.invincibility) {
            return;
        }
        this.invincibility = true;
        this.life -= amount;
        setTimeout(() => {
            this.invincibility = false;
        }, this.coolDowntime);
    }
}


export default Hero;