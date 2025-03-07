module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "jest" : true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
