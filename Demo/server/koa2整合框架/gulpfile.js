var gulp = require('gulp');
minifyHtml = require('gulp-html-minify');
sass = require('gulp-sass');
minifyCss = require('gulp-minify-css');
uglify = require('gulp-uglify');

gulp.task('default', function() {

  gulp.src('src/views/**').pipe(minifyHtml()).pipe(gulp.dest('dist/views'));
  gulp.src('src/public/javascripts/**.js').pipe(uglify()).pipe(gulp.dest('dist/public/javascripts'));
  gulp.src('src/public/stylesheets/**.sass').pipe(sass()).pipe(minifyCss()).pipe(gulp.dest('dist/public/stylesheets'));
  gulp.src('src/public/lib/bootstrap/stylesheets/bootstrap.sass').pipe(sass()).pipe(minifyCss()).pipe(gulp.dest('dist/public/lib/bootstrap/stylesheets'));

});




gulp.task('image', function() {

  console.log('gulp image ok')

});