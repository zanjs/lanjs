

import gulp         from 'gulp';
import karma        from 'gulp-karma';
import header       from 'gulp-header';
import uglify       from 'gulp-uglify';
import plumber      from 'gulp-plumber';
import clean        from 'gulp-clean';
import rename       from 'gulp-rename';
import pkg          from './package.json';
import browserSync  from 'browser-sync';


const  reload  = browserSync.create().reload;

const paths = {
  output : 'dist/',
  scripts : [
    'src/lan.js'
  ],
  test: [
    'test/spec/**/*.js'
  ]
};

const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    `(c) ${new Date()} <%= pkg.author %> |`,
    ' <%= pkg.homepage %>',
  ' */',
  '\n'
].join('');

gulp.task('scripts', ['clean'], () => gulp.src(paths.scripts)
  .pipe(plumber())
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('dist/'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('dist/'))
  .pipe(reload({stream: true})));

gulp.task('lint', () => gulp.src(paths.scripts)
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish')));

gulp.task('clean', () => gulp.src(paths.output, { read: false })
  .pipe(plumber())
  .pipe(clean()));

gulp.task('test', () => gulp.src(paths.scripts.concat(paths.test))
  .pipe(plumber())
  .pipe(karma({ configFile: 'test/karma.conf.js' }))
  .on('error', err => { throw err; }));

gulp.task('watch', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./src/*.js', ['scripts']);
    gulp.watch('./*.html',['scripts']); 
});


gulp.task('default', [
  'clean',
  'scripts',
  'test',
  'watch'
]);
