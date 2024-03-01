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

function my_plugin_activation()
{
    // =================================================== //
    // This function is called when my-plugin is activated //
    // =================================================== //
    // echo ($wpbs.' '.$table_prefix);
    global $wpdb, $table_prefix;
    $wp_emp = $table_prefix . 'emp';
    $q = "CREATE TABLE IF NOT EXISTS `$wp_emp` (`ID` INT UNSIGNED NOT NULL,`name` VARCHAR(50) NOT NULL,`email` VARCHAR(100) NOT NULL,`status` TINYINT NOT NULL);";
    $wpdb->query($q);
    // $q = "INSERT INTO `wp_emp` (`id`, `name`, `email`, `status`) VALUES (1,'John Doe', 'johndoe@example.com', 1);";
    // $wpdb->query($q);
    $data = ['id' => 1, 'name' => 'Samir', 'email' => 'samir@gmail.com', 'status' => 0];
    $wpdb->insert($wp_emp, $data);
}
register_activation_hook(__FILE__, 'my_plugin_activation');

function my_plugin_deactivation()
{
    // ===================================================== //
    // This function is called when my-plugin is deactivated //
    // ===================================================== //
    global $wpdb, $table_prefix;
    $wp_emp = $table_prefix . 'emp';
    $q = "TRUNCATE TABLE `$wp_emp`;";
    $wpdb->query($q);
}
register_deactivation_hook(__FILE__, 'my_plugin_deactivation');

function short_code_function($atts)
{
    // ===================================== //
    // This function for short code function //
    // ===================================== //

    // => Change to lower case
    $atts = array_change_key_case((array)$atts, CASE_LOWER);
    // => Sets the defult value 
    $atts = shortcode_atts(array('msg' => 'This is default vaue', 'next' => 'This id next default value', 'type' => 'img'), $atts);
    include $atts['type'] . '.php';
    ob_start();
?>
    <h1>This is from Html</h1>
<?php
    $htm = ob_get_clean();
    return "Short code test : " . $atts['msg'] . " " . $atts['next'] . " Html :" . $htm;
}

add_shortcode('short-code', 'short_code_function');

function load_post_type($rec_data)
{
    register_post_type('reg_pst_typ', $rec_data);
}
add_action('post_hook', 'load_post_type');

add_action('before_my_name', function () {
    global $wpdb;
    echo 'Full Name: ';
    $result = $wpdb->get_var($wpdb->prepare("SELECT option_value FROM `wp_options` WHERE `option_name` = %s", 'full_name'));
    $data =
        [
            'labels'      => array(
                'name'          => __('Products', 'textdomain'),
                'singular_name' => __('Product', 'textdomain'),
            ),
            'public'      => true,
            'has_archive' => true,
        ];
    if ($result) {
        print_r($result);
        delete_option('full_name');
    } else {
        add_option('full_name', $data);
        // isset( get_option('full_name') );
    }
    // do_action('post_hook', $data);
});

add_filter('filter_my_name', function ($name) {
    return $name;
    // return 'Prakash Khadka';
});

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //
// Fires when all plugins load.[plugins_loaded]
add_action('plugins_loaded', function () {
    require 'hook.php';
});


// function custom_function() {
// require 'hook.php';
// }
// add_action('custom_hook', 'custom_function');

// do_action('custom_hook');




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //


// => Loads the plugin scripts before this custom script
// function my_custom_scripts()
// {
//     $path_js = plugins_url('js/main.js', __FILE__);
//     $dep = array('jquery');
//     // => Changes version dynamically (Not Working)
//     // $pre = plugin_dir_url(__FILE__) . 'js/main.js';
//     // $version = filemtime($pre);
//     $ver_js = '1.1.0';
//     $isLoggedIn = is_user_logged_in() ? 1 : 0 ;
//     // => Includes inline script
//     wp_add_inline_script('custom-handler', 'var is_login = '.$isLoggedIn.';', 'before');
//     wp_enqueue_script('custom-handler', $path_js, $dep, $ver_js, true);
        
//     $path_style = plugins_url('css/style.css', __FILE__);
//     $ver_style = '1.2.2';
//     wp_enqueue_style('custom-style', $path_style, '', $ver_style);
//     // wp_enqueue_style( $handle, $src, $deps, $ver, $media );
    

// }
// add_action('wp_enqueue_scripts', 'my_custom_scripts');
// => Makes available for admin too
// add_action('admin_enqueue_scripts', 'my_custom_scripts');
// add_action( $hook, $function_to_add, $priority, $accepted_args );