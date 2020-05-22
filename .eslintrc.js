module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    camelcase: "off",
    "prettier/prettier": "error",
  },
};
