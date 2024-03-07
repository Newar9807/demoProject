<?php
/**
 * Single Trip Cost Includes Template.
 *
 * @var string $wrapper_attributes
 * @var Render $render
 * @var Attributes $attributes_parser
 * @package Wp_Travel_Engine_Trip_Blocks
 * @since 1.0.0
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$data = SampleData::cost_includes();
} else {
	/**
	 * Fetch the metadata associated with the trip post.
	 */
	$post_meta = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );

	$data = $post_meta[ 'cost' ] ?? '';

	if ( empty( $data ) ) {
		return;
	}

	$data = preg_split( '/\r\n|[\r\n]/', $data[ 'cost_includes' ] );

}
?>
    <div <?php $attributes_parser->wrapper_attributes(); ?>>
        <div class="includes-content">
            <ul class="include-result">
				<?php
				foreach ( $data as $key => $include ) {
					echo ' <li> ' . wp_kses_post( $include ) . ' </li> ';
				}
				?>
            </ul>
	</div>
</div>
<?php
