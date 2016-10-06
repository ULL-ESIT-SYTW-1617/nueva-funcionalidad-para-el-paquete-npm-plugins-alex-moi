var gulp  = require('gulp');
var shell = require('gulp-shell');


gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook.ejs']));
});

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook.ejs"]));
});



/*gulp.task('prueba',function() {
   return gulp.src('').pipe(shell(['gitbook build `pwd` ./gh-pages'])); 
});
*/


gulp.task('wikibuild', function() {
   return gulp.src('').pipe(shell(['./scripts/generate-wiki.ejs'])); 
});

gulp.task('wikideploy', function() {
   return gulp.src('').pipe(shell(['./scripts/deploy-wiki.ejs'])); 
});