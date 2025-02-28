module.exports = {
  js: {
    src: ['./src/wp-content/themes/**/*.js'],
    dest: '/wp-content/'
  },
  wp: {
    src: ['./src/**/plugins/**/*'],
    dest: '/wp-content/plugins/Moray-Blocks/blocks/'
  },
  ts: {
    src: ['./src/wp-content/themes/**/*.ts', './src/wp-content/themes/**/*.tsx'],
    dest: '/wp-content/'
  },
  scss: {
    src: ['./src/wp-content/**/*.scss'],
    dest: '/wp-content/'
  }
};
