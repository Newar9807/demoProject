<?php
// ============================================================================ //
// This file is called automatically when user deletes(deactivates) the plugins //
// ============================================================================ //

// => Checks if this file is called by wordpress
if (!defined('WP_UNINSTALL_PLUGIN')) 
{
    die;
}

global $wpdb, $table_prefix;
$wp_emp = $table_prefix.'emp';
$q = "DROP TABLE `$wp_emp`";
$wpdb->query($q);