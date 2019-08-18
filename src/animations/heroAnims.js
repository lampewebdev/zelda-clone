export default (scene) => {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('heroIdleDown', { start: 0, end: 6 }),
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
}
