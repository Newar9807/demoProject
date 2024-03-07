<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link            https://wptravelengine.com/
 * @since           1.0.0
 * @package         WPTravelEngine_Trip_Blocks
 *
 * @wordpress-plugin
 * Plugin Name:     WP Travel Engine - Trip Blocks
 * Plugin URI:      https://wptravelengine.com/
 * Description:     An extension for WP Travel Engine plugin to add a custom block for single trips.
 * Version:         1.0.0
 * Author:          WP Travel Engine
 * Author URI:      https://wptravelengine.com/
 * License:
 * Text Domain:     wptravelengine-trip-blocks
 * Domain Path:     /languages
 * WTE requires at least:
 * WTE tested up to:
 * WTE:
 */

// If this file is called directly, abort.
defined( 'ABSPATH' ) || exit;

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
const WPTRAVELENGINE_TRIP_BLOCKS_FILE__ = __FILE__;

const WPTRAVELENGINE_TRIP_BLOCKS_VERSION = '1.0.0';

require __DIR__ . '/vendor/autoload.php';

WPTravelEngineTripBlocks\Plugin::instance();
