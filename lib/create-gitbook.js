var fs = require('fs');
var path = require('path'); 
var gitbook = require('gitbook-cli');
var appDir = path.dirname(require.main.filename); 
var actual = appDir+'/gh-pages';


if(!fs.existsSync(actual)){
    
    console.log("Creando directorio")
    fs.mkdir(actual); 
    
    gitbook('build', '.', actual)
    
    
}else{
    console.log("El directorio ya esta creado")
}