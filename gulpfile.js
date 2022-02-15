global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),
        src:{
            html: './app/src/*.html',
            style: './app/src/styles/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/**/*.html'],
            style: './app/src/styles/**/*.*'
        }
    },
    tasks: {
        default: ['html', 'style', 'watch', 'serve'],
        build: ['html', 'style']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)());

for(const val in $.tasks) {
    $.gulp.task(val, $.gulp.series($.gulp.parallel(...$.tasks[val])))
}