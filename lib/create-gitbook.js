var fs = require('fs');
var path = require('path'); 
var appDir = path.dirname(require.main.filename); 

if(!fs.existsSync(appDir+'/gh-pagues')){
    console.log("Creando directorio")
    fs.mkdir(appDir+'/gh-pagues');  
}else{
    console.log("El directorio ya esta creado")
}