export default (scene) => {
    scene.anims.create({
        key: 'idleDown',
        frames: scene.anims.generateFrameNumbers('heroIdleDown', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
    });
    scene.anims.create({
        key: 'idleLeft',
        frames: scene.anims.generateFrameNumbers('heroIdleLeft', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
    });
    scene.anims.create({
        key: 'idleRight',
        frames: scene.anims.generateFrameNumbers('heroIdleRight', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
    });
    scene.anims.create({
        key: 'idleUp',
        frames: scene.anims.generateFrameNumbers('heroIdleUp', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
    });
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('heroWalkLeft', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('heroWalkRight', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'up',
        frames: scene.anims.generateFrameNumbers('heroWalkUp', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'down',
        frames: scene.anims.generateFrameNumbers('heroWalkDown', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: 'attackUp',
        frames: scene.anims.generateFrameNumbers('heroAttackUp', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: 0
    });
    scene.anims.create({
        key: 'attackLeft',
        frames: scene.anims.generateFrameNumbers('heroAttackLeft', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: 0
    });
    scene.anims.create({
        key: 'attackRight',
        frames: scene.anims.generateFrameNumbers('heroAttackRight', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: 0
    });
    scene.anims.create({
        key: 'attackDown',
        frames: scene.anims.generateFrameNumbers('heroAttackDown', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: 0
    });

}
