import Phaser from "phaser";
import Hero from '../Sprites/Hero/Hero.js';
import Skeleton from '../Sprites/Skeleton/Skeleton.js';

import setHeroControlls from '../Sprites/Hero/setHeroControlls.js';
import skelPattern from '../Sprites/Skeleton/movePattern.js'
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
            x: 100,
            y: 100,
        });
        this.skeletons = [];
        for (let index = 0; index < 4; index++) {
            const startingXPosition = Math.floor(Math.random() * 230) + 20;
            const startingYPosition = Math.floor(Math.random() * 200) + 20;
            console.log(startingXPosition, startingYPosition);
            const currentSekeleton = new Skeleton({
                scene: this,
                key: `skel${index}`,
                x: startingXPosition,
                y: startingYPosition,
            }); 
            this.skeletons.push(currentSekeleton)
            skelPattern({
                scene: this,
                skel: currentSekeleton,
            })
        };
        
        
    }

    update() {
        setHeroControlls({
            scene: this,
            hero: this.hero,
        });   
    }
}
export default GameScene;