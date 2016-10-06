#! /usr/bin/env node

/*
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




var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');

if(argv.d){
  
  //creamos el directorio raiz
  fs.createDir("./" + argv.d, function(err){
    if(err)
      console.log(err);
	});
  
  
  //creamos el directorio txt
  fs.createDir("./" + argv.d + "/txt", function(err){
    if(err)
      console.log(err);
	});
	
	//creamos el directorio scripts
	fs.createDir("./" + argv.d + "/scripts", function(err){
    if(err)
      console.log(err);
	});
	
	//copiamos lo que hay en txt y lo ponemos en el txt creado
  fs.copyDir("./node_modules/gitbook-start-alex-moi-nitesh/txt", "./" + argv.d + "/txt", function (err) {
  	if (err)
      console.error(err)
	});
  
  //copiamos lo que hay en scripts y lo ponemos en el spripts creado
  fs.copyDir("./node_modules/gitbook-start-alex-moi-nitesh/scripts", "./" + argv.d + "/scripts", function (err) {
  	if (err)
      console.error(err)
	});
  
  fs.copyFile("./node_modules/gitbook-start-alex-moi-nitesh/gulpfile.js","./" + argv.d+ "/gulpfile.js",function(err){
    if(err)
      console.log(err);
  });

  fs.copyFile("./node_modules/gitbook-start-alex-moi-nitesh/book.json","./" + argv.d + "/book.json",function(err){
    if(err)
    console.log(err);
  });
  
  
}