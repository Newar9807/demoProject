<?php
/**
 * Single Trip Highlights Template
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
	$data = SampleData::highlights();
} else {
	$post_settings   = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );
	$trip_highlights = $post_settings[ 'trip_highlights' ] ?? array();

	if ( ! is_array( $trip_highlights ) || empty( $trip_highlights ) ) {
		return;
	}

	$data = array_column( $trip_highlights, 'highlight_text' );

}

?>
    <div <?php $attributes_parser->wrapper_attributes(); ?> >
        <div class="highlights">
            <ul class="wpte-trip-highlights">
				<?php foreach ( $data as $highlight ) { ?>
                    <li><?php echo esc_html( $highlight ); ?> </li>
				<?php } ?>
            </ul>
        </div>
</div>
<?php
