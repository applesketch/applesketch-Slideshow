class Scene2 extends Phaser.Scene {
    constructor() {
        super('scene2');   
    }

    preload() {
        this.load.path = "./img/";
        this.load.image("catw", "catw.png");
        this.load.audio("boom", "boom.mp3");
    }

    create() {
        this.time.delayedCall(2000, () => {
            this.cameras.main.fadeOut(2000, 255,255,255);
        });
        this.time.delayedCall(4500, () => this.scene.start('scene3'));
        
        this.time.delayedCall(200, () => this.add.sprite(80, 80, "catw"));
        this.sound.add("boom").play();

    }
}