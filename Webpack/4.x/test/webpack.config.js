const path = require('path');

module.exports = {
    mode:'production',
    target: 'web',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
};