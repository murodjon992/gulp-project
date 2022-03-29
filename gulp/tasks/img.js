module.exports = () =>
$.gulp.task('img', () => 
    $.gulp.src($.path.src.img)
    .pipe($.gulp.dest($.path.build.img))
    .on('end', $.bs.reload)
)