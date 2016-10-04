var fs = require('fs');


if(!fs.existsSync("gh-pagues")){
    console.log("Creando directorio")
    fs.mkdir('gh-pagues');  
}else{
    console.log("El directorio ya esta creado")
}