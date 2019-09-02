import Phaser from "phaser";

const DEFAULT_VELECITY = 20;
export default ({scene, skel}) => {
    const randomDelay = Math.floor(Math.random() * 3000) + 1500;
    scene.time.addEvent({ 
        delay: randomDelay, 
        callback: () => {
            const randomValue = Math.random();
            skel.body.setVelocityX(0);
            skel.body.setVelocityY(0);
            if (randomValue <= 0.25){
                skel.body.setVelocityX(-DEFAULT_VELECITY);
                skel.anims.play('skelLeft', true);
            } else if (randomValue <= 0.50 && randomValue > 0.26) {
                skel.body.setVelocityX(DEFAULT_VELECITY);
                skel.anims.play('skelRight', true);
            } else if (randomValue <= 0.75 && randomValue > 0.50 ) {
                skel.body.setVelocityY(DEFAULT_VELECITY);
                skel.anims.play('skelDown', true);
            } else if (randomValue <= 1 && randomValue > 0.75) {
                skel.body.setVelocityY(-DEFAULT_VELECITY);
                skel.anims.play('skelUp', true);
            } 
        },
        callbackScope: scene,
        loop: true, 
        paused: false
    });
}