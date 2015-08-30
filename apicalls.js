var fs = require('fs');
var p = require('bluebird');
var parser = require('body-parser');
var riot = require('riot-games-api-nodejs');

var destination = '/home/honestemu/Documents/apchange/AP_ITEM_DATASET/';
var patch = '5.11';
var queue = 'RANKED_SOLO';
var region = 'NA.json';

fs.readFile('/home/honestemu/Documents/apchange/AP_ITEM_DATASET/5.11/RANKED_SOLO/NA.json', function (err, raw) {
  if (err) throw err;

  data = JSON.parse(raw)
  console.log(data);
});
