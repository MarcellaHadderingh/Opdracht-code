module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "plugins": ["vue"],
    "extends": [
        "eslint:all",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 8,
        // "allowImportExportEverywhere": true,
        "sourceType": "module"
    },
    "rules": {
        "array-element-newline": "off",
        "complexity": [
            "error",
            10
        ],
        "dot-location": "off",
        "func-style": "off",
        "handle-callback-err": "error",
        "indent": [
            "error",
            4
        ],
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreStrings": true
            }
        ],
        "multiline-ternary": "off",
        "newline-per-chained-call": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-magic-numbers": "off",
        "no-ternary": "off",
        "no-underscore-dangle": "off",
        "object-curly-spacing": "off",
        "one-var": "off",
        "padded-blocks": "off",
        "no-process-env": "off",
        "no-plusplus": "off",
        "quotes": "error",
        "semi": [
            2,
            "always"
        ],
        "id-length": [1, { "min": 1 }],
        "sort-keys": "off",
        "strict": 1
    }
};
