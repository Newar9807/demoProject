<?php

/**
 * Plugin Name: Samir Reviews
 * Plugin URI: https://thisispluginuri
 * Description: This is description for review plugin
 * Version: 1.0
 * Author: Samir Shrestha
 * Author URI: https://thisisauthoruri
 * Text Domain: samir-reviews
 */

if (!defined('ABSPATH')) :
    header('Location: /');
    die;
endif;

$css_path = plugins_url('assets/css/style.css', __FILE__);
$js_path = plugins_url('assets/js/script.js', __FILE__);
$prefix = 'samir_review_';

$global_name_array = ['create_menu', 'load_style_and_script', 'meta_box_design', 'meta_box', 'save_to_db', 'display_meta_data'];

// Generates the variables with names same as values in global_name_array
foreach ($global_name_array as $val) {
    $val = $prefix . $val;
    $$val = $val;
}

add_action('init', $samir_review_create_menu);

// Creates the menu option
function samir_review_create_menu()
{
    $labels = ['name' => __('Review Plugins', 'samir-reviews'), 'singular_name' => __('Review Plugin', 'samir-reviews')];
    $icon_path = plugins_url('assets/images/star.png', __FILE__);
    register_post_type(
        'samir_reviews',
        [
            'labels' => $labels,
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => false,
            'menu_icon' => $icon_path,
        ]
    );
}

// Loads needed scripts and style
function samir_review_load_style_and_script()
{
    global $css_path, $js_path;
    wp_enqueue_style('my-css', $css_path, false, '1.0');
    wp_enqueue_script('my-js', $js_path, false, '1.0');
}


// Creates the meta box
function samir_review_meta_box_design($post)
{
    $value = get_post_meta($post->ID, 'meta_key', true);
    $yesNo = get_post_meta($post->ID, 'yesNo', true);
    $name = "";
    $rating = "";
    $comment = "";
    if (is_array($value)) :
        $name = $value['name'];
        $rating = $value['rating'];
        $comment = $value['comment'];
    endif;

    include 'common/topContainer.php';
?>
    <?php if ($post->post_type == 'post') : ?>
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
    <?php else : ?>
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
    <?php endif; ?>
    <!-- <button type="button" onclick="submitReview()">Submit Review</button> -->


    <?php
    include 'common/bottomContainer.php';
}

add_action('add_meta_boxes', $samir_review_meta_box);

function samir_review_meta_box()
{
    $menu_title = '<h2>Review Meta Box</h2>';
    add_meta_box('meta_id', $menu_title, 'samir_review_meta_box_design', ['samir_reviews', 'post']);
}


add_action('save_post', $samir_review_save_to_db);

// Saves data to database
function samir_review_save_to_db(int $post_id)
{
    if (array_key_exists('name', $_POST) && array_key_exists('rating', $_POST) && array_key_exists('comment', $_POST)) :
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
    elseif (array_key_exists('yesNo', $_POST)) :
        update_post_meta(
            $post_id,
            'yesNo',
            $_POST['yesNo']
        );
    endif;
}

add_action('the_content', $samir_review_display_meta_data);

function samir_review_display_meta_data()
{
    $yesNo = get_post_meta(get_the_ID(), 'yesNo', true);

    if ($yesNo == 'yes') :
    ?>
        <div class="main_container">
            <?php include 'common/topContainer.php'; ?>
            <label for="name">Name:</label>
            <input type="text" id="name" class="input" name="name" autocomplete="off" required>
            <input type="hidden" id="hidden_id" class="input" name="hidden_id" value="<?= get_the_ID(); ?>">

            <label for="rating">Rating:</label>
            <select id="rating" name="rating" required>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
            </select>

            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="4" autocomplete="off"></textarea>

            <button type="submit">Submit Review</button>
            <?php include 'common/bottomContainer.php'; ?>
        </div>
<?php
    endif;
    samir_review_load_style_and_script();
}

if (isset($_POST['hidden_id'])) :
    samir_review_save_to_post_db($_POST['hidden_id']);
    unset($_POST['hidden_id']);
endif;

function samir_review_save_to_post_db()
{
    // Extacts the key of $_POST super-variable with values
    extract($_POST);

    global $wpdb;

    // Custom SQL query to get the last post ID from the wp_posts table
    $query = "SELECT ID FROM `{$wpdb->posts}` ORDER BY ID DESC LIMIT 1";
    $target_post_id = ($wpdb->get_var($query)) + 1;


    // Checking if the post with the given ID exists
    if (get_post($target_post_id)) {
        $post_data = [
            'ID'           => $target_post_id,
            'post_title'   => $name,
            'post_content' => $comment,
            'post_type'    => 'samir_reviews',
        ];
        $updated_post_id = wp_update_post($post_data);

        if (!is_wp_error($updated_post_id)) {
            echo "Post updated successfully. Updated Post ID: $updated_post_id";
        } else {
            echo "Failed to update post.";
            die;
        }
    } else {
        $post_data = [
            'ID' => $target_post_id + 1,
            'post_title'   => $name,
            'post_content' => $comment,
            'post_type'    => 'samir_reviews',
        ];
        $new_post_id = wp_insert_post($post_data);

        if (!is_wp_error($new_post_id)) {
            echo "New post created successfully. Post ID: $new_post_id";
        } else {
            echo "Failed to create new post.";
            die;
        }
    }

    $data = [
        'name' => $name,
        'rating' => $rating,
        'comment' => $comment,
    ];
    update_post_meta(
        $target_post_id,
        'meta_key',
        $data
    );
    $sam = 1;
}


//=>
// add_action('wp_enqueue_scripts', 'my_rating_enqueue_scripts_styles');

// function my_rating_enqueue_scripts_styles()
// {
//     wp_enqueue_script('my-rating-script', plugins_url('my-rating-plugin.js', __FILE__), array('jquery'), '1.0', true);

//     // Pass the AJAX URL to script.js
//     wp_localize_script('my-rating-script', 'myRatingAjax', array('ajaxurl' => plugins_url('dbStore/post.php', __FILE__)));

//     wp_enqueue_style('my-rating-style', plugins_url('my-rating-plugin.css', __FILE__));
// }


// add_action('wp_ajax_my_rating_submit', 'my_rating_submit_callback');

// function my_rating_submit_callback()
// {
//     $post_id = $_POST['post_id'];
//     $rating = $_POST['rating'];

//     // Save the rating to post meta
//     update_post_meta($post_id, 'my_rating', $rating);

//     wp_die(); // Always include this at the end of your callback
// }

// add_action('the_content', 'my_rating_display');

// function my_rating_display($content)
// {
//     if (is_single() && in_the_loop()) {
//         $post_id = get_the_ID();
//         $rating = get_post_meta($post_id, 'my_rating', true);

//         // Output the rating interface
//         $output = '<div class="rating-container">';
//         $output .= '<p>Rate this post:</p>';
//         $output .= '<div class="star-rating" data-post-id="' . esc_attr($post_id) . '">';

//         for ($i = 1; $i <= 5; $i++) {
//             $output .= '<span class="star" data-rating="' . esc_attr($i) . '">★</span>';
//         }

//         $output .= '</div>';
//         $output .= '</div>';

//         return $content . $output;
//     }

//     return $content;
// }
