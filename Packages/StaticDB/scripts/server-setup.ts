'use strict';

import fs from 'fs';
import path from 'path';
import glob from 'globule';

// import { } from './../src/utils';

let copyList = [
    // {
    //     "src": "",
    //     "dest": ""
    // }
];

for (let file of copyList) {
    if(file !== undefined) {
        let fileListing = glob.find((file as any).src);

        for (let oldFile of fileListing) {
            let fileName = path.basename(oldFile);

            // utils.copy(oldFile,
            //     path.normalize(`${file.dest}/${fileName}`),
            //     () => {
            //         console.log(`${fileName} Copy complete.`);
            //     }
            // );
        }
    }
}