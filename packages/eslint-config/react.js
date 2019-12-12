module.exports = {
  extends: "./index.js",
}
module.exports = {
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    project: "./tsconfig.json",

    ecmaVersion: 2018,

        sourceType: "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true
  },
  settings: {
    "react": {
      "version": "detect"
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ["react", "@typescript-eslint", 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ["error", { "functions": false }],
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
  }
}