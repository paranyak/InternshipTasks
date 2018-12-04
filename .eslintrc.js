module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "rules": {
        "jsx-a11y/href-no-hash": 0,
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prop-types": [
            "enabled",
            {"ignore": "ignore", "customValidators": "customValidator"}
        ],
        "react/destructuring-assignment": ["enabled", "always", {"ignoreClassFields": "boolean"}]

    }
};