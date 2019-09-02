export default (scene) => {
    scene.anims.create({
        key: 'skelIdle',
        frames: scene.anims.generateFrameNumbers('skelIdleDown', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1,
    });
    scene.anims.create({
        key: 'skelLeft',
        frames: scene.anims.generateFrameNumbers('skelWalkLeft', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'skelRight',
        frames: scene.anims.generateFrameNumbers('skelWalkRight', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'skelUp',
        frames: scene.anims.generateFrameNumbers('skelWalkUp', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
    scene.anims.create({
        key: 'skelDown',
        frames: scene.anims.generateFrameNumbers('skelWalkDown', { start: 0, end: 6 }),
        frameRate: 6,
        repeat: -1
    });
}
