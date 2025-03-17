import fs from 'fs';
import { buildDirectory } from './buildDirectory';

export const save = (src: string, data: any, cb?: (err?: any) => void) => {
    buildDirectory(src, true);
    fs.writeFile(src.trim(), data, (err: any) => { if (cb) { cb(err) } });
}