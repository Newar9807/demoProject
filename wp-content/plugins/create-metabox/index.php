<?php

/**
 * Plugin Name: Custom Meta Box
 * Description: Create Custom Meta Box
 * Version: 1.0
 * Author: Samir Shrestha
 * Author URI: https://authoruri
 * Text Domain: create-meta-box
 */


function create_post_type()
{
    register_post_type(
        'wporg_product',
        array(
            'labels' => array(
                'name' => __('Movies', 'create-meta-box'),
                'singular_name' => __('Movie', 'create-meta-box'),
            ),
            'public' => true,
            'has_archive' => true,
            // 'rewrite' => array('slug' => 'movie'),
        )
    );
}
add_action('admin_menu', 'create_post_type', 10);


// function create_menu() {
//     add_menu_page(
//         'WPOrg',
//         'WPOrg Options',
//         'manage_options',
//         'wporg',
//         'wporg_options_page_html',
//         plugin_dir_url(__FILE__) . 'images/icon1.png',
//         20
//     );

//     add_submenu_page(
// 		'tools.php',
// 		'WPOrg Options',
// 		'WPOrg Options',
// 		'manage_options',
// 		'wporg',
// 		'wporg_options_page_html'
// 	);
// }
// add_action('admin_menu', 'create_menu', 11);

// function custom_post_meta_box_callback()
// {
//     echo "This is custom post meta box";
// }
// function custom_page_meta_box_callback()
// {
//     echo "This is custom page meta box";
// }
// function my_custom_meta_box()
// {
//     add_meta_box('meta_post_id', 'Custom Post Meta Box', 'custom_post_meta_box_callback', 'post', 'side', 'high');
//     add_meta_box('meta_post_id', 'Custom Page Meta Box', 'custom_page_meta_box_callback', 'post', 'normal', 'high');
// }

// add_action('add_meta_boxes', 'my_custom_meta_box');
