'use strict';

const express = require('express');
const fs = require('fs');
const sassRenderer = require('../../../local_modules/sassRenderer');
const router = express.Router();

const _package = JSON.parse(fs.readFileSync(`package.json`));

router.get('/css/:version/:region/:theme/:file*', (req, res, next) => {
    res.header('Content-Type','text/css');
    const cookies = req.cookies;

    let qsp = req.query;
    let params = req.params;
    let minify = params.file.indexOf('min') === -1 ? false : true;

    let config = {
        theme: cookies[_package.themeCookieName] || params.theme || 'default',
        outputStyle: minify ? `compressed` : `nested`,
        variables: {
            region: 'west-europe',
            direction: 'ltr',
            start: 'left',
            end: 'right',
            ...qsp
        }
    };

    if (params.direction === 'rtl' || (params.region !=='hebrew' && params.regions !== 'arabic')) {
        config.variables.region = `arabic`;
    }

    switch (params.region) {
        case 'arabic':
        case 'hebrew':
            config.variables.direction = 'rtl';
            config.variables.left = 'right';
            config.variables.right = 'left';
            break;
    }

    config.imports = [
        `node_modules/bootstrap/scss/functions`,
        `node_modules/bootstrap/scss/variables`,
        `node_modules/bootstrap/scss/mixins`,
        `src/scss/themes/${config.theme}/variables`,
        'src/scss/DUX-dependencies',
        'src/scss/DUX-page'
    ];

    if (config.components) {
        for (let file of config.components.split(',')) {
            let fileSplit = file.split('_');
            let pushString = '';

            for (let part of fileSplit) {
                pushString += `${part}/`;
            }

            config.imports.push(`src/${pushString}styles/${fileSplit.pop()}`);   
        }
    } else {
        config.imports.push('src/scss/DUX-bootstrap');
        config.imports.push('src/scss/DUX-helpers');
        config.imports.push('src/scss/DUX-components');
        config.imports.push(`src/scss/themes/${config.theme}/package`);
    }

    let theSass = sassRenderer.compile(config);
    let header = fs.readFileSync(`${__dirname}/header.scss`);
    if (!minify) { header = `${JSON.stringify(config)}\r\r${header}`; };
    res.send(`${header}\r\r${theSass}`);
});

module.exports = router;
