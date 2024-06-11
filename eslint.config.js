const react = require("eslint-plugin-react");

module.exports = [
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            react,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        },
        linterOptions: {
            noInlineConfig: true,
            reportUnusedDisableDirectives: true
        },
    },
];
