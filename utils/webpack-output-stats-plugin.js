'use strict';

const fs = require('fs-extra');
const path = require('path');
const outputWebpackStats = require('./outputWebpackStats');

const statsFileName = 'webpack-stats.json';
const statsPath = path.resolve(__dirname, '../', statsFileName);

function outputStatsPlugin() {};

outputStatsPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function(stats) {
    const publicPath = this.options.output.publicPath;
    return outputWebpackStats(stats, publicPath);
  });
};

module.exports = outputStatsPlugin;
