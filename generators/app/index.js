'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var Case = require('case');

module.exports = yeoman.Base.extend({
  initializing: function () {

    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the minimal ' + chalk.red('Webpack TypeScript') + ' generator!'
    ));

    this.log(chalk.gray('Coming right up'));

    this.cwd = path.basename(process.cwd());

    done();
  },

  writing: {
    app: function () {
      this.fs.copy(this.templatePath("_gitignore"), this.destinationPath(".gitignore"));
      this.fs.copy(this.templatePath("_vscode/settings.json"), this.destinationPath(".vscode/settings.json"));
      this.fs.copy(this.templatePath("_vscode/tasks.json"), this.destinationPath(".vscode/tasks.json"));
      this.fs.copy(this.templatePath("karma-shim.js"), this.destinationPath("karma-shim.js"));
      this.fs.copy(this.templatePath("karma.conf.js"), this.destinationPath("karma.conf.js"));
      this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"), { appname: Case.kebab(this.cwd) });
      this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"), { appname: Case.kebab(this.cwd) });
      this.fs.copy(this.templatePath("tsconfig.json"), this.destinationPath("tsconfig.json"));
      this.fs.copy(this.templatePath("tslint.json"), this.destinationPath("tslint.json"));
      this.fs.copy(this.templatePath("webpack.config.js"), this.destinationPath("webpack.config.js"));
    },

    source: function () {
      this.fs.copy(this.templatePath("src/app.ts"), this.destinationPath("src/app.ts"));
      this.fs.copy(this.templatePath("src/greeter.spec.ts"), this.destinationPath("src/greeter.spec.ts"));
      this.fs.copy(this.templatePath("src/greeter.ts"), this.destinationPath("src/greeter.ts"));
      this.fs.copy(this.templatePath("src/public/index.html"), this.destinationPath("src/public/index.html"));
    },

    tests: function () {
    }
  },

  install: function () {
    this.npmInstall();
  }
});
