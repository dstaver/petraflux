module.exports = {
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ["@typescript-eslint", 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ["error", { "functions": false }],
    'prettier/prettier': 'error'
  }
}