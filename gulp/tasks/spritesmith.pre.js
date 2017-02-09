'use  strict';

module.exports = function() {
  $.gulp.task('sprite:img-pre', function() {
    return $.gulp.src('./source/sprite/{*.png, *.jpg}')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: '../style/common/sprite.scss',
        padding: 5,
        algorithm: 'binary-tree',
        imgPath: '../../assets/img/sprite.png'
      }))
      .pipe($.gulp.dest('source/images'));
  });
};