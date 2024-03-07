<?php
/**
 * Single Trip Cost Excludes Template.
 *
 * @var Attributes $attributes_parser
 * @var string $wrapper_attributes
 * @var Render $render
 *
 * @package Wp_Travel_Engine_Trip_Blocks
 * @since 1.0.0
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$data = SampleData::cost_excludes();
} else {

	/**
	 * Fetch the metadata associated with the trip post.
	 */
	$post_meta = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );

	$data = $post_meta[ 'cost' ] ?? '';

	if ( empty( $data ) ) {
		return;
	}

	$data = preg_split( '/\r\n|[\r\n]/', $data[ 'cost_excludes' ] );

}
?>
    <div <?php $attributes_parser->wrapper_attributes(); ?>>
        <div class="excludes-content">
            <ul class="exclude-result">
				<?php
				foreach ( $data as $key => $exclude ) {
					echo ' <li> ' . wp_kses_post( $exclude ) . ' </li> ';
				}
				?>
            </ul>
	</div>
</div>
<?php
