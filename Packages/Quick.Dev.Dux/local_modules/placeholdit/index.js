/* jshint esversion: 6 */

const fs = require('fs');
const emitter = require('events').EventEmitter;
const PImage = require('pureimage');
const colors = require('./colors');
const utilities = require('../utils');

class placeholdit {
    constructor() {
        this.colors = colors;
        this.loadFonts();
    }

    buildFolder (string = utilities.required('string')) {
        let dirArray = string.split('/');
        let curDirCre = dirArray[0];
        for (var i = 0; i < dirArray.length; i++) {
            if (!fs.existsSync(curDirCre)) {
                fs.mkdirSync(curDirCre);
            }

            if(!!dirArray[i+1]) {
                curDirCre += `/${dirArray[i+1]}`;
            }
        }
    }

    complete () {
        this.emit('complete');
    }

    loadFonts () {
        let loadedCount = 0;
        let weights = [
            'glyph',
            'bold',
            'light',
            'semibold',
            'semilight',
            'normal'
        ];

        for (let weight of weights) {
            let newFont = PImage.registerFont(`${__dirname}/fonts/segoeui_${weight}.ttf`, 'Segoe UI', `${weight}`);
            newFont.load(() => {
                loadedCount++;

                if (loadedCount == weights.length) {
                    console.log('Fonts loaded and ready to use.');
                }
            });
        }
    }

    render (config = utilities.required('config')) {
        let _this = this;
        config = Object.assign(this.defaults, config);

        if (config.string == null) {
            config.string = `${config.w} x ${config.h}`;
            config.fontSize = config.h <= 100 ? 12 : Math.round(config.h*.18);
        }

        let newPI = PImage.make(config.w, config.h);
        let ctx = newPI.getContext('2d');
        ctx.fillStyle = config.background;
        ctx.fillRect(0,0,config.w,config.h);
        ctx.fillStyle = `${config.foreground} center`;
        ctx.font = `${config.fontSize}px 'Segoe UI' ${config.weight}'`;
        ctx.fillText(config.string, Math.round(config.w/2 - config.string.split('').length*(config.fontSize/2.1)/2), Math.round(config.h/2 + config.fontSize/2));

        _this.buildFolder(config.saveTo);
        PImage.encodeJPEGToStream(newPI, fs.createWriteStream(`${config.saveTo}/${config.name}`)).then(()=> {
            _this.complete();
            console.log(`Image ${config.name} created.`);
        }).catch((e) => {
            console.log(`there was an error writing image.\n${e}`);
        });

        return this;
    }

    get defaults () {
        return {
            w: 100,
            h: 100,
            background: '#CBCBCB',
            foreground: '#959595',
            weight: 'bold',
            fontSize: 48,
            string: null
        };
    }
}

Object.getPrototypeOf(placeholdit, emitter.prototype);
module.exports = new placeholdit();