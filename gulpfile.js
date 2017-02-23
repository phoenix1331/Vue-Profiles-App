//Require plugins
var elixir = require('laravel-elixir');
    require('laravel-elixir-vueify');

elixir(function (mix) {

    // Bundle up required plugin scripts
    mix.scripts([
        // ** Required Plugins **
        'jquery/jquery.js',

    ],'assets/js/plugins.js','./resources/assets/plugins');


    // Browserify app
    mix.browserify('resources/assests/js/app.js', 'assets/js/app.js');


    //SCSS = CSS
    mix.sass('resources/assets/css/styles.scss', 'assets/css/styles.css');
});
