<?php
/**
 * Single Trip Faqs Template
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
	$faqs = SampleData::faqs();
} else {

	$post_meta = get_post_meta( $wtetrip->post->ID, 'wp_travel_engine_setting', true );
	$faq       = isset( $post_meta['faq'] ) ? $post_meta['faq'] : '';
	$faqs      = array();
	if ( ! isset( $post_meta['faq'] ) ) {
		$faqs = array();
	} else {
		foreach ( $faq['faq_title'] as $key => $faq_title ) {
			if ( isset( $faq['faq_content'][ $key ] ) ) {
				$faqs[] = array(
					'question' => $faq_title,
					'answer'   => $faq['faq_content'][ $key ],
				);
			}
		}
	}
	if ( ! isset( $faqs[0] ) ) {
		return;
	}
}

?>
<div <?php $attributes_parser->wrapper_attributes(); ?>>
	<div class="post-data faq">
		<div class="wp-travel-engine-faq-tab-content">
			<?php
			foreach ( $faqs as $index => $faq ) {
				?>
				<div id="faq-tabs" class="faq-row">
					<a class="accordion-tabs-toggle <?php echo ( 0 === $index ? 'active' : '' ); ?>" href="javascript:void(0);">
						<span class="dashicons dashicons-arrow-down custom-toggle-tabs rotator <?php echo ( 0 === $index ? 'open' : '' ); ?>"></span>
						<div class="faq-title">
							<?php echo esc_html( $faq['question'] ); ?>
						</div>
					</a>
					<div class="faq-content">
						<?php echo wp_kses_post( $faq['answer'] ); ?>
					</div>
				</div>
				<?php
			}
			?>
		</div>
	</div>
</div>
<?php
