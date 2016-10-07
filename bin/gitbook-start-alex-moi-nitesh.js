#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var ejs = require("ejs");
var path = require("path");

var entra       = false;
var author      = argv.a || '';
var name        = argv.n || '';
var directorio  = argv.d;
var repo_url    = argv.u || '';
var help        = argv.h;


if(help){
  console.log("\nAyuda GitBook-Start-Alex-Moi-Nitesh:"
              +"\n\nLos argumentos aceptados son:"
              +"\n -a: Especificar el autor del gitbook"
              +"\n -n: Especificar el nombre del gitbook"
              +"\n -d: Especificar el nombre del directorio"
              +"\n -u: Especificar la url del repositorio git\n");
  entra = true;
}


if(!entra){
  if(directorio){
    
    //creamos el directorio raiz
    fs.createDir("./" + directorio, function(err){
      if(err)
        console.log(err);
  	});
    
    
    //creamos el directorio txt
    fs.createDir("./" + directorio + "/txt", function(err){
      if(err)
        console.log(err);
  	});
  	
  	
  	//creamos el directorio scripts
  	fs.createDir("./" + directorio + "/scripts", function(err){
      if(err)
        console.log(err);
  	});
  	
  	
  	//copiamos lo que hay en txt y lo ponemos en el txt creado
    fs.copyDir(path.join(__dirname, '..', 'txt'), "./" + directorio + "/txt", function (err) {
    	if (err)
        console.error(err)
  	});
    
    
    //copiamos lo que hay en scripts y lo ponemos en el spripts creado
    fs.copyDir(path.join(__dirname, '..', 'scripts'), "./" + directorio + "/scripts", function (err) {
    	if (err)
        console.error(err)
  	});
   
   
    //copiamos gulpfile
    fs.copyFile(path.join(__dirname,'..','gulpfile.js'), "./" + directorio + "/gulpfile.js",function(err){
      if(err)
        console.log(err);
    });
  
  
    //copiamos el book
    fs.copyFile(path.join(__dirname,'..','book.json'),"./" + directorio + "/book.json",function(err){
      if(err)
      console.log(err);
    });
  
  
    //renderizando package.json
    ejs.renderFile(path.join(__dirname, '../template', 'package.ejs'), { autor: author , nombre: name, repourl: repo_url }, 
      function(err,data){
        if(err) {
            console.error(err);
        }
        if(data) {
            fs.writeFile("./" + directorio + "/package.json", data);
        }
    });
    
    
  }else{
    console.log("Debe especificar un nombre para el directorio");
  }
}