var gulp  = require('gulp');
var shell = require('gulp-shell');
var git = require('gulp-git');


var fs = require('fs');
var cwd = process.cwd();
var paquete = require(cwd+'/package.json');
var iaas = require("gitbook-start-iaas-ull-es-alex-moi");

//instalar dependencias globales y locales para gitbook,gitbook-cli,child-process

gulp.task('buildeploy', ['build', 'deploy']);

gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
});


gulp.task('deploy-heroku', function () {
  git.push('heroku', 'master', function (err) {
    if (err) throw err;
  });
});


gulp.task('wikibuild', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki'])); 
});

gulp.task('wikideploy', function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki'])); 
});



gulp.task('deploy-iaas', function () {
    //deploy de iaas
    var url = paquete.repository.url;
    var iaas_ip = paquete.iaas.IP;
    var iaas_path = paquete.iaas.PATH;
    
    
    console.log(url)
    console.log(iaas_ip)
    console.log(iaas_path)
    
    
    iaas.initialize();
    
    iaas.deploy(iaas_ip, iaas_path, url);
})

