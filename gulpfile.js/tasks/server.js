/**
 * @File:      server启动
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 18:30:57
 */
var gulp     = require('gulp');
gulp.task('server', function () {
    var app = require('lg-server');
    var static_dir = './dist/';
    app.createServer(static_dir);
});