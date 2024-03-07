<?php
/**
 *
 */

namespace WPTravelEngineTripBlocks\Block;

use WPTravelEngineTripBlocks\Block\Styles\Style;

class Styles {

	protected array $styles = [];
	protected array $classnames = [];
	protected ?\WP_Block_Type $block;

	protected string $classname = 'default';

	public function __construct() {
		$this->block = \WP_Block_Type_Registry::get_instance()->get_registered( \WP_Block_Supports::$block_to_render[ 'blockName' ] );
	}

	public function print( $block_id ) {

		$selectors_values = $this->styles;

		$css = [];
		foreach ( $selectors_values as $selector => $styles ) {

			$styles = array_map(
				function ( $style, $value ) {
					$style = is_string( $style ) ? $style : '';
					$value = is_string( $value ) ? $value : '';
					return "{$style}:{$value};";
				},
				array_keys( $styles ),
				$styles
			);

			$styles = implode( '', $styles );

			if ( strlen( $styles ) <= 0 ) {
				continue;
			}
			$css[ $selector ] = "{$selector}{ {$styles} }";
		}

		printf(
			"<style id='{$block_id}'>%s</style>",
			str_replace( '%WRAPPER%', ".{$block_id}", implode( '', $css ) )
		);
	}

	/**
	 * @param $key
	 * @param $value
	 * @param $settings
	 *
	 * @return $this
	 */
	public function parse( $attributes = array() ): Styles {

		foreach ( $attributes as $key => $value ) {
			$this->parse_attribute( $key, $value, $this->block->attributes[ $key ] );
		}

		// if not api request
		if ( ! defined( 'REST_REQUEST' ) ) {
//			dd( $this->styles );
		}

		return $this;
	}

	protected function parse_attribute( $key, $value, $settings ): void {

		$control_type = $settings[ 'control' ][ 'type' ] ?? false;

		if ( ! ( $settings[ 'control' ][ 'type' ] ?? false ) ) {
			return;
		}

		$instance = null;
		switch ( $control_type ) {
			case 'color':
				$instance = Styles\Color::parse( $key, $value, $settings );
				break;
			case 'border':
				$instance = Styles\Border::parse( $key, $value, $settings );
				break;
			case 'spacing':
				$instance = Styles\Spacing::parse( $key, $value, $settings );
				break;
			case 'borderRadius':
			case 'border-radius':
				$instance = Styles\BorderRadius::parse( $key, $value, $settings );
				break;
			case 'boxShadow':
			case 'box-shadow':
				$instance = Styles\BoxShadow::parse( $key, $value, $settings );
				break;
			default:
				if ( $settings[ 'control' ][ 'style' ] ?? false ) {
					$instance = Styles\Style::parse( $key, $value, $settings );
				} else {
					return;
				}
				break;
		}

		$this->styles = array_merge_recursive( $this->styles, $instance->styles() );

	}
}