<?php

function print_my_name() {
    $fullname = 'Samir Shrestha';
    do_action( 'before_my_name' );
    echo apply_filters( 'filter_my_name', $fullname );
    do_action( 'after_my_name' );
    die;
}

print_my_name();