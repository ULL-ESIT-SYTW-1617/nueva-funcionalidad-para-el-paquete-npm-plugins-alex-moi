var fs = require('fs-extra')
var path = require("path");
var appDir = path.resolve(__dirname);
var ruta = appDir+'/../template';
console.log(ruta)


fs.copy(ruta, './template/pepe', function (err) {
  if (err) return console.error(err)
  console.log("success!")
});