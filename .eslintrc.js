module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/jsx-runtime', 'airbnb', 'next', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['#', '.']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    }
  }
};
