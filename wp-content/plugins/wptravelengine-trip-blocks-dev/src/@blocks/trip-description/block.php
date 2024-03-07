<?php
/**
 * Render File for Overview  block.
 *
 * @var Render $render
 * @var string $wrapper_attributes
 * @var Attributes $attributes_parser
 * @since 1.0.0
 * @package wptravelengine-trip-blocks
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$overview = SampleData::overview();
} else {
	$trip_settings = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );
	$key           = '1_wpeditor';
	$overview      = isset( $trip_settings[ 'tab_content' ][ $key ] ) ? $trip_settings[ 'tab_content' ][ $key ] : '';
}
?>
<div <?php $attributes_parser->wrapper_attributes(); ?>>
    <div class="post-data overview">
		<?php echo wp_kses_post( $overview ); ?>
    </div>
</div>
