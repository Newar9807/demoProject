<?php
/**
 * Metadata for Blocks.
 *
 * @package WPTravelEngineTripBlocks
 * @since 1.0.0
 */

namespace WPTravelEngineTripBlocks\Block;

class Metadata {

	public static function supports( array $metadata = array() ): array {

		$metadata[ 'supports' ] = static::parse_args(
			$metadata[ 'supports' ] ?? array(),
			[
				'wptravelenginetripblocks' => [
					'colors'     => [
						'textColor'  => true,
						'background' => true,
						'link'       => true,
					],
					'typography' => true,
					'border'     => true,
					'spacing'    => true,
					'panels'     => [
						'color'      => [ 'title' => __( 'Color' ) ],
						'border'     => [ 'title' => __( 'Border' ) ],
						'dimensions' => [ 'title' => __( 'Dimensions' ) ],
						'typography' => [ 'title' => __( 'Typography' ) ],
					],
				],
			]
		);

		return $metadata[ 'supports' ];
	}

	public static function parse_args( $args, $defaults ): array {


		$args = array_merge( $defaults, $args );

		foreach ( $args as $key => $value ) {
			if ( is_array( $value ) && isset( $defaults[ $key ] ) ) {
				if ( ! is_array( $defaults[ $key ] ) ) {
					continue;
				}
				$args[ $key ] = static::parse_args( $value, $defaults[ $key ] ?? [] );
			}
		}

		return $args;
	}

	public static function colors( $metadata ): array {
		$global_settings = wp_get_global_settings();
		if( isset( $global_settings['color']['palette'] ) && isset( $global_settings['color']['palette']['theme'] ) ){
			$theme_color_palette = $global_settings['color']['palette']['theme'];
		}
		$color_palettes = array();
		foreach( $theme_color_palette as $color_palette => $palettes ){
			$color_palettes[$color_palette] = 'var(--wp--preset--color--'.$palettes['slug'].')';
		}
		$defaults = [
			'textColor'  => [
				'type'    => 'string',
				'label'   => __( 'Text' ),
				'default' => '',
				'control' => [
					'type'  => 'color',
					'style' => 'color',
				],
			],
			'background' => [
				'type'    => 'string',
				'label'   => __( 'Background' ),
				'default' => '',
				'control' => [
					'type' => 'color',
					'style' => 'background',
				],
				'panel'   => 'color',
			],
			'link'       => [
				'type'      => 'object',
				'default'   => [
					'initial' => '',
					'hover'   => '',
				],
				"selectors" => '%WRAPPER% a',
				'label'     => __( 'Link' ),
				'control'   => [
					'type'   => 'color',
					'labels' => [
						'initial' => [
							'label' => __( 'Link' ),
							'style' => 'color',
						],
						'hover'   => [
							'label' => __( 'Hover' ),
							'style' => 'color:hover',
						],
					],
				],
			],
		];

		$supports = $metadata[ 'supports' ][ 'wptravelenginetripblocks' ][ 'colors' ] ?? true;

		if ( ! $supports ) {
			return [];
		}

		if ( is_array( $supports ) ) {
			foreach ( array_keys( $defaults ) as $key ) {
				if ( ! isset( $supports[ $key ] ) || ! $supports[ $key ] ) {
					unset( $defaults[ $key ] );
				}
			}
		}

		return $defaults;
	}

	public static function border(): array {
		return [
			'border'       => [
				'type'    => 'object',
				'label'   => __( 'Border' ),
				'default' => [
					'width' => '1',
					'style' => 'none',
					'color' => '',
				],
				'control' => [
					'type' => 'border',
				],
			],
			'boxShadow'    => [
				'type'    => 'object',
				'default' => [
					'enable'           => false,
					'color'            => '',
					'xOffset'          => '',
					'horizontalOffset' => '',
					'verticalOffset'   => '',
					'yOffset'          => '',
					'blur'             => '',
					'spread'           => '',
					'position' => 'outline',
				],
				'label'   => __( 'Box Shadow' ),
				'control' => [
					'type' => 'box-shadow',
				],
				'panel'   => 'border',
			],
			'borderRadius' => [
				'type'    => 'object',
				'default' => [
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				],
				'label'   => __( 'Border Radius' ),
				'control' => [
					'type'  => 'spacing',
					'style' => 'borderRadius',
				],
				'panel'   => 'border',
			],
		];
	}

	public static function spacing(): array {
		return [
			'padding' => [
				'type'    => 'object',
				'default' => [
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				],
				'label'   => __( 'Padding' ),
				'control' => [
					'type'  => 'spacing',
					'style' => 'padding',
				],
				'panel'   => 'dimensions',
			],
			'margin'  => [
				'type'    => 'object',
				'default' => [
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left' => '',
				],
				'label'   => __( 'Margin' ),
				'control' => [
					'type'  => 'spacing',
					'style' => 'margin',
				],
				'panel'   => 'dimensions',
			],
		];
	}

	public static function typography(): array {
		return [
			'typography' => [
				'family'         => [
					'type'    => 'string',
					'default' => 'default',
				],
				'size'           => [
					'type'    => 'object',
					'default' => [
						'desktop' => [ 'value' => '', 'unit' => 'px' ],
						'tablet'  => [ 'value' => '', 'unit' => 'px' ],
						'mobile'  => [ 'value' => '', 'unit' => 'px' ],
					],
				],
				'line-height'    => [
					'type'    => 'object',
					'default' => [
						'desktop' => [ 'value' => '', 'unit' => 'px' ],
						'tablet'  => [ 'value' => '', 'unit' => 'px' ],
						'mobile'  => [ 'value' => '', 'unit' => 'px' ],
					],
				],
				'letter-spacing' => [
					'type'    => 'object',
					'default' => [
						'desktop' => [ 'value' => '', 'unit' => 'px' ],
						'tablet'  => [ 'value' => '', 'unit' => 'px' ],
						'mobile'  => [ 'value' => '', 'unit' => 'px' ],
					],
				],
				'word-spacing'   => [
					'type'    => 'object',
					'default' => [
						'desktop' => [ 'value' => '', 'unit' => 'px' ],
						'tablet'  => [ 'value' => '', 'unit' => 'px' ],
						'mobile'  => [ 'value' => '', 'unit' => 'px' ],
					],
				],
				'weight'         => [
					'type'    => 'string',
					'default' => 'normal',
				],
				'style'          => [
					'type'    => 'string',
					'default' => 'default',
				],
				'transform'      => [
					'type'    => 'string',
					'default' => 'default',
				],
				'decoration'     => [
					'type'    => 'string',
					'default' => 'default',
				],
			],
		];
	}

	public static function attributes( array $metadata = array() ): array {

		$defaults = array_merge( static::colors( $metadata ), static::border(), static::spacing(), static::typography(), );

		$metadata[ 'attributes' ] = static::parse_args(
			$metadata[ 'attributes' ] ?? [],
				$defaults
		);

		$metadata[ 'attributes' ][ 'editor' ] = [
			'type'    => 'boolean',
			'default' => false,
			'label'   => __( 'Editor' ),
		];

		return $metadata[ 'attributes' ] ?? array();
	}

	public static function filter_block_metadata( $metadata ) {

		if ( str_contains( $metadata[ 'name' ], 'wptravelenginetripblocks' ) ) {
			//TODO: Remove this line all block.json are updated
			$metadata[ 'supports' ]   = self::supports( $metadata );
			$metadata[ 'attributes' ] = self::attributes( $metadata );
		}

		return $metadata;
	}

}
