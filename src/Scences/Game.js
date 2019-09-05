import Phaser from "phaser";
import Hero from '../Sprites/Hero/Hero.js';
import Skeleton from '../Sprites/Skeleton/Skeleton.js';
import setHeroControlls from '../Sprites/Hero/setHeroControlls.js';
import SkeletonGroup from "../Sprites/Skeleton/SkeletonGroup.js";

const createSkeletons = ({scene}) => {
    scene.skeletons = new SkeletonGroup(
        scene.physics.world,
        scene,
        {
            collideWorldBounds: true,
            enable: true,
        }
    );

    for (let index = 0; index < 4; index++) {
        const startingXPosition = Math.floor(Math.random() * 230) + 20;
        const startingYPosition = Math.floor(Math.random() * 200) + 20;
        const currentSekeleton = new Skeleton({
            scene,
            key: `skel${index}`,
            x: startingXPosition,
            y: startingYPosition,
        });
        scene.skeletons.add(currentSekeleton);
    };
    scene.physics.world.enable(scene.skeletons);
    scene.physics.add.overlap(scene.hero, scene.skeletons, scene.skeletons.hitPlayer, null, scene);
}

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
        createSkeletons({
            scene: this
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