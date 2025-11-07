'use strict';

const express = require('express');
const fs = require('fs');
const url = require('url');
const placeholdit = require('../../../local_modules/placeholdit');
const router = express.Router();

const defaults = {
    saveTo: '.tmp/img',
    w: 100,
    h: 100
};

const cleanString = (string) => {
    let cleaned = string.toLowerCase();
    cleaned = cleaned.replace(new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi), '');
    cleaned = cleaned.replace(new RegExp(/\s/gi), '_');
    return cleaned;
};

const colors = placeholdit.colors;

const checkForColorString = (value) => {
    for (var color in colors) {
        if (color == value.toLowerCase()) {
            return colors[color];
        }
    }

    return false;
};

router.get('/img', (req, res, next) => {
    res.header('Content-Type','image/png');

    let query = url.parse(req.url, true).query;
    let config = Object.assign(defaults, query);

    if (!!config.background) {
        let backgroundValue = checkForColorString(config.background);

        if (!backgroundValue && config.background[0] !== '#') {
            config.background = `#${config.background}`;
        } else {
            config.background = backgroundValue;
        }
    }

    if (!!config.foreground) {
        let foregroundValue = checkForColorString(config.foreground);

        if (!foregroundValue && config.foreground[0] !== '#') {
            config.foreground = `#${config.foreground}`;
        } else {
            config.foreground = foregroundValue;
        }
    }

    config.name = `${config.w}x${config.h}`;
    if (!!query.background) { config.name += `-${config.background}`}
    if (!!query.foreground) { config.name += `-${config.foreground}`}
    if (!!query.weight) { config.name += `-${config.weight}`}

    if (!!config.string) {
        config.name += `-${cleanString(config.string)}`;
    }

    config.name += '.jpeg';

    let filePathAndName = `${process.cwd()}/${config.saveTo}/${config.name}`;

    if (fs.existsSync(filePathAndName)) {
        res.sendFile(filePathAndName);
    } else {
        let newImage = placeholdit.render(config);

        let renderImg = () => {
            res.sendFile(filePathAndName);
            newImage.removeListener('complete', renderImg);
        }

        newImage.on('complete', renderImg);
    }
});

module.exports = router;