<?php

/**
 * This is main plugin file.
 * 
 * @since 2.0
 * 
 */

namespace nmspc\plugin;

require_once oop_review_directory . '/includes/Admin/Admin.php';

use nmspc\admin\Admin as admin;

/**
 * Main plugin class
 * 
 */
class Plugin
{
    /**
     * Protected admin class instance of admin
     * 
     * @var 
     * 
     */
    private $oop_review_admin_instance;

    /**
     * Global name array.
     * 
     * @var array
     * 
     */
    protected $global_name_array;

    /**
     * This is Constructor where instance of admin class is created and
     * All Callable function and hook are stored in associated array as 
     * $key and $value respectively as hook could be used multiple times
     * and key could not be repeated.
     * 
     * @since 2.0
     * 
     */
    public function __construct()
    {

        $this->oop_review_admin_instance = new admin();
        $this->oop_review_admin_instance->yesNo == "no";

        $this->global_name_array = [
            'meta_box'              => 'add_meta_boxes',
            'meta_box_design'       => 'the_content',
            'save_to_db'            => 'save_post',
            'load_style_and_script' => 'wp_enqueue_scripts',
        ];

        foreach ($this->global_name_array as $key => $value) :
            add_action($value, [$this, $key]);
        endforeach;
    }

    /**
     * Calls admin meta_box
     * 
     * @since 2.0
     * @return callable meta_box from admin.
     * 
     */
    public function meta_box()
    {
        $this->oop_review_admin_instance->meta_box();
    }

    /**
     * Calls admin meta_box_design
     * 
     * @param $post Can be null or the information of the post.
     * @since 2.0
     * @return callable meta_box_design from admin
     * 
     */
    public function meta_box_design($post)
    {
        if ($post) :
            $header_template = dirname(oop_review_file) . '/includes/Public/header.php';
            $footer_template = dirname(oop_review_file) . '/includes/Public/footer.php';
            $for_post_template = dirname(oop_review_file) . '/includes/Public/for_post.php';
            $for_review_template = dirname(oop_review_file) . '/includes/Public/for_review.php';
            if (file_exists($header_template) && file_exists($footer_template) && file_exists($for_post_template) && file_exists($for_review_template)) :
                $this->oop_review_admin_instance->meta_box_design_for_admin($post);
            endif;
        else :
            $this->oop_review_admin_instance->yesNo = get_post_meta(get_the_ID(), 'yesNo', true);
            if ($this->oop_review_admin_instance->yesNo == "yes") :
                $this->oop_review_admin_instance->meta_box_design_for_user();
            endif;
        endif;
    }

    /**
     * Calls admin save_to_db
     * 
     * @param $post_id Id of post
     * @since 2.0
     * @return callable save_to_db from admin
     * 
     */
    public function save_to_db(int $post_id)
    {
        $this->oop_review_admin_instance->save_to_db($post_id);
    }

    /**
     * Calls admin load_style_and_script
     * 
     * @since 2.0
     * @return callable load_style_and_script from admin
     * 
     */
    public function load_style_and_script()
    {
        $this->oop_review_admin_instance->load_style_and_script();
    }
}
