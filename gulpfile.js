var gulp = require('gulp');
var less = require('gulp-less');
var uglifycss = require('gulp-uglifycss');
//var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
//var concat = require('gulp-concat');
//var uglyfly = require('gulp-uglyfly');
//var imagemin = require('gulp-imagemin');
////var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
//var concatCss = require('gulp-concat-css');
//1. less -> css   编译   "合并"  压缩
gulp.task('style', function() {
	gulp.src('css/*.less')
		.pipe(less())
//		.pipe(csscomb())
		.pipe(autoprefixer({
			browsers:[
				'Android 2.3',
				'Android >=4',
				'Chrome >=20',
				'Firefox >=24',
				'Explorer >=8',
				'iOS >=6',
				'Opera >=12',
				'Safari >=6'
			],
			cascade:false
		}))
//		.pipe(uglifycss())
		.pipe(gulp.dest('css'));
});
//热更新
var reload=browserSync.reload;
gulp.task('server',function(){
	gulp.watch('css/*.less',['style']).on('change',reload);
});
