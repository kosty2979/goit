
module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'js/script.js',
      'tests/**/*.js'
    
    ]
  });

};