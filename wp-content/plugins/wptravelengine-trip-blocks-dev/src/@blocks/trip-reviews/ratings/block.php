<?php
/**
 * Trip Ratings Block.
 *
 * @since 1.0.0
 * @package Wp_Travel_Engine
 * @var Render $render
 * @var Attributes $attributes_parser
 * @var string $wrapper_attributes
 */

if ( ! defined( 'WTE_TRIP_REVIEW_VERSION' ) ) {
	return;
}

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

$review_libray = new WTE_Trip_Review_Library();
$comment_datas = $review_libray->pull_comment_data( $wtetrip->post->ID );

if ( $render->is_editor() && 'trip' !== $wtetrip->post->post_type ) {
	$rating = SampleData::ratings();
} else {
	$data   = wptravelengine_reviews_get_trip_reviews( $wtetrip->post->ID );
	$rating = $data['average'];
}

if ( ! empty( $comment_datas ) ) {
	?>
	<div <?php $attributes_parser->wrapper_attributes(); ?>>
		<div class="trip-rating-container">
			<span class="trip-rating-point"><?php echo number_format( (float) $rating, 1 ); ?></span>
		</div>
	</div>
	<?php
}
