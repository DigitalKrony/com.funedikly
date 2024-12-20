module.exports = {
  images: {
    src: ['./src/wp-content/**/*.png', './src/wp-content/**/*.jpg', './src/wp-content/**/*.jpeg'],
    dest: '/wp-content/'
  },
  txt: {
    src: ['./src/wp-content/**/*.txt', './src/wp-content/**/*.md'],
    dest: '/wp-content/'
  },
  statics: {
    src: ['./src/wp-content/**/*.css', './src/wp-content/**/*.js'],
    dest: '/wp-content/'
  }
};
