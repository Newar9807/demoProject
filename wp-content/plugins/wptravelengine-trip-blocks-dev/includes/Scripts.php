<?php

namespace WPTravelEngineTripBlocks;

class Scripts {

	public static function core_plugin_assets() {

	}

	public static function view_assets() {
		$assets = include WPTRAVELENGINE_TRIP_BLOCKS_DIR__ . 'build/index.asset.php';
		extract( $assets );
		wp_enqueue_style( 'owl-carousel' );
		wp_enqueue_style( 'jquery-fancy-box' );
		wp_enqueue_script( 'wptravelengine-trip-blocks-editor', plugins_url( 'build/view.js', \WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ), $dependencies, $version, true );
		wp_enqueue_style( 'wptravelengine-trip-blocks-editor', plugins_url( 'build/view.css', \WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ) );

	}

	public static function block_editor_assets() {
		$assets = include WPTRAVELENGINE_TRIP_BLOCKS_DIR__ . 'build/editor.asset.php';
		extract( $assets );
		wp_enqueue_script( 'wptravelengine-trip-blocks-editor', plugins_url( 'build/editor.js', \WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ), $dependencies, $version, true );
		wp_enqueue_style( 'wptravelengine-trip-blocks-editor', plugins_url( 'build/editor.css', \WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ) );
	}


}