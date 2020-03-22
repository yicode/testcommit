module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow switch case through
    'no-fallthrough': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // 禁止使用 eval 函数
    'no-eval': [2, {
      allowIndirect: true
    }],
    // 禁止多个空格， 忽略行位注释前的多个空格
    'no-multi-spaces': [2, {
      ignoreEOLComments: true
    }],
    'no-console': 2,
    'no-debugger': 2,
    // 去除文件末尾需要换行
    'eol-last': 0
  }
};
