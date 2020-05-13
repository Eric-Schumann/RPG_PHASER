import Phaser from 'phaser';

import button1 from '../assets/images/ui/blue_button01.png';
import items from '../assets/images/items.png';
import characters from '../assets/images/characters.png';
import goldSound from '../assets/audio/Pickup.wav';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('boot');
    }

    preload() {
        this.load.image('button1', button1);
        this.load.spritesheet('items', items, {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('characters', characters, {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.audio('goldSound', goldSound);

        this.load.on('progress', (progress) => {
            console.log(progress);
        });

        this.load.on('complete', () => {
            this.scene.start('game');
        });

    }

    create() {
    }
}