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
    Phaser.Actions.Call(scene.skeletons.getChildren(), function (skeleton) {
        skeleton.body.setSize(
            skeleton.body.width * 0.8,
            skeleton.body.height * 0.7,
        );
    });
    scene.physics.world.enable(scene.skeletons);
    scene.physics.add.overlap(scene.hero, scene.skeletons, scene.skeletons.hitPlayer, null, scene);
}

const fillSceneWithTrees = ({scene}) => {
    let firstTreetopX = 11;
    let firstTreetopY = 4;
    const treetop = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop.flipY = true;
    firstTreetopX += 46
    const treetop2 = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop2.flipY = true;
    firstTreetopX += 46;
    const treetop3 = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop3.flipY = true;
    firstTreetopX += 46;
    const treetop4 = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop4.flipY = true;
    firstTreetopX += 46;
    const treetop5 = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop5.flipY = true;
    firstTreetopX += 46;
    const treetop6 = scene.add.image(firstTreetopX, firstTreetopY, 'treeTop');
    treetop6.flipY = true;

    scene.trees = scene.physics.add.staticGroup();
    scene.trees.create(230, 215, 'tree');
    scene.trees.create(25, 215, 'tree');

    Phaser.Actions.Call(scene.trees.getChildren(), function (tree) {
        tree.setSize(tree.width * 0.7, tree.height * 0.8, tree.width / 2);
    })
} 

const fillSceneWithBushes = ({ scene }) => {
    scene.bushes = scene.physics.add.staticGroup();
    scene.bushes.create(50, 120, 'bush');
    scene.bushes.create(220, 80, 'bush');
    scene.bushes.create(120, 50, 'bush');
    scene.bushes.create(80, 200, 'bush');
    scene.bushes.create(200, 170, 'bush');

    Phaser.Actions.Call(scene.bushes.getChildren(), function (bush) {
        bush.setSize(bush.width * 0.7, bush.height * 0.7, bush.width / 2);
    })
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('#c8d45d');

        fillSceneWithBushes({ scene: this });

        this.hero = new Hero({
            scene: this,
            key: 'hero',
            x: 100,
            y: 100,
        });

        createSkeletons({
            scene: this
        });

        fillSceneWithTrees({ scene: this });
        
        this.physics.add.collider(this.hero, this.trees); 
        this.physics.add.collider(this.skeletons, this.trees);
        this.physics.add.collider(this.hero, this.bushes); 
        this.physics.add.collider(this.skeletons, this.bushes); 
    }

    update() {
        setHeroControlls({
            scene: this,
            hero: this.hero,
        });   
    }
}
export default GameScene;