<?php
/**
 *
 * Main Plugin File.
 *
 * @since 1.0.0
 * @package wptravelengine-trip-blocks
 */

namespace WPTravelEngineTripBlocks;

/**
 * Class WPTravelEngine_Trip_Blocks.
 *
 * @since 1.0.0
 */
class Plugin {

	/**
	 * Hold current instance.
	 *
	 * @var null|Plugin $instance
	 */
	protected static ?Plugin $instance = null;

	/**
	 * Version of the plugin.
	 *
	 * @var Plugin
	 */
	public string $version;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->version = WPTRAVELENGINE_TRIP_BLOCKS_VERSION;
		add_action( 'plugins_loaded', array( $this, 'initialize' ) );
	}

	/**
	 * Hooks and Filters.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function init_hooks() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'enqueue_block_editor_assets', array( __NAMESPACE__ . '\Scripts', 'block_editor_assets' ) );
		add_action( 'wp_enqueue_scripts', array( __NAMESPACE__ . '\Scripts', 'view_assets' ) );
		add_filter( 'block_type_metadata', array( __NAMESPACE__ . '\Block\Metadata', 'filter_block_metadata' ) );

		add_action( 'wp_footer', array( $this, 'print_booking_script_template' ) );

		do_action( __NAMESPACE__ . __FUNCTION__, $this );
	}

	public function print_booking_script_template() {
		global $post;
		if ( $post->post_type == \WP_TRAVEL_ENGINE_POST_TYPE ) {
			wte_get_template( 'script-templates/booking-process/wte-booking.php' );
		}
	}

	/**
	 * Define Constants.
	 *
	 * @since 1.0.0
	 */
	protected function define_constants() {
		define( 'WPTRAVELENGINE_TRIP_BLOCKS_DIR__', plugin_dir_path( WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ) );
		define( 'WPTRAVELENGINE_TRIP_BLOCKS_DIR_URL', plugin_dir_url( WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ) );
	}

	/**
	 * Register Blocks.
	 *
	 * @since 1.0.0
	 */
	public function register_blocks() {
		$blocks = new Blocks();
		$blocks->load();
		$blocks->register();
	}

	/**
	 * Returns single instance.
	 *
	 * @return Plugin
	 */
	public static function instance(): ?Plugin {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Admin Notices.
	 */
	public function admin_notices() {
		printf(
			'<div id="message" class="error"><p>%s</p></div>',
			/* translators: %s: plugin name. */
			sprintf(
				__( '%1$s addon requires the WP Travel Engine plugin to work. Please install and activate the latest WP Travel Engine plugin first. %1$s plugin is not running.', 'wptravelengine-trip-blocks' ),
				'<strong>WP Travel Engine - Trip Blocks</strong>',
			)
		);
	}

	/**
	 * Initialize functionality.
	 *
	 * @return void
	 */
	public function initialize() {
		if ( ! $this->meets_requirements() ) {
			add_action( 'admin_notices', array( $this, 'admin_notices' ) );

			return;
		}

		$this->define_constants();
		$this->init_hooks();
	}

	/**
	 * Check if all plugin requirements are met.
	 *
	 * @return bool True if the requirements are met, otherwise false.
	 * @since 1.0.0
	 */
	public function meets_requirements(): bool {
		return defined( 'WP_TRAVEL_ENGINE_VERSION' ) && version_compare( WP_TRAVEL_ENGINE_VERSION, '5.0', '>=' );
	}

}
