const fs = require('fs');

const readLastLinesFromFile = () => {

    fs.readFile('HanselAndGretel.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            const array = data.toString().replace(/\r\n/g, '\n').split('\n');
            const lineNumber = array.length;
            //console.log(lineNumber);
            const lines = 3; // How many lines you want to read from the end?
            const arrayIndex = lineNumber - lines;
            //console.log(arrayIndex);
            const removeLastArrayLines = array.splice(arrayIndex, lines).toString();
            console.log(removeLastArrayLines);
        }
    });
}
readLastLinesFromFile();