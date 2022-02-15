

module.exports = () =>
$.gulp.task('style', () =>
$.gulp.src($.path.src.style)
// .pipe($.gp.sass({outputStyle: 'expanded'}))
.pipe($.gulp.dest($.path.build.style))
.on('end', $.bs.reload)
)