<?php
/*
Plugin Name: Test Rating Plugin
Description: A custom rating system for WordPress posts.
Version: 1.0
Author: Name
Text Domain: new-review-plugin
*/

if (!defined('ABSPATH')) {
    header('Location: /');
    die;
}

add_action('wp_enqueue_scripts', 'my_rating_enqueue_scripts');

function my_rating_enqueue_scripts() {
    wp_enqueue_script('my-rating-script', plugins_url('my-rating-plugin.js', __FILE__), array('jquery'), '1.0', true);

    // Pass the AJAX URL to script.js
    wp_localize_script('my-rating-script', 'myRatingAjax', array('ajaxurl' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'my_rating_enqueue_styles');

function my_rating_enqueue_styles() {
    wp_enqueue_style('my-rating-style', plugins_url('my-rating-plugin.css', __FILE__));
}

add_action('wp_ajax_my_rating_submit', 'my_rating_submit_callback');

function my_rating_submit_callback() {
    $post_id = $_POST['post_id'];
    $rating = $_POST['rating'];

    // Save the rating to post meta
    update_post_meta($post_id, 'my_rating', $rating);

    wp_die(); 
}

add_action('init', 'create_menu');

// Creates the menu option
function create_menu()
{
    $labels = ['name' => __('Reviewers', 'new-review-plugin'), 'singular_name' => __('Reviewer', 'new-review-plugin')];
    register_post_type(
        'menu_id',
        [
            'labels' => $labels,
            'public' => true,
            'has_archive' => true,
            // 'show_in_rest' => false,
            // 'menu_icon' => 'star.png',
        ]
    );
}



?>
