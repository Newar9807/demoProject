<?php

/**
 * Single Trip Map Template
 *
 * @var string $wrapper_attributes
 * @var Render $render
 * @var Attributes $attributes_parser
 * @package Wp_Travel_Engine
 * @since 1.0.0
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$wte_map = SampleData::map();
} else {
	$wp_travel_engine_setting = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );
	$wte_map                  = $wp_travel_engine_setting['map'] ?? array();
	$src                      = wp_get_attachment_image_src( $wte_map['image_url'], 'full' ) ?? array();
	$wte_map['image_url']     = $src[0] ?? '';
}

?>
	<div <?php $attributes_parser->wrapper_attributes(); ?>>
	<?php

	if ( ! empty( $wte_map['iframe'] ) && ( $attributes_parser->get( 'map' ) === 'Iframe' || $attributes_parser->get( 'map' ) === 'Both' ) ) {
		?>
			<div class="trip-map iframe" style="width:100%">
				<?php echo html_entity_decode( $wte_map['iframe'] ); ?>
			</div>
		<?php
	}

	if ( ! empty( $wte_map['image_url'] ) && ( $attributes_parser->get( 'map' ) === 'Image' || $attributes_parser->get( 'map' ) === 'Both' ) ) {
		?>
		<div class="trip-map image" style="width: 100%">
			<img src="<?php echo esc_url( $wte_map['image_url'] ); ?>">
		</div>
		<?php
	}
	?>
</div>
<?php
