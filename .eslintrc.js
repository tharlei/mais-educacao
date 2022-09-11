module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'no-empty': 0,
  },
};
