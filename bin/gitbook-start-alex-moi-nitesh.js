var fs_extra = require('fs-extra')
var fs = require("fs")
var path = require("path");

console.log(path.resolve(__dirname))


//modificar package.json añadiendo la url del repo del usuario



//quitar las extensiones ejs a package.json
fs.rename('../template/package.json.ejs', '../template/package.json', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});


//copiar directorio template en el directorio del usuario
/*
fs_extra.copy('./template', path.resolve(__dirname, 'template'), function (err) {
  if (err) return console.error(err)
  console.log("success!")
});*/