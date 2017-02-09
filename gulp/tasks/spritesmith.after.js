'use  strict';

module.exports = function() {
  $.gulp.task('sprite:img-after', function() {
    return $.gulp.src('./source/sprite/{*.png, *.jpg, *.jpeg}')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: '../css/sprite.css',
        padding: 5,
        algorithm: 'binary-tree'
      }))
      .pipe($.gulp.dest($.config.root + '/assets/img'))
  });
};