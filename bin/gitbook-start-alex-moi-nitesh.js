#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var ejs = require("ejs");
var path = require("path");
var child = require("child_process");

var entra       = false;
var author      = argv.a || '';
var name        = argv.n || '';
var directorio  = argv.c || 'Book';
var repo_url    = argv.u || '';
var help        = argv.h;


//Despliegue en iaas
var deploy_iaas = argv.d;
var ip_iaas     = argv.iaas_ip;
var path_iaas   = argv.iaas_path;



if(help){
  console.log("\nAyuda GitBook-Start-Alex-Moi-Nitesh:"
              +"\n\nLos argumentos aceptados son:"
              +"\n -a: Especificar el autor del gitbook"
              +"\n -n: Especificar el nombre del gitbook"
              +"\n -c: Especificar el nombre del directorio"
              +"\n -u: Especificar la url del repositorio git"
              +"\n -h: Help (Ayuda)"
              +"\n -d: Deploy en IaaS(iaas.ull.es)"
              +"\n --iaas_ip: Especificar la IP del IaaS"
              +"\n --iaas_path: Especificar la PATH de IaaS\n");
  entra = true;
}



if(!entra){
  
    if(directorio){
    
    //creamos el directorio raiz
    fs.createDir(path.join(process.cwd(), directorio), function(err){
      if(err)
        console.log(err);
  	});
    
    
    //creamos el directorio txt
    fs.createDir(path.join(process.cwd(), directorio , 'txt'), function(err){
      if(err)
        console.log(err);
  	});
  	
  	
  	//creamos el directorio scripts
  	fs.createDir(path.join(process.cwd(), directorio , 'scripts'), function(err){
      if(err)
        console.log(err);
  	});
  	
  	
  	//copiamos lo que hay en txt y lo ponemos en el txt creado
    fs.copyDir(path.join(__dirname, '..', 'txt'), path.join(process.cwd(), directorio , 'txt'), function (err) {
    	if (err)
        console.error(err)
  	});
    
    
    //copiamos lo que hay en scripts y lo ponemos en el spripts creado
    fs.copyDir(path.join(__dirname, '..', 'scripts'), path.join(process.cwd(), directorio , 'scripts'), function (err) {
    	if (err)
        console.error(err)
  	});
   
   
    //copiamos gulpfile
    fs.copyFile(path.join(__dirname,'..','gulpfile.js'), path.join(process.cwd(), directorio , 'gulpfile.js'),function(err){
      if(err)
        console.log(err);
    });
  
  
    //copiamos el book
    fs.copyFile(path.join(__dirname,'..','book.json'),path.join(process.cwd(), directorio , 'book.json'),function(err){
      if(err)
      console.log(err);
    });
    
    //copiamos server.js
    fs.copyFile(path.join(__dirname,'..','server.js'),path.join(process.cwd(), directorio , 'server.js'),function(err){
      if(err)
      console.log(err);
    });
    
  }else{
    console.log("Debe especificar un nombre para el directorio");
  }
  
  
  if(deploy_iaas == "iaas-ull-es"){
    /*console.log("CHIVATO")
    child.exec('cd '+path.join(__dirname,'../../../..',directorio), function(error, stdout, stderr){
      if(error)
        console.log(error)
      
      console.log(stderr);
      console.log(stdout);
    })*/
    child.exec('npm install --save-dev gitbook-start-iaas-ull-es-alex-moi --prefix '+path.join(process.cwd(),directorio)+'', function(error, stdout, stderr){
      if(error)
        console.log(error)
      
      console.log(stderr);
      console.log(stdout);
    })
    
    
    if(ip_iaas && path_iaas){
      
        var iaas = require(path.join(process.cwd(),directorio,'node_modules/gitbook-start-iaas-ull-es-alex-moi'));
        iaas.initialize();
        
        //renderizando package.json para añadir opciones del iaas
        ejs.renderFile(path.join(__dirname, '../template', 'package.ejs'), 
        { autor: author , nombre: name, repourl: repo_url, ip_iaas_ull: ip_iaas , path_iaas_ull: path_iaas}, 
            function(err,data){
                if(err) {
                    console.error(err);
                }
                if(data) {
                    fs.writeFile("./" + directorio + "/package.json", data);
                }
            });
    }
    else
      console.log("Debe especificar la ip y la ruta del servidor para el despliegue");
  }
  else
    console.log("Especifique correctamente el nombre del servidor");
  

}