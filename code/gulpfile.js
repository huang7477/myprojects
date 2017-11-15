




			

		/*
			//one任务
			var gulp = require("gulp");
			gulp.task("one",function(){
				console.log("one任务");
				//异步操作会后执行
				setTimeout(function(){
					console.log("延时1秒后执行");
				},1000)
			});
			
			//two任务
			gulp.task("two",function(){
				console.log("two任务");
			});
			
			//three任务
			//依赖one任务和two任务
			gulp.task("three",["one","two"],function(){
				console.log("three任务");
			});
			
			//default 默认任务
			gulp.task("default",["one","two"]);
		*/
		
		
		
	
		
		//使用插件
		//压缩html：gulp-htmlmin
		var gulp = require("gulp");//导入gulp
		var htmlmin = require("gulp-htmlmin");//html导入gulp插件
		var uglify = require('gulp-uglify');//js
		var babel = require('gulp-babel'); 
		var minifyCss = require('gulp-minify-css');
		
		
		//htmlmin插件的参数对象
		var obj = {
			removeComments: true, //清除HTML注释
			collapseWhitespace: true, //压缩HTML
			collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
			removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
			removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
			removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
			minifyJS: true, //压缩页面JS
			minifyCSS: true //压缩页面CSS
		}
		
		
		
		
		
		//html任务
		gulp.task("htmlTask",function(){
			gulp.src("src/*.html")
				.pipe(htmlmin(obj))//使用插件
				.pipe( gulp.dest("dest") );
		})
		gulp.task("default",["htmlTask"])
		
	/*	
		//css任务
		gulp.task("cssTask",function(){
			gulp.src("src/css/dafeiji.css")
				.pipe(minifyCss())//使用插件
				.pipe( gulp.dest("dest/css") );
		})
		//默认任务
		gulp.task("default",["cssTask"]);*/
		
		/*
  		//JS任务
		gulp.task("jsTask",function(){
			gulp.src("src/js/*.js")
				.pipe(babel({"presets": ["es2015"]})) //es6转es5
				.pipe(uglify())//使用插件
				.pipe( gulp.dest("dest/js") );
		})

		
		
		
		//默认任务
		gulp.task("default",["jsTask"]);*/

