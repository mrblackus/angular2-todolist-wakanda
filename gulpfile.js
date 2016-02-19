var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

var wakandaApp = {
  host: 'localhost',
  port: 8081
};

gulp.task('serve', function() {
  connect.server({
    root: ['.'],
    livereload: false,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 3000,
    middleware: function (connect, opt) {
      return [
        proxy('/rest', {
          target: 'http://' + wakandaApp.host + ':' + wakandaApp.port,
          ws: true
        })
      ];
    }
  });
});
