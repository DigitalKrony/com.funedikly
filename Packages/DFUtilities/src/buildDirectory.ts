import fs from 'fs';
import path from 'path';


export const buildDirectory = (targetDir: string) => {
    let pathParse = path.parse(path.resolve(targetDir)).dir.split(path.sep);
    if (pathParse[0] == '.') {
        pathParse.shift();
    }

    let curDir = '';
    for (let part of pathParse) {
        curDir += `${part}/`;
        if (!fs.existsSync(curDir)) {
            fs.mkdirSync(path.resolve(curDir));
        }
    }
}
