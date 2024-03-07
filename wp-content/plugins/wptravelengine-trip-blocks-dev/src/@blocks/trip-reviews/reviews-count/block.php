<?php
/**
 * Trip Reviews Count Block.
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
	$rating_count = SampleData::reviews_count();
} else {
	$rating_count = absint( $comment_datas['i'] );
}

if ( ! empty( $comment_datas ) ) {
	?>
	<div <?php $attributes_parser->wrapper_attributes(); ?>>
		<div class="trip-rating-count-container">
			<div class="trip-rating-count">
				<span class="trip-rating-count-prefix">
					<?php
					echo wp_kses(
						str_replace( '%rating_count%', "<span class='trip-rating-count-number'>{$rating_count}</span>", $attributes_parser->get( 'ratingCount' ) ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					)
					?>
				</span>
			</div>
		</div>
	</div>
	<?php
}
