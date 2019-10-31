module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "consistent-return": 0,
        "array-callback-return": 0,
        "max-len": 0,
        "prefer-template": 0,
        "func-names": 0,
        "semi": 0,
        "no-extend-native": 0
    }
};