/*
 * @Date: 2024-07-01 17:47:47
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-01 17:48:00
 * @Description: 
 */
/* eslint-env node */
module.exports = {
    plugins: [
      require("postcss-nested"),
      require("postcss-each-variables"),
      require("postcss-each")({
        plugins: {
          beforeEach: [require("postcss-for"), require("postcss-color-mix")],
        },
      }),
    ],
  };