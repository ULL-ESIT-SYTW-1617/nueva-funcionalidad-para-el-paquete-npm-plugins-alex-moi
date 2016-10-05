var fs = require('fs');
var path = require('path'); 
var gitbook = require('gitbook-cli');
var appDir = path.dirname(require.main.filename); 
var actual = appDir+'/gh-pages';

path.resolve('node_modules/gitbook-cli/bin/gitbook.js')

gitbook('build', '.', './gh-pages')

/*
if(!fs.existsSync(actual)){
    
    console.log("Creando directorio")
    fs.mkdir(actual); 
    
    gitbook

}else{
    console.log("El directorio ya esta creado")
}*/