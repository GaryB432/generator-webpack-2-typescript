'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const Case = require('case');

module.exports = class extends Generator {
  initializing() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the minimal ' + chalk.red('Webpack TypeScript') + ' generator!'
    ));

    this.log(chalk.gray('Coming right up'));

    this.cwd = path.basename(process.cwd());
  }

  writing() {
    this.fs.copy(this.templatePath('_vscode/settings.json'), this.destinationPath('.vscode/settings.json'));
    this.fs.copy(this.templatePath('_vscode/tasks.json'), this.destinationPath('.vscode/tasks.json'));
    this.fs.copy(this.templatePath('src/public/index.html'), this.destinationPath('src/public/index.html'));
    this.fs.copyTpl(this.templatePath('src/scripts/app.ts'), this.destinationPath('src/scripts/app.ts'), {appname: Case.kebab(this.cwd)});
    this.fs.copy(this.templatePath('src/scripts/greeter.spec.ts'), this.destinationPath('src/scripts/greeter.spec.ts'));
    this.fs.copy(this.templatePath('src/scripts/greeter.ts'), this.destinationPath('src/scripts/greeter.ts'));
    this.fs.copy(this.templatePath('src/styles/base.scss'), this.destinationPath('src/styles/base.scss'));
    this.fs.copy(this.templatePath('webpack/dev-server.js'), this.destinationPath('webpack/dev-server.js'));
    this.fs.copy(this.templatePath('webpack/entry.js'), this.destinationPath('webpack/entry.js'));
    this.fs.copy(this.templatePath('webpack/module.js'), this.destinationPath('webpack/module.js'));
    this.fs.copy(this.templatePath('webpack/output.js'), this.destinationPath('webpack/output.js'));
    this.fs.copy(this.templatePath('webpack/plugins.js'), this.destinationPath('webpack/plugins.js'));
    this.fs.copy(this.templatePath('webpack/resolve.js'), this.destinationPath('webpack/resolve.js'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('karma-shim.js'), this.destinationPath('karma-shim.js'));
    this.fs.copy(this.templatePath('karma.conf.js'), this.destinationPath('karma.conf.js'));
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {appname: Case.kebab(this.cwd)});
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {appname: Case.kebab(this.cwd)});
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
  }

  install() {
    this.installDependencies();
  }
};
