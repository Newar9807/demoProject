<?php

/**
 * Plugin Name: Register Post Plugin Test
 * Plugin URI: https://pluginuri
 * Description: This is description for plugin test
 * Version: 1.0
 * Author: Samir
 * Author URI: htts://authoruri
 * Text Domain: plugin-test-domain
 * 
 */

function register_post_type_function()
{
    $label_array = ['name' => __('TestPosts', 'plugin-test-domain'), 'singular_name' => __('TestPost', 'plugin-test-domain')];
    register_post_type(
        'post_slug',
        [
            'labels' => $label_array,
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => false
        ]
    );
}

add_action('init', 'register_post_type_function');

function meta_to_save()
{
    $plugin_data = get_plugin_data(__FILE__);
    $author_name = $plugin_data['Author'];
?>
    <h1>Author Name:</h1>
    <input type="text" value="<?= $author_name ?>" id="author_name">
    <h2>Plugin Description:</h2>
    <textarea name="text_area_name" id="plugin_description" cols="30" rows="10"></textarea>
<?php
}

// Add Meta Box
function add_meta_boxes_function()
{
    $screens = [ 'post_slug' ];
	foreach ( $screens as $screen ) {
		add_meta_box(
			'wporg_box_id',                 // Unique ID
			'Custom Meta Box Title',      // Box title
			'wporg_custom_box_html',  // Content callback, must be of type callable
			$screen                            // Post type
		);
	}
}

add_action('add_meta_boxes', 'add_meta_boxes_function');

function wporg_custom_box_html( $post ) {
	$value = get_post_meta( $post->ID, '_wporg_meta_key', true );
	?>
	<label for="wporg_field">Description for this field</label>
	<select name="wporg_field" id="wporg_field" class="postbox">
		<option value="">Select something...</option>
		<option value="something" <?php selected( $value, 'something' ); ?>>Something</option>
		<option value="else" <?php selected( $value, 'else' ); ?>>Else</option>
	</select>
	<?php
}


function wporg_save_postdata( $post_id ) {
	if ( array_key_exists( 'wporg_field', $_POST ) ) {
		update_post_meta(
			$post_id,
			'_wporg_meta_key',
			$_POST['wporg_field']
		);
	}
}
add_action( 'save_post', 'wporg_save_postdata' );

// Save Meta Box Data
// function save_my_metabox_data($post_id)
// {
//     $meta_value = $_POST['text_area_name'];
//     update_post_meta($post_id, 'save_meta', $meta_value);
// }

// add_action('save_post', 'save_my_metabox_data');

// $meta_value = get_post_meta(get_the_ID(), 'save_meta', true); 
// $a = $meta_value;
// function get_my_metabox_data(){
// }
