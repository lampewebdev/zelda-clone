import Phaser from "phaser";
import Hero from '../Sprites/Hero/Hero.js';
import setHeroControlls from '../Sprites/Hero/setHeroControlls.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('#3CB371');
        this.hero = new Hero({
            scene: this,
            key: 'hero',
            x: 50,
            y: 100,
        });
    }

    update() {
        setHeroControlls({
            scene: this,
            hero: this.hero,
        });
    }
}
export default GameScene;