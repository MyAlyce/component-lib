const fs = require('fs-extra');

(async function run([cmd]) {
    switch (cmd) {
        case 'clean:dist': {
            return fs.remove('./dist');
        } default:
            throw new Error(`"${cmd}" not implemented`);
    }
})(process.argv.slice(2));
