class Scene3 extends Phaser.Scene {
    constructor() {
        super('scene3');
    }

    preload() {
        this.load.path = "./img/";
        this.load.image("cat", "cat.png");
        this.load.image("title", "title.png");
        this.load.audio("siu", "siu.mp3");
    }

    create() {
        let title = this.add.sprite(300, 50, "title");
        let box = this.add.text(70, 140,
`PLAY


SETTINGS


QUIT`
        );

        let circle1 = this.add.circle(50, 150, 10, 0xFF0000);
        let circle2 = this.add.circle(50, 190, 10, 0xFF0000);
        let circle3 = this.add.circle(50, 230, 10, 0xFF0000);
        
        let cat = this.add.sprite(300, 300, "cat");
        this.add.tween({
            targets: cat,
            scale: {from: 0, to: 1},
            duration: 1000
        });
       

        this.input.on('pointerdown', () => {
            this.time.delayedCall(2000, () => {
                this.cameras.main.fadeOut(2000, 255,255,255);
            }); this.scene.start('scene1')
            });
        this.sound.add("siu").play();
        
    }
}