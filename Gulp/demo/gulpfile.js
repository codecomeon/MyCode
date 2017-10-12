var path=require('path');
var gulp=require('gulp');
// 服务器
var connect=require('gulp-connect');
// gulp-rename重命名
var rename=require('gulp-rename');
// sourceMaps资源图
var sourcemaps=require('gulp-sourcemaps');
// del删除
var del=require('del');
// gulp-concat合并
var concat=require('gulp-concat');

// html压缩
var htmlmin=require('gulp-htmlmin');

// gulp-autoprefixer兼容
var gulpAutoprefixer=require('gulp-autoprefixer');

// less
var less=require('gulp-less');
// less兼容性
var autoprefix=require('less-plugin-autoprefix');
autoprefix= new autoprefix({browsers:['last 10 versions']});
// less压缩 或者用 gulp-cssmin也可以的
var cleancss=require('less-plugin-clean-css');
cleancss=new cleancss({advanced:true});
var cssmin=require('gulp-cssmin');
// sass
var sass=require('gulp-sass');
// stylus
var stylus=require('gulp-stylus');

gulp.task('default',['begin','init','watch','server'],function(){
    console.log('服务正常运转中~');
});

gulp.task('begin',()=>console.log('开始流程'));

// 初始化
gulp.task('init',['del','html','less','sass','stylus','concat-css']);
gulp.task('del',()=>del(['./public/*']));

gulp.task('html',()=>gulp.src('./src/*.html')
                .pipe(htmlmin({
                    collapseWhitespace:true
                }))
                .pipe(gulp.dest('./public'))
                .pipe(connect.reload())
);
gulp.task('less',()=>gulp.src('./src/less/*.less')
                .pipe(sourcemaps.init())
                .pipe(less({plugins:[autoprefix,cleancss]}))
                // .pipe(rename({suffix:'.min'}))
                .pipe(concat("less.min.css"))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./public/styles'))
);
gulp.task('sass',()=>{
    'use strict';
    return gulp.src('./src/sass/*.scss')
                .pipe(sourcemaps.init())
                .pipe(sass().on('error',sass.logError))
                .pipe(gulpAutoprefixer({browsers:['last 10 versions']}))
                .pipe(cssmin())
                .pipe(rename({suffix:'.min'}))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./public/styles'));
});
gulp.task('stylus',()=>gulp.src('./src/stylus/stylus.styl')
                            .pipe(sourcemaps.init())
                            .pipe(stylus())
                            .pipe(gulpAutoprefixer({browsers:['last 10 versions']}))
                            .pipe(cssmin())
                            .pipe(rename({suffix:'.min'}))
                            .pipe(sourcemaps.write())
                            .pipe(gulp.dest('./public/styles'))
);
gulp.task('concat-css',()=>gulp.src('./public/styles/*.css')
                                .pipe(sourcemaps.init())
                                .pipe(concat('all.min.css'))
                                .pipe(cssmin())
                                .pipe(sourcemaps.write())
                                .pipe(gulp.dest('./public/styles'))
);

// 添加监听
gulp.task('watch',['watch-html','watch-less','watch-sass','watch-stylus','watch-js'],()=>{console.log('所有监听均开始~');
   return gulp.watch('./public/styles/*.css',['concat-css','html']);
});
gulp.task('watch-html',()=>gulp.watch('./src/*.html',['html']));
gulp.task('watch-less',()=>gulp.watch('./src/less/*.less',['less','concat-css','html']));
gulp.task('watch-sass',()=>gulp.watch('./src/sass/*.scss',['sass','concat-css','html']));
gulp.task('watch-stylus',()=>gulp.watch('./src/stylus/*.styl',['stylus','concat-css','html']));
gulp.task('watch-js',()=>console.log('这里还没有写'));

// 开启服务器
gulp.task('server',()=>{
    connect.server({
        root:'public',//default is the directory of gulpfile.js
        port:'8080',
        host:'localhost',
        name:'服务器',
        livereload:true,
        // middleware:function(connect,opt){ return console.log(connect,opt); },
        debug:false,
        index:true
    });
});