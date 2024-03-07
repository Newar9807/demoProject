<?php

/**
 * Render File for Duration Block.
 *
 * @var string $wrapper_attributes
 * @var Attributes $attributes_parser
 * @var Render $render
 * @since 1.0.0
 * @package wptravelengine-trip-blocks
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$duration_data = SampleData::duration();
	$duration = $duration_data[ 'duration' ];
	$duration_unit = $duration_data[ 'duration_unit' ];
} else {

	$post_meta = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );

	$duration      = isset( $post_meta[ 'trip_duration' ] ) && '' != $post_meta[ 'trip_duration' ]
		? $post_meta[ 'trip_duration' ] : '';
	$duration_unit = isset( $post_meta[ 'trip_duration_unit' ] ) && '' != $post_meta[ 'trip_duration_unit' ]
		? $post_meta[ 'trip_duration_unit' ] : 'days';

	if ( empty( $duration ) ) {
		return;
	}
}

?>
    <div <?php $attributes_parser->wrapper_attributes(); ?>>
        <div class="wte-duration-container" style="display: flex;">
            <div class="wte-title-duration">
				<span class="duration">
					<?php echo esc_html( ! empty( $duration ) ? number_format_i18n( $duration ) : 0 ); ?>
				</span>
                <span class="days">
					<?php
					if ( ! empty( $duration ) ) {
						if ( 'days' === $duration_unit ) {
							echo _nx( 'Day', 'Days', $duration, 'days', 'wptravelengine-trip-blocks' );
						} else if ( 'hours' === $duration_unit ) {
							echo _nx( 'Hour', 'Hours', $duration, 'hours', 'wptravelengine-trip-blocks' );
						}
					}
					?>
				</span>
            </div>
        </div>
    </div>
<?php
