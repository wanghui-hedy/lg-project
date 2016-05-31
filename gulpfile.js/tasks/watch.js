/**
 * @File:      开发时监听变化
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 21:18:29
 */
var gulp = require('gulp');
var path = require('path');
var watch = require('gulp-watch');

gulp.task('watch', function () {
    var html = path.join(__dirname, '../../src/**/*');
    watch(html, function () {
        gulp.start('build');
    });
});