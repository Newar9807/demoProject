<?php

namespace samir_review;

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
     * Name of user.
     * 
     * @var string
     * 
     */
    private $name = "";
    
    /**
     * Rating given by user.
     * 
     * @var string
     * 
     */
    private $rating = "";
    
    /**
     * Comment of user.
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
    private $yesNo = "no";

    /**
     * Constructor.
     * 
     * @since 1.0
     *  
     * */
    public function __construct()
    {
        // this is constructor for admin
        $this->css_path = plugins_url('assets/css/style.css', \oop_review_file);
        $this->js_path = plugins_url('assets/js/script.js', \oop_review_file);

        // callable function is $key and hook is $value as it could be used multiple times
        $this->global_name_array = [
            'create_menu'           => 'init',
            'meta_box'              => 'add_meta_boxes',
            'call_meta_box_design'  => 'the_content',
            'save_to_db'            => 'save_post',
            'load_style_and_script' => 'wp_enqueue_scripts',
        ];

        foreach ($this->global_name_array as $key => $value) :
            add_action($value, [$this, $key]);
        endforeach;
    }

    /**
     * Creates the menu option and handles post method after submission.
     * 
     * @since 1.0
     * 
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
                // Post created successfully, now save post meta
                update_post_meta($post_id, 'oop_review', $meta_value);
            }

            // Redirect or display a message as needed
            wp_redirect(home_url());
            exit;
        endif;
    }

    /**
     * Saves data to postmeta table of database.
     * 
     * @since 1.0
     * 
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
     * 
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
     * 
     */
    public function meta_box()
    {
        $menu_title = '<h2>Review Meta Box</h2>';
        add_meta_box('meta_id', $menu_title, [$this, 'call_meta_box_design'], ['samir_reviews', 'post'], 'normal', 'high');
    }

    /**
     * Calls the private meta box design.
     * 
     * @since 1.0
     * 
     */
    public function call_meta_box_design($arg)
    {
        $this->meta_box_design($arg);
    }
    
    /**
     * Creates the meta box.
     * 
     * @since 1.0
     * 
     */
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

            $header_template = dirname(oop_review_file) . '/includes/Public/header.php';
            $footer_template = dirname(oop_review_file) . '/includes/Public/footer.php';
            $for_post_template = dirname(oop_review_file) . '/includes/Public/for_post.php';
            $for_review_template = dirname(oop_review_file) . '/includes/Public/for_review.php';
            if (file_exists($header_template) && file_exists($footer_template) && file_exists($for_post_template) && file_exists($for_review_template)) :
                if ($post->post_type == 'post') :
                    require_once dirname(oop_review_file) . '/includes/Public/for_post.php';
                else :
                    require_once dirname(oop_review_file) . '/includes/Public/for_review.php';
                endif;
            endif;
        else :
            $this->yesNo = get_post_meta(get_the_ID(), 'yesNo', true);
            if ($this->yesNo == 'yes') :
                require_once dirname(oop_review_file) . '/includes/Public/for_review.php';
                require_once dirname(oop_review_file) . '/includes/Public/load_reviews.php';
            endif;
        endif;
    }
}
