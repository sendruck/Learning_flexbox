var gulp = require('gulp'),
server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});



 gulp.task('default', ['webserver']);  
