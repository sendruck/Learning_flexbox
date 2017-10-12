var gulp = require('gulp'),
server = require('gulp-server-livereload'),
 notify = require('gulp-notify'),
jade = require('gulp-jade');


gulp.task('templates', function() {
 
  gulp.src('templ/nested-menu.jade')
    .pipe(jade({
      pretty: true   
    }))
    .pipe(gulp.dest('example-2'))
    .pipe(notify({ message: 'Your Jade file has been molded into HTML.' }))    
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'example-2/nested-menu.html',
      directoryListing: false,
      open: false
    }));
});

gulp.task('watch', function() {
  gulp.watch('*.jade', ['templates']);
  }); 



 gulp.task('default', ['templates', 'watch','webserver']);  
