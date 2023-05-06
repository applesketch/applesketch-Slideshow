class Scene1 extends Phaser.Scene {

    constructor() {
        super('scene1');   
    }

    preload() {
        this.load.path = "./img/";
        this.load.image("studio", "studio.png");
        this.load.audio("boom", "boom.mp3");
    }

    create() {
        this.time.delayedCall(2000, () => {
            this.cameras.main.fadeOut(2000, 255,255,255);
        });
        this.time.delayedCall(4500, () => this.scene.start('scene2'));
        
        this.time.delayedCall(200, () => this.add.sprite(300, 250, "studio"));
        this.sound.add("boom").play();

    }
}