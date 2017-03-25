'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-2-typescript:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      '.gitignore',
      '.vscode/settings.json',
      '.vscode/tasks.json',
      'karma-shim.js',
      'karma.conf.js',
      'package.json',
      'README.md',
      'src/public/index.html',
      'src/scripts/app.ts',
      'src/scripts/greeter.spec.ts',
      'src/scripts/greeter.ts',
      'src/styles/base.scss',
      'tsconfig.json',
      'tslint.json',
      'webpack.config.js',
      'webpack/dev-server.js',
      'webpack/entry.js',
      'webpack/module.js',
      'webpack/output.js',
      'webpack/plugins.js',
      'webpack/resolve.js'
    ]);
  });
});
