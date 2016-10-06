var fs = require('fs-extra')
var path = require("path");

console.log(path.resolve(__dirname))

fs.copy('./template', path.resolve(__dirname), function (err) {
  if (err) return console.error(err)
  console.log("success!")
});