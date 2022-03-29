global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),
        src:{
            html: './app/src/*.{html,pug}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.js',
            img: './app/src/img/*.{jpg,jfif,png,gif,jpeg}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles',
            js: './app/build/script/',
            img: './app/build/img/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html: ['./app/src/*.{html,pug}', './app/src/view/**/*.{html,pug}'],
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.js',
            img: './app/src/img/**/*.{jpg,jfif,jpeg,gif,png}',
            fonts: './app/src/fonts/**/**/*.*'
        }
    },
    tasks: {
        default: ['html', 'js', 'img', 'fonts', 'style', 'watch', 'serve'],
        build: ['html', 'js', 'img', 'fonts', 'style']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)());

for(const val in $.tasks) {
    $.gulp.task(val, $.gulp.series($.gulp.parallel(...$.tasks[val])))
}