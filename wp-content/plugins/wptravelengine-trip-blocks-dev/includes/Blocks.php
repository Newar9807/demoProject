<?php

namespace WPTravelEngineTripBlocks;

use WPTravelEngineTripBlocks\Block\Attributes;
use WPTravelEngineTripBlocks\Block\Render;

/**
 * Class Blocks
 *
 * @package WPTravelEngineTripBlocks
 */
class Blocks {

	/**
	 * Blocks constructor.
	 *
	 * @var array $blocks
	 */
	protected array $blocks = array();

	/**
	 * Add a block to the list of registered blocks.
	 *
	 * @param string $block_dir Path to the directory of the block.
	 */
	public function set( string $block_dir ): void {
		$this->blocks[] = $block_dir;
	}

	/**
	 * Returns the directory where the block files are located.
	 *
	 * @return string The directory path.
	 */
	public function directory(): string {
		return dirname( WPTRAVELENGINE_TRIP_BLOCKS_FILE__ ) . '/build/@blocks';
	}

	/**
	 * Register the block types.
	 */
	public function register(): void {
		$blocks = apply_filters( __METHOD__, $this->blocks );

		foreach ( $blocks as $block ) {

			$template_path = wp_normalize_path(
				realpath(
					dirname( $block ) . '/block.php'
				)
			);

			$args = [];
			if ( $template_path ) {
				$args[ 'render_callback' ] = static function ( $attributes, $content, $block ) use ( $template_path ) {
					ob_start();
					$render = new Render(
						compact( 'attributes', 'content', 'block', 'template_path' )
					);
					$render->render();

					return ob_get_clean();
				};
			}

			register_block_type( $block, $args );
		}
	}

	public function iterateOverDirectories( $currentDirectory ) {
		$dir = new \DirectoryIterator( $currentDirectory );

		foreach ( $dir as $fileinfo ) {
			if ( ! $fileinfo->isDot() ) {
				$block = $fileinfo->getPathname() . '/block.json';
				if ( file_exists( $block ) ) {
					$this->set( $block );
				} else if ( $fileinfo->isDir() ) {
					$this->iterateOverDirectories( $fileinfo->getPathname() );
				}
			}
		}
	}

	/**
	 * Load blocks from the block directory.
	 */
	public function load(): void {
		$this->iterateOverDirectories( $this->directory() );
	}
}
