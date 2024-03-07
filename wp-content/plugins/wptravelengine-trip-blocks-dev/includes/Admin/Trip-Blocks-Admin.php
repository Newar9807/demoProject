<?php

namespace WPTravelEngineTripBlocks\Admin;

/**
 * The admin specific functionality of the plugin.
 *
 * @link https://wptravelengine.com/
 * @since 1.0.0
 * @package WP_Travel_Engine
 */

/**
 * The admin specific functionality of the plugin.
 *
 * Defines the plugin name, version and hooks to enqueue
 * the admin specific stylesheet and scripts.
 */
class Trip_Blocks_Admin {

	/**
	 * Constructor function.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->init_hooks();
	}

	/**
	 * Initializes the admin hooks.
	 *
	 * @since 1.0.0
	 */
	public function init_hooks() {
		add_action( 'wpte_get_global_extensions_tab', array( $this, 'wte_trip_blocks_extension_settings' ) );
	}

	/**
	 * Global settings array register.
	 *
	 * @param array $extension_settings WP Travel Engine extension settings.
	 *
	 * @since 1.0.0
	 */
	public function wte_trip_blocks_extension_settings( $extension_settings ) {
		$extension_settings['wte_trip_blocks'] = array(
			'label'        => __( 'Trip Blocks', 'wte-trip-blocks' ),
			'content_path' => plugin_dir_path( __FILE__ ) . '/global-settings.php',
			'current'      => false,
		);

		return $extension_settings;
	}
}

new Trip_Blocks_Admin();
