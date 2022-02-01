/* eslint-disable */
const fs = require('fs-extra');

(async function run([cmd]) {
    switch (cmd) {
        case 'clean:dist': {
            return fs.remove('./dist');
        } case 'copy:styles': {
            return fs.copy('src/index.css', 'dist/index.css');
        } default:
            throw new Error(`"${cmd}" not implemented`);
    }
})(process.argv.slice(2));
