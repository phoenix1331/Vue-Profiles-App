//Require plugins
var elixir = require('laravel-elixir');
    require('laravel-elixir-vueify');

elixir(function (mix) {

   //Move node modules to plugins folder
	mix.copy('node_modules/bootstrap/scss/', 'resources/assets/plugins/bootstrap/scss/');
	mix.copy('node_modules/bootstrap/dist/js/bootstrap.js', 'resources/assets/plugins/bootstrap/js/bootstrap.js');
	mix.copy('node_modules/jquery/dist/jquery.js', 'resources/assets/plugins/jquery/jquery.js');
	mix.copy('node_modules/tether/dist/js/tether.js', 'resources/assets/plugins/tether/tether.js');

    // Bundle up required plugin scripts
    mix.scripts([
        // ** Required Plugins **
        'jquery/jquery.js',
        'tether/tether.js',
        'bootstrap/js/bootstrap.js',

    ],'assets/js/plugins.js','./resources/assets/plugins');


    // Browserify app
    mix.browserify('../js/app.js', 'assets/js/app.js');


    //SCSS = CSS
    mix.sass('../sass/styles.scss', 'assets/css/styles.css');
});
