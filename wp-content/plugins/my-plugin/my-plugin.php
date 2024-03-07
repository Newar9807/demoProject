<?php
/*
* Plugin Name: My Plugin
* Description: This is Test Plugin
* Version: 1.0
* Author: Samir
* Author URI: https://authoruri.com
*/

// ========================== //
// Direct echo is not allowed //
// ========================== //

// => This checks if the plugin is accessed from wordpress or not 
if (!defined('ABSPATH')) {
    header("Location: /");
    die('Plugin accessed by unauthorised person');
}

add_action('before_my_name', function () {
    echo 'Full Name: ';
});

add_filter('filter_my_name', function ($name) {
    return $name . ' Shrestha';
    // return 'Prakash Khadka';
});

add_action('after_my_name', function () {
    echo "<br>finish";
});
function FunctionName() {
    require 'hook.php';
}

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
// Fires when all plugins load.[plugins_loaded]
add_action('plugins_loaded', 'FunctionName');