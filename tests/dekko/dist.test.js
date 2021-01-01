const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('ant-design-layout.css')
  .hasFile('ant-design-layout.min.css')
  .hasFile('ant-design-layout.js')
  .hasFile('ant-design-layout.min.js')
  .hasFile('ant-design-layout.less');

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));
