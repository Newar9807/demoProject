<?php

// namespace review_plugin_admin;
// $a = 1;
class Admin
{
    // PROPERTIES //
    private $global_name_array, $css_path, $js_path, $name = "", $rating = "", $comment = "", $yesNo;

    // METHODS //
    public function __construct()
    {
        // this is constructor for admin
        $this->css_path = plugins_url('assets/css/style.css', __FILE__);
        $this->js_path = plugins_url('assets/js/script.js', __FILE__);

        $this->global_name_array = [
            'create_menu' => 'init',
            'load_style_and_script' => 'run_scripts',
            'meta_box' => 'add_meta_boxes',
            'call_meta_box_design' => 'the_content',
            'save_to_db' => 'save_post',
        ];

        foreach ($this->global_name_array as $key => $value) :
            add_action($value, [$this, $key]);
        endforeach;
    }

    // creates the menu option
    public function create_menu()
    {
        $labels = ['name' => __('OOP Reviews', 'oop-review'), 'singular_name' => __('OOP Review', 'oop-review')];
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

        if (isset($_POST['hidden_id'])) :
            extract($_POST);
            $post_title = sanitize_text_field($name);
            $post_content = sanitize_textarea_field($comment);
            $meta_value = [
                'name' => $name,
                'rating' => $rating,
                'comment' => $comment,
            ];

            $post_id = wp_insert_post([
                'post_title' => $post_title,
                'post_content' => $post_content,
                'post_type' => 'samir_reviews',
                'post_status' => 'publish',
            ]);
            if ($post_id) {
                // Post created successfully, now save post meta
                update_post_meta($post_id, 'oop_review', $meta_value);
            }

            // Redirect or display a message as needed
            wp_redirect(home_url());
            exit;
        endif;
    }

    // Saves data to database
    public function save_to_db(int $post_id)
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

    // loads needed scripts and style
    public function load_style_and_script()
    {
        wp_enqueue_style('my-css', $this->css_path, false, '1.0');
        // wp_enqueue_script('my-js', $this->js_path, false, '1.0');
    }

    // adds meta box in post 
    public function meta_box()
    {
        $menu_title = '<h2>Review Meta Box</h2>';
        add_meta_box('meta_id', $menu_title, [$this, 'call_meta_box_design'], ['samir_reviews', 'post'], 'normal', 'high');
    }

    // call the private meta box design
    public function call_meta_box_design($arg)
    {
        $this->meta_box_design($arg);
    }
    // creates the meta box as private
    private function meta_box_design($post)
    {
        if ($post) :
            $value = get_post_meta($post->ID, 'meta_key', true);
            $this->yesNo = get_post_meta($post->ID, 'yesNo', true);
            if (is_array($value)) :
                $this->name = $value['name'];
                $this->rating = $value['rating'];
                $this->comment = $value['comment'];
            endif;

            $header_template = plugin_dir_path(__FILE__) . 'samir-review-templates/header.php';
            $footer_template = plugin_dir_path(__FILE__) . 'samir-review-templates/footer.php';
            $for_post_template = plugin_dir_path(__FILE__) . 'samir-review-templates/for_post.php';
            $for_review_template = plugin_dir_path(__FILE__) . 'samir-review-templates/for_review.php';
            if (file_exists($header_template) && file_exists($footer_template) && file_exists($for_post_template) && file_exists($for_review_template)) :
                if ($post->post_type == 'post') :
                    require_once 'samir-review-templates/for_post.php';
                else :
                    require_once 'samir-review-templates/for_review.php';
                endif;
                do_action('run_scripts');
            endif;

        else :
            $this->yesNo = get_post_meta(get_the_ID(), 'yesNo', true);
            if ($this->yesNo == 'yes') require_once 'samir-review-templates/for_review.php';
        endif;
    }
}
