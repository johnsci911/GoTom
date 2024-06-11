const react = require("eslint-plugin-react");
const noInlineStyles = require("eslint-plugin-no-inline-styles");

module.exports = [
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            react,
            noInlineStyles,
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
    },
];
