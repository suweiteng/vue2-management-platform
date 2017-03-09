module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi':[1,'always'],//分号
    // 'indent':0
    "space-before-blocks": [1, "always"], //代码块前的空格
    "space-before-function-paren": [1, "always"],//函数定义时，function关键字后面的小括号前是否需要加空格
    "quotes": [0, "always"],
  }
}
