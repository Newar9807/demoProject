<?php
add_action('the_content', 'my_rating_display');

function my_rating_display($content) {
    if (is_single() && in_the_loop()) {
        $post_id = get_the_ID();
        $rating = get_post_meta($post_id, 'my_rating', true);

        // Output the rating interface
        $output = '<div class="rating-container">';
        $output .= '<p>Rate this post:</p>';
        $output .= '<div class="star-rating" data-post-id="' . esc_attr($post_id) . '">';

        for ($i = 1; $i <= 5; $i++) {
            $output .= '<span class="star" data-rating="' . esc_attr($i) . '">★</span>';
        }

        $output .= '</div>';
        $output .= '</div>';

        return $content . $output;
    }

    return $content;
}
?>


