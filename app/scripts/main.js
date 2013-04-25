require.config({
  paths: {
    jquery: '../vendor/jquery/jquery',
    bootstrap: 'vendor/bootstrap/bootstrap',
    cs: 'cs',
    CoffeeScript: 'coffee-script'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['cs!app'], function (App) {
  'use strict';
  console.log("App:", App);

  // Start Your App Here ...
});
