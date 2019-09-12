import Phaser from "phaser";
const DEFAULT_VELECITY = 80;
export default ({scene, hero}) => {
    const cursors = scene.input.keyboard.createCursorKeys();
    const spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    if (Phaser.Input.Keyboard.JustDown(spacebar)){
        if(hero.isAttacking === true){
            return;
        }
        hero.isAttacking = true;
        switch (hero.facingDirection) {
            case 'down':
                hero.anims.play('attackDown');
                break;
            case 'up':
                hero.anims.play('attackUp');
                break;
            case 'left':
                hero.anims.play('attackLeft');
                break;
            case 'right':
                hero.anims.play('attackRight');
                break;
            default:
                hero.anims.play('attackDown');
                break;
        }
        hero.once('animationcomplete', () => {
            hero.isAttacking = false;
        })
    };
    if (cursors.left.isDown) {
        hero.facingDirection = 'left';
        hero.body.setVelocityX(-DEFAULT_VELECITY);
        hero.anims.play('left', true);
    } else if (cursors.right.isDown) {
        hero.facingDirection = 'right';
        hero.body.setVelocityX(DEFAULT_VELECITY);
        hero.anims.play('right', true);
    } else if (cursors.up.isDown) {
        hero.facingDirection = 'up';
        hero.body.setVelocityY(-DEFAULT_VELECITY);
        hero.anims.play('up', true);
    } else if (cursors.down.isDown) {
        hero.facingDirection = 'down';
        hero.body.setVelocityY(DEFAULT_VELECITY);
        hero.anims.play('down', true);
    } else {
        hero.body.setVelocityX(0);
        hero.body.setVelocityY(0);
        if(hero.isAttacking === false){
            switch (hero.facingDirection) {
                case 'down':
                    hero.anims.play('idleDown', true);
                    break;
                case 'up':
                    hero.anims.play('idleUp', true);
                    break;
                case 'left':
                    hero.anims.play('idleLeft', true);
                    break;
                case 'right':
                    hero.anims.play('idleRight', true);
                    break;
                default:
                    hero.anims.play('idleDown', true);
                    break;
            }
        }
    }
}
