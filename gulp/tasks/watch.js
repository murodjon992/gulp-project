module.exports = () => 
$.gulp.task('watch', () => {
for (key in $.path.watch) {
    const pathWatch = $.path.watch[key]
    $.gulp.watch(pathWatch, $.gulp.series([key]))
}
})