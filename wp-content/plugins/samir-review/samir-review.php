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

const oop_review_file = __FILE__;

const oop_review_directory = __DIR__;

require_once oop_review_directory . '/includes/Plugin.php';

use nmspc\plugin\Plugin as admin;

$oop_review_plugin_instance = new admin();