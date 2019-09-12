import Phaser from "phaser";

class Hero extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y}) {
        super(scene, x, y);
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.body.setSize(this.width * 0.8, this.height * 0.8, this.width / 2)
        this.body.setCollideWorldBounds(true);
        // default settings
        this.setTexture('heroIdleDown');
        this.life = 100;
        this.isAttacking = false;
        this.facingDirection = 'down';
        this.lifeBar = scene.add.text(8, 32, `life: ${this.life}`, { fontSize: '12px', fill: '#000' });
        this.invincibility = false;
        this.coolDowntime = 1000;
    }
    
    hit(amount) {
        if (this.invincibility) {
            return;
        }
        this.invincibility = true;
        this.life -= amount;
        this.lifeBar.setText(`life: ${this.life}`);
        setTimeout(() => {
            this.invincibility = false;
        }, this.coolDowntime);
    }
}


export default Hero;