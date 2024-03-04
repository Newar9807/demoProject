<?php

/**
 * Plugin Name: Review Plugin
 * Plugin URI: https://thisispluginuri
 * Description: This is description for review plugin
 * Version: 1.0
 * Author: Samir Shrestha
 * Author URI: https://thisisauthoruri
 * Text Domain: review-plugin
 */

if (!defined('ABSPATH')) {
    header('Location: /');
    die;
}

$css_path = plugins_url('assets/css/style.css', __FILE__);
$js_path = plugins_url('assets/js/script.js', __FILE__);

// Creates the menu option
function create_menu()
{
    $labels = ['name' => __('Review Plugins', 'review-plugin'), 'singular_name' => __('Review Plugin', 'review-plugin')];
    $icon_path = plugins_url('assets/images/star.png', __FILE__);
    register_post_type(
        'menu_id',
        [
            'labels' => $labels,
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => false,
            'menu_icon' => $icon_path,
        ]
    );
}

add_action('init', 'load_style_and_script');

// Loads needed scripts and style
function load_style_and_script()
{
    global $css_path, $js_path;
    wp_enqueue_style('my-css', $css_path, false, '1.0');
    wp_enqueue_script('my-js', $js_path, false, '1.0');
    create_menu();
}

function load_script()
{
    global $js_path;
    wp_register_script('myfirstscript', $js_path, array('jquery', 'jquery-ui'), false, false);
    wp_enqueue_script('myfirstscript');
}

// Creates the meta box
function meta_box_design($post)
{
    $value = get_post_meta($post->ID, 'meta_key', true);
    $yesNo = get_post_meta($post->ID, 'yesNo', true);
    $name = "";
    $rating = "";
    $comment = "";
    if (is_array($value)) {
        $name = $value['name'];
        $rating = $value['rating'];
        $comment = $value['comment'];
    }

    include 'common/topContainer.php';
?>
    <?php if ($post->post_type == 'post') { ?>
        <h1>Review Plugin</h1>
        <div class="forPost">
            <label for="radioButton" class="radioButtonTitle">Enable: </label>
            <label>
                <input type="radio" name="yesNo" value="yes" <?php echo ($yesNo === "yes" || $yesNo === "") ? "checked" : ""; ?>>
                Yes
            </label>
            <label>
                <input type="radio" name="yesNo" value="no" <?php echo ($yesNo === "no") ? "checked" : ""; ?>>
                No
            </label>
        </div>
    <?php } else { ?>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<?= $name ?>" required>

        <label for="rating">Rating:</label>
        <select id="rating" name="rating" required>
            <option value="5" <?php selected($rating, '5'); ?>>5 - Excellent</option>
            <option value="4" <?php selected($rating, '4'); ?>>4 - Very Good</option>
            <option value="3" <?php selected($rating, '3'); ?>>3 - Good</option>
            <option value="2" <?php selected($rating, '2'); ?>>2 - Fair</option>
            <option value="1" <?php selected($rating, '1'); ?>>1 - Poor</option>
        </select>

        <label for="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" required><?= $comment ?></textarea>
    <?php } ?>
    <!-- <button type="button" onclick="submitReview()">Submit Review</button> -->


    <?php
    include 'common/bottomContainer.php';
}

function meta_box()
{
    $menu_title = '<h2>Review Meta Box</h2>';
    add_meta_box('meta_id', $menu_title, 'meta_box_design', ['menu_id', 'post']);
}

add_action('add_meta_boxes', 'meta_box');

// Saves data to database
function save_from_meta(int $post_id)
{
    if (array_key_exists('name', $_POST) && array_key_exists('rating', $_POST) && array_key_exists('comment', $_POST)) {
        $data = [
            'name' => $_POST['name'],
            'rating' => $_POST['rating'],
            'comment' => $_POST['comment'],
        ];
        update_post_meta(
            $post_id,
            'meta_key',
            $data
        );
    } elseif (array_key_exists('yesNo', $_POST)) {
        update_post_meta(
            $post_id,
            'yesNo',
            $_POST['yesNo']
        );
    }
}

add_action('save_post', 'save_from_meta');

function display_meta_data()
{
    // $inline_script = `$(document).ready(function () {
    //     function submitReview() {
    //         alert('Review submitted successfully!');
    //         var name = $('#name').val();
    //         var rating = $('#rating').val();
    //         var comment = $('#comment').val();

    //         // Validate the form
    //         if (name.trim() === '' || comment.trim() === '') {
    //             alert('Name and Comment are required fields. Please fill them out.');
    //             return;
    //         }

    //         // Prepare the data for submission
    //         var formData = {
    //             name: name,
    //             rating: rating,
    //             comment: comment
    //         };

    //         // Assuming you want to send the data to a server using AJAX
    //         $.ajax({
    //             type: 'POST',
    //             // url: 'dbStore/post.php',
    //             url: 'post.php',
    //             data: JSON.stringify(formData),
    //             contentType: 'application/json',
    //             success: function () {
    //                 // Successful submission
    //                 alert('Review submitted successfully!');
    //                 // You can also reset the form if needed
    //                 $('#name').val('');
    //                 $('#rating').val('5');
    //                 $('#comment').val('');
    //             },
    //             error: function () {
    //                 // Failed submission
    //                 alert('Failed to submit review. Please try again later.');
    //             }
    //         });
    //     }

    //     // Bind the submitReview function to the button click event
    //     $('#submitBtn').on('click', submitReview);
    // });`;
    // wp_enqueue_script('custom-handler', 'https://code.jquery.com/jquery-3.6.4.min.js');
    // wp_add_inline_script('custom-handler', $inline_script, false, 2.0);

    $yesNo = get_post_meta(get_the_ID(), 'yesNo', true);

    if ($yesNo == 'yes') :
    ?>
        <div class="main_container">
            <?php include 'common/topContainer.php'; ?>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <input type="hidden" id="hidden_id" name="hidden_id" value="<?= get_the_ID(); ?>">

            <label for="rating">Rating:</label>
            <select id="rating" name="rating" required>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
            </select>

            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="4"></textarea>

            <button type="submit">Submit Review</button>
            <?php include 'common/bottomContainer.php'; ?>
        </div>
<?php
    endif;
    load_style_and_script();
}

add_action('the_content', 'display_meta_data');
