<?php
global $wtetrip;

$discount = '';

if ( $render->is_editor() && !isset( $wtetrip->post->post_type ) ) {
    $discount = '20%';
} else {
    if ( $wtetrip->has_sale && isset( $wtetrip->sale_percentage ) ) {
        $discount = (float) $wtetrip->sale_percentage . '%';
    }
}

if ($discount !== '') :
    ?>
    <div <?php echo $attributes_parser->wrapper_attributes(); ?>>
        <span class="wpte-bf-discount-tag"><?php
            echo wp_kses(str_replace('%discount_percentage%', "{$discount}", $attributes_parser->get('discountLabel')), array(
                'span' => array(
                    'class' => array(),
                ),
            ));?></span>
    </div>
    <?php
else :
    esc_html_e('No Pricing Package in this trip. Please add Package to this trip.', 'wptravelengine-trip-blocks');
endif;
?>
