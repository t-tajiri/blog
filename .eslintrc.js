module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn'
  }
}
