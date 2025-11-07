'use strict';

let tabDepth = 0;

class JsonToSass {
    map (object) {
        return this.executeMapping(object);
    };
    
    executeMapping (json) {
        var s = "";
        var listKeys = Object.keys(json);
        for (var key in json) {
            let m = `$${key}: `;
            let doThis = this.doWhat(json[key]);

            m += doThis.concatValues.insertThisBefore + 
                doThis.parseFunction(json[key]) + 
                doThis.concatValues.insertThisAfter;

            s += m + ";\n";
        }

        return s;
    };

    selectParser (value, index, arrayOfTuples) {
        m = "";

        var doThis = this.doWhat(value, true);
        m += doThis.concatValues.insertThisBefore +
                doThis.parseFunction(valueToConvert) +
                doThis.concatValues.insertThisAfter;

        outerIndex < arrayOfTuples.length - 1 ? m += doThis.concatValues.insertThisAfterLine : null;

        return m;
    };

    parseArray (array) {
        let  m = "(";
        let re = new JsonToSass();
        tabDepth++;
        array.map(function(valueToConvert, outerIndex, arrayOfTuples) {
            var doThis = re.doWhat(valueToConvert, true);
            m += doThis.concatValues.insertThisBefore +
                doThis.parseFunction(valueToConvert) +
                doThis.concatValues.insertThisAfter;
            outerIndex < arrayOfTuples.length - 1 ? m += doThis.concatValues.insertThisAfterLine : null;
        });
        m += ")";
        tabDepth--;
        return m;
    };

    parseObject (object) {
        let m = '';
        let re = new JsonToSass();
        tabDepth++
        Object.keys(object).forEach(function(key, outerIndex, arrayOfTuples) {
            m += key + ": ";
            var doThis = re.doWhat(object[key], true);
            m += doThis.concatValues.insertThisBefore +
                doThis.parseFunction(object[key]) +
                doThis.concatValues.insertThisAfter;
            outerIndex < arrayOfTuples.length - 1 ? m += doThis.concatValues.insertThisAfterLine : null;

        });
        tabDepth--
        return m;
    };

    parseStringOrNumber (o) {
        return o;
    };

    doWhat (what, isNested) {
        let whatFunction, // This selects the type of function used to parse the data
            openWithWhat, // This begins the line for a new parsing
            closeWithWhat, // This ends the line of said new parsing
            endLineWithWhat; // This closes out the Object, Array, or String completely before going on to the next key

        let openWithWhatTabs = '\t';
        let closeWithWhatTabs = '';
        for (var t = 0; t < tabDepth; t++) { 
            openWithWhatTabs += '\t';
            closeWithWhatTabs += '\t';
        }

        switch (toString.call(what)) {
            case "[object String]" :
            case "[object Number]" :
            case "[object Boolean]" :
                whatFunction = this.parseStringOrNumber;
                openWithWhat = "";
                closeWithWhat = "";
                endLineWithWhat = isNested ? `,\n${closeWithWhatTabs}` : ", ";
                break;

            case "[object Object]" :
                whatFunction = this.parseObject;
                openWithWhat = `(\n${openWithWhatTabs}`;
                closeWithWhat = `\n${closeWithWhatTabs})`;
                endLineWithWhat = isNested ? ", " : "\n";
                break;

            case "[object Array]" :
                whatFunction = this.parseArray;
                openWithWhat = isNested ? "" : `\n${openWithWhatTabs}`;
                closeWithWhat = "";
                endLineWithWhat = isNested ? ",\n" : "\n";
                break;

            default:
                console.log('You have entered an unrecognized JSON statement. Please review your JSON and try again.');
                break;
        }

        return {
            parseFunction: whatFunction,
            concatValues: {
                "insertThisBefore": openWithWhat,
                "insertThisAfter": closeWithWhat,
                "insertThisAfterLine": endLineWithWhat
            }
        }
    };
};

module.exports = new JsonToSass();