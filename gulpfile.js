var gulp  = require('gulp');
var shell = require('gulp-shell');
var git = require('gulp-git');
var fs = require('fs');
var gulp = require('gulp')
var GulpSSH = require('gulp-ssh');
var cwd = process.cwd();
var paquete = require(cwd+'/package.json');
var iaas = require("gitbook-start-iaas-ull-es-alex-moi");




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




//deploy de iaas
var url = paquete.repository.url;
var iaas_ip = paquete.iaas.IP;
var iaas_path = paquete.iaas.PATH;

console.log(url)
console.log(iaas_ip)
console.log(iaas_path)

//falta los ficheros fuente que hay q subir al iaas

gulp.task('deploy-iaas', function () {
    iaas(iaas_ip, iaas_path);
})
