import fs from 'fs';

import { buildDirectory } from './';

export const copy = (source: string, target: string, cb: (err?: Error) => void) => {
    let cbCalled = false;

    buildDirectory(target);

    let rd = fs.createReadStream(source);
    rd.on('error', (err) => {
        done(err);
    });

    let wr = rd.pipe(fs.createWriteStream(target));
    wr.on('error', (err) => {
        console.warn(`There has been a copy file write error: ${err}`);
        done(err);
    });

    wr.on('close', () => {
        done();
    });

    wr.on('finish', () => {
        done();
    });

    function done(err?: Error) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}
