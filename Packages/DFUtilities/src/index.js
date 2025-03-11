// TO BE CONVERTED TO TS

const fs = require('fs');
const http = require('http');
const path = require('path');

class FWAUtils {
    option (string) {
        let procArgs = process.argv.slice(2);

        for (let arg of procArgs) {
            let firstTwo = arg.substr(0,2);
            if (firstTwo == "--") {
                arg = arg.slice(2);
                let keyValue = arg.split(`=`);

                if (keyValue[0] === string) {
                    if (keyValue[1].toLocaleLowerCase() == 'false' || keyValue[1].toLocaleLowerCase() == 'true') {
                        keyValue[1] = JSON.parse(keyValue[1].toLowerCase());
                    }

                    if (keyValue[1] === null || keyValue[1] === '') {
                        keyValue[1] = true;
                    }

                    return keyValue[1];
                }
            }
        }
    }

    required (string = null) {
        let error = 'ERROR: Missing required variable';

        if (!string) {
            return false;
        }

        if (string !== null) {
            error += `- ${string}`;
        } else  {
            error += '.';
        }

        console.warn(error);
        return false;
    }

    buildDirectory (targetDir) {
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

    copy (source, target, cb) {
        let cbCalled = false;

        this.buildDirectory(target);

        let rd = fs.createReadStream(source);
        rd.on('error', (err) => {
            done(`There has been a copy file read error: ${err}`);
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

        function done(err) {
            if (!cbCalled) {
                cb(err);
                cbCalled = true;
            }
        }
    }

    caseString (string, type) {
        switch (type) {
            case 'snake':
                return string;
            case 'hyphen':
                return string;
            case 'camel':
                return string;
            case 'pascal':
                return string;
            default:
                return string;
        }
    }

    save (src, data) {
        this.buildDirectory(src);
        fs.writeFileSync(src, data);
    }

    url (host = 'localhost', port = 80, path = '/', next = function (data) {}) {
        http.request({
            host: host,
            port: port,
            path: path
        }, function (res) {
                let data = ``;
                res.on('data', (bit) => { data += bit; })
                .on('end', () => {
                    next(data);
                })
            }
        )
        .on('error', (err) => {
            console.log('Request Error: ', err)
        })
        .end();
    }

    caseWrite (string) {
        return string.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();        
        });
    }
}

module.exports = new FWAUtils();