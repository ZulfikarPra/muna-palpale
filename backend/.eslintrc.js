module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'no-multi-spaces': ['error'],
    'linebreak-style': 0,
    'max-len': ['error', {'code': 120}],
  },
};
