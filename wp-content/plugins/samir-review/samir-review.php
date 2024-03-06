<?php

/**
 * Plugin Name: Oop Reviews
 * Plugin URI: https://thisispluginuri
 * Description: This is description for review plugin
 * Version: 1.0
 * Author: Samir Shrestha
 * Author URI: https://thisisauthoruri
 * Text Domain: oop-review
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    header('Location: /');
    die;
}
$prefix = 'oop_review_';

// use review_plugin_admin\Admin;
require_once plugin_dir_path(__FILE__) . 'Admin.php';

// Creating an instance of the admin class
$oop_review_instance = new Admin();


