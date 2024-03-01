<?php

function print_my_name() {
    do_action( 'before_my_name' );
    echo esc_html(apply_filters( 'filter_my_name', get_option('full_name') ));
    do_action( 'after_my_name' );
    // die;
}

print_my_name();