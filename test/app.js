'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-2-typescript:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.vscode/settings.json',
      '.vscode/tasks.json',
      'karma-shim.js',
      'karma.conf.js',
      'package.json',
      'README.md',
      'src/app.ts',
      'src/greeter.spec.ts',
      'src/greeter.ts',
      'src/public/index.html',
      'tsconfig.json',
      'tslint.json',
      'webpack.config.js'
    ]);
  });
});
