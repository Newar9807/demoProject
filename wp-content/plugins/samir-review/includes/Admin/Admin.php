<?php

/**
 * This is Admin class
 * 
 * @since 1.0
 * 
 */

namespace nmspc\admin;

class Admin
{
    /**
     * Global name array.
     * 
     * @var array
     * @access
     */
    private $global_name_array;

    /**
     * Path of css file.
     * 
     * @var string
     * 
     */
    private $css_path;

    /**
     * Path of js file.
     * 
     * @var string
     * 
     */
    private $js_path;

    /**
     * Stores name of user.
     * 
     * @var string
     * 
     */
    private $name = "";

    /**
     * Stores rating given by user.
     * 
     * @var string
     * 
     */
    private $rating = "";

    /**
     * Stores comment of user.
     * 
     * @var string
     * 
     */
    private $comment = "";

    /**
     * Trigger review block.
     * 
     * @var string
     * 
     */
    public $yesNo = "no";

    /**
     * Constructor where the path of css and js is stored.
     * 
     * @since 1.0
     * @return void
     * */
    public function __construct()
    {
        $this->css_path = plugins_url('assets/css/style.css', \oop_review_file);
        $this->js_path = plugins_url('assets/js/script.js', \oop_review_file);

        add_action('init', [$this, 'create_menu']);
        add_action('run_style', [$this, 'load_style_and_script']);
    }

    /**
     * Creates the menu option and handles post method after submission
     * after which it is redirected to home.
     * 
     * @since 1.0
     * @return void
     */
    public function create_menu()
    {
        $labels = ['name' => __('OOP Reviews', 'oop-review'), 'singular_name' => __('OOP Review', 'oop-review')];
        $icon_path = plugins_url('assets/images/star.png', \oop_review_file);
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
                update_post_meta($post_id, 'oop_review', $meta_value);
            }

            wp_redirect(home_url());
            exit;
        endif;
    }

    /**
     * Saves data to postmeta table of database.
     * 
     * @since 1.0
     * @return void
     */
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

    /**
     * Loads user scripts and style.
     * 
     * @since 1.0
     * @return void
     */
    public function load_style_and_script()
    {
        wp_enqueue_style('my-css', $this->css_path, false, '1.0');
        // wp_enqueue_script('my-js', $this->js_path, false, '1.0');
    }

    /**
     * Adds meta box in post.
     * 
     * @since 1.0
     * @return void
     */
    public function meta_box()
    {
        $menu_title = '<h2>Review Meta Box</h2>';
        add_meta_box('meta_id', $menu_title, [$this, 'meta_box_design_for_admin'], ['samir_reviews', 'post'], 'normal', 'high');
        do_action('run_style');
    }

    /**
     * Creates the meta box for both admin and user (Private Method).
     * 
     * @since 1.0
     * @param $post Can be null or the information of the post.
     * @return void
     */
    public function meta_box_design_for_admin($post)
    {
        $value = get_post_meta($post->ID, 'meta_key', true);
        $this->yesNo = get_post_meta($post->ID, 'yesNo', true);
        if (is_array($value)) :
            $this->name = $value['name'];
            $this->rating = $value['rating'];
            $this->comment = $value['comment'];
        endif;
        if ($post->post_type == 'post') :
            require_once dirname(oop_review_file) . '/includes/Public/for_post.php';
        else :
            require_once dirname(oop_review_file) . '/includes/Public/for_review.php';
        endif;
    }

    /**
     * Creates the meta box for both admin and user (Private Method).
     * 
     * @since 1.0
     * @param $post Can be null or the information of the post.
     * @return void
     */
    public function meta_box_design_for_user()
    {
        require_once dirname(oop_review_file) . '/includes/Public/for_review.php';
        require_once dirname(oop_review_file) . '/includes/Public/load_reviews.php';
    }
}
