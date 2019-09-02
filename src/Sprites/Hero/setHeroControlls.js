import Phaser from "phaser";
const DEFAULT_VELECITY = 80;
export default ({scene, hero}) => {
    const cursors = scene.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        hero.body.setVelocityX(-DEFAULT_VELECITY);
        hero.anims.play('left', true);
    } else if (cursors.right.isDown) {
        hero.body.setVelocityX(DEFAULT_VELECITY);
        hero.anims.play('right', true);
    } else if (cursors.up.isDown) {
        hero.body.setVelocityY(-DEFAULT_VELECITY);
        hero.anims.play('up', true);
    } else if (cursors.down.isDown) {
        hero.body.setVelocityY(DEFAULT_VELECITY);
        hero.anims.play('down', true);
    } else {
        hero.body.setVelocityX(0);
        hero.body.setVelocityY(0);
        hero.anims.play('idle', true);
    }
}
