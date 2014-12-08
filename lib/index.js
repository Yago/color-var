#! /usr/bin/env node
var oneColor = require('onecolor');
var chalk = require('chalk');
var ntc = require('./ntc');
var exec = require('child_process').exec,
    child;
var color = ntc.name(oneColor(process.argv[2]).hex())[1];
    color = color.toLowerCase();
    colorVar = "$"+color.replace(" ", "-");

child = exec("echo '" + colorVar.toString() + "' | pbcopy",
  function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log(chalk.blue(colorVar.toString()) + " copied to clipboard !")
});
