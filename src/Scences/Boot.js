import Phaser from "phaser";

// Hero Sprites
import heroAnimations from '../animations/heroAnims.js';

// Hero Idle Sprites
import heroIdleDown from '../assets/Character/Char_one/Idle/Char_idle_down.png';
import heroIdleLeft from '../assets/Character/Char_one/Idle/Char_idle_left.png';
import heroIdleRight from '../assets/Character/Char_one/Idle/Char_idle_right.png';
import heroIdleUp from '../assets/Character/Char_one/Idle/Char_idle_up.png';

// Hero walking Sprites
import heroWalkLeft from '../assets/Character/Char_one/Walk/Char_walk_left.png';
import heroWalkRight from '../assets/Character/Char_one/Walk/Char_walk_right.png';
import heroWalkUp from '../assets/Character/Char_one/Walk/Char_walk_up.png';
import heroWalkDown from '../assets/Character/Char_one/Walk/Char_walk_down.png';

// Hero Attack Sprites
import heroAttackLeft from '../assets/Character/Char_one/Attack/Char_atk_left.png';
import heroAttackRight from '../assets/Character/Char_one/Attack/Char_atk_right.png';
import heroAttackUp from '../assets/Character/Char_one/Attack/Char_atk_up.png';
import heroAttackDown from '../assets/Character/Char_one/Attack/Char_atk_down.png';

// Skeleton Sprites
import skelAnimations from '../animations/skelAnims.js';
import skelIdleDown from '../assets/Skeleton/Idle/Skel_idle_down.png';
import skelWalkLeft from '../assets/Skeleton/Walk/Skel_walk_left.png';
import skelWalkRight from '../assets/Skeleton/Walk/Skel_walk_right.png';
import skelWalkUp from '../assets/Skeleton/Walk/Skel_walk_up.png';
import skelWalkDown from '../assets/Skeleton/Walk/Skel_walk_down.png';

// Misc Assets
import tree from '../assets/Other/Misc/Tree/Tree.png';
import treeTop from '../assets/Other/Misc/Tree/Tree_top.png';
import bush from '../assets/Other/Misc/Bush.png';

class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });
    }
    preload() {
        const progress = this.add.graphics();

        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });

        this.load.on('complete', () => {
            heroAnimations(this);
            skelAnimations(this);
            progress.destroy();
            this.scene.start('GameScene');
        })

        // hero spritesheets
        this.load.spritesheet('heroIdleDown',
            heroIdleDown,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroIdleUp',
            heroIdleUp,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroIdleLeft',
            heroIdleLeft,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroIdleRight',
            heroIdleRight,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroWalkLeft',
            heroWalkLeft,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroWalkRight',
            heroWalkRight,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroWalkUp',
            heroWalkUp,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('heroWalkDown',
            heroWalkDown,
            { frameWidth: 16, frameHeight: 16 }
        );
        // Hero Attack spritesheets
        this.load.spritesheet('heroAttackUp',
            heroAttackUp,
            { frameWidth: 138/6, frameHeight: 18 }
        )
        this.load.spritesheet('heroAttackLeft',
            heroAttackLeft,
            { frameWidth: 16, frameHeight: 21 }
        )
        this.load.spritesheet('heroAttackRight',
            heroAttackRight,
            { frameWidth: 16, frameHeight: 21 }
        )
        this.load.spritesheet('heroAttackDown',
            heroAttackDown,
            { frameWidth: 23, frameHeight: 23 }
        )
        // skel spritesheets
        this.load.spritesheet('skelIdleDown',
            skelIdleDown,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('skelWalkLeft',
            skelWalkLeft,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('skelWalkRight',
            skelWalkRight,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('skelWalkUp',
            skelWalkUp,
            { frameWidth: 16, frameHeight: 16 }
        );
        this.load.spritesheet('skelWalkDown',
            skelWalkDown,
            { frameWidth: 16, frameHeight: 16 }
        );

        this.load.image('tree', tree);
        this.load.image('treeTop', treeTop);
        this.load.image('bush', bush);
    }
}

export default BootScene;