const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    input: [
        'src/**/*.js',
        // Use ! to filter out files or directories
        '!src/**/*.test.js',
    ],
    output: './',
    options: {
        debug: true,
        func: {
            list: ['t'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.js', '.jsx'],
            fallbackKey: function(ns, value) {
                return value;
            },
            acorn: {
                ecmaVersion: 10, // defaults to 10
                sourceType: 'module', // defaults to 'module'
                // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            }
        },
        lngs: ['en','fr'],
        defaultLng: 'en',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'public/locales/{{lng}}/translation.json',
            savePath: 'public/locales/{{lng}}/translation.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    }
};
