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
        this.cameras.main.setBackgroundColor('#c8d45d');

        let firstTreetopX = 11;
        let firstTreetopY = 4;
        const treetop = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop.flipY = true;
        firstTreetopX += 46
        const treetop2 = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop2.flipY = true;
        firstTreetopX += 46;
        const treetop3 = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop3.flipY = true;
        firstTreetopX += 46;
        const treetop4 = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop4.flipY = true;
        firstTreetopX += 46;
        const treetop5 = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop5.flipY = true;
        firstTreetopX += 46;
        const treetop6 = this.add.image(firstTreetopX, firstTreetopY, 'treeTop');
        treetop6.flipY = true;

        this.add.image(50, 120, 'bush');
        this.add.image(220, 80, 'bush');
        this.add.image(120, 50, 'bush');
        this.add.image(80, 200, 'bush');
        this.add.image(200, 170, 'bush');

        const tree1 = this.add.image(230, 215, 'tree');
        const tree2 = this.add.image(25, 215, 'tree');

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