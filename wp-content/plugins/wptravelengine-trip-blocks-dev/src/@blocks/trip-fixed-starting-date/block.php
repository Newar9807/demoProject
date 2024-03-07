<?php
/**
 * Render File for Fixed Starting Date block.
 *
 * @var string $wrapper_attributes
 * @var Attributes $attributes_parser
 * @var Render $render
 * @since   1.0.0
 * @package wptravelengine-trip-blocks
 */

use WPTravelEngineTripBlocks\Block\SampleData;

global $wtetrip;

wp_enqueue_script( 'wte-select2' );
wp_enqueue_style( 'wte-select2' );

$dates_data = [];
$trip_duration_unit = 'days';
$today = gmdate( 'Y-m-d' );
$date_format = get_option( 'date_format', 'Y-m-d' );
$globals_settings = wp_travel_engine_get_settings();
$pagination_num = isset( $globals_settings['trip_dates']['pagination_number'] ) && ! empty( $globals_settings['trip_dates']['pagination_number'] ) ? $globals_settings['trip_dates']['pagination_number'] : 10;

if ($render->is_editor() && !isset($wtetrip->post->post_type)) {
    $dates_data = SampleData::fsd();
} else {
    $trip_id = $_GET[ 'post' ] ?? $post->ID;
    $trip_settings     = get_post_meta( $trip_id, 'wp_travel_engine_setting', true );
    $trip_duration_unit = isset( $trip_settings['trip_duration_unit'] ) ? $trip_settings['trip_duration_unit'] : 'days';
    $btn_txt = isset( $globals_settings['book_btn_txt'] ) && ! empty( $globals_settings['book_btn_txt'] ) ? $globals_settings['book_btn_txt'] : __( 'Book Now ', 'wptravelengine-trip-blocks' );
    if ( isset( $trip_id ) ) {
		$post_type = get_post_type( $trip_id );
	}
    if ( ! $trip_id ) {
        return;
    }
    if ( ! defined( 'WTE_FIXED_DEPARTURE_VERSION' ) ) {
        $sorted_fsd = array();
    } else{
        $sorted_fsd    = call_user_func(
            array( new WTE_Fixed_Starting_Dates_Shortcodes(), 'generate_fsds' ),
            $trip_id,
            array(
                'year'  => '',
                'month' => '',
            )
        );
    }
    foreach ( $sorted_fsd as $key => $fsd ) {
        $months_arr = array_unique(
            array_map(
                function($fsd) {
                    return gmdate('Y-m', strtotime($fsd['start_date']));
                },
                $sorted_fsd
            )
        );
        if ( strtotime( $today ) <= strtotime( $fsd['start_date'] ) ) {
            $content_id = isset( $fsd['content_id'] ) ? $fsd['content_id'] : '';
            $start_date = isset( $fsd['start_date'] ) ? $fsd['start_date'] : '';
            $end_date = isset( $fsd['end_date'] ) ? $fsd['end_date'] : '';
            $availability = isset( $fsd['availability'] ) ? $fsd['availability'] : 'guaranteed';
            $space = isset( $fsd['seats_left'] ) ? $fsd['seats_left'] : '';
            $price = isset( $fsd['fsd_cost'] ) ? $fsd['fsd_cost'] : '';
            $availability_label = isset( $availability_options[$availability] ) ? $availability_options[$availability] : __('Guaranteed', 'wptravelengine-trip-blocks');
            $dates_data["date" . ($key + 1)] = array(
                'content_id' => $content_id,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'availability' => $availability_label,
                'price' => $price,
                'space' => $space,
            );
        }
    }
}
?>
<div <?php echo $attributes_parser->wrapper_attributes(); ?>>
    <div id="wte-fixed-departure-dates" class="fixed-starting dates wte-fsd-list-container" data-nonce="<?= esc_attr(wp_create_nonce('wte-fsd')) ?>">
        <?php if ($attributes['selectOption']) :?>
        <div class="wte-fsd-list-header">
            <div class="wte-user-input">
            <input type="hidden" class="hidden-id" value="<?= isset( $trip_id ) ? esc_attr( $trip_id ) : '' ?>">
                <select class="date-select wpte-enhanced-select" data-nonce="<?= esc_attr(wp_create_nonce( 'wte-fsd' )) ?>" name="date-select" data-placeholder="<?= esc_attr__('Choose a date&hellip;', 'wptravelengine-trip-blocks') ?>" class="wc-enhanced-select">
                    <option value=" "><?= esc_html__('Choose a date...', 'wptravelengine-trip-blocks') ?></option>
                    <?php foreach ($months_arr as $key => $val) : ?>
                        <option data-month="<?= date_i18n('m', strtotime($val)) ?>" value="<?= $val ?>"><?= date_i18n('F, Y', strtotime($val)) ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>
        <?php endif;?>
        <div class="wte-fsd-frontend-holder-dd" id="nestable1">
            <div class="dd-list outer">
                <table>
                    <thead>
                        <tr>
                            <?php if ( $attributes['dateColumn'] ) : ?>
                                <th><?= esc_attr( $attributes['dateLabel'] ) ?></th>
                            <?php endif; ?>
                            <?php if ( $attributes['availabilityColumn'] ) : ?>
                                <th><?= esc_attr( $attributes['availabilityLabel'] ) ?></th>
                            <?php endif; ?>
                            <?php if ( $attributes['priceColumn'] ) : ?>
                                <th><?= esc_attr( $attributes['priceLabel'] ) ?></th>
                            <?php endif; ?>
                            <?php if ( $attributes['spaceColumn'] ) : ?>
                                <th><?= esc_attr( $attributes['spaceLabel'] ) ?></th>
                            <?php endif; ?>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if ( !empty( $dates_data ))  :
                        $counter = 0;
                        ?>
                            <?php foreach ( $dates_data as $key => $fsd ) :
                                $no_of_row = count( $dates_data );
                                if ( $render->is_editor() && ( ! isset( $wtetrip->post->post_type ) || isset( $wtetrip->post->post_type )) ){
                                    $no_of_row = 2;
                                }
                                if ($counter >= $no_of_row )  {
                                   break;
                                } ?>
                                    <tr style="display: table-row;">
                                    <?php if ( $attributes_parser->get( 'dateColumn' ) ):?>
                                        <td
                                            data-label="<?php esc_attr_e( 'TRIP DATES', 'wptravelengine-trip-blocks' ); ?>"
                                            dates=""
                                            class="accordion-sdate"
                                            data-id="<?php echo esc_attr( $fsd['content_id'] ); ?>"
                                        >
                                            <?php function_exists( 'wptravelengine_svg_by_fa_icon' ) ? wptravelengine_svg_by_fa_icon( 'far fa-calendar' ) : print( '<i class="fa fa-calendar"></i>' ); ?>
                                                <span class="start-date" data-id="<?php echo esc_attr( $fsd['start_date'] ); ?>">
                                                    <?php
                                                        $start_date = date_i18n($date_format, strtotime($fsd['start_date']));
                                                        echo $start_date !== '' ? $start_date : esc_attr( $fsd['start_date'] );
                                                    ?>
                                                </span>
                                            <?php if ( 'days' === $trip_duration_unit ) : ?>
                                                <span class="end-date" data-id="<?php echo esc_attr( $fsd['end_date'] ); ?>"> -
                                                    <?php
                                                        $end_date = date_i18n($date_format, strtotime($fsd['end_date']));
                                                        echo $end_date !== '' ? $end_date : esc_attr( $fsd['end_date'] );
                                                    ?>
                                                </span>
                                            <?php endif; ?>
                                        </td>
                                    <?php endif;
                                    if ( $attributes_parser->get( 'availabilityColumn' ) ): ?>
                                        <td
                                        data-label="<?php esc_attr_e( 'AVAILABILITY', 'wptravelengine-trip-blocks' ); ?>"
                                        class="accordion-availability"
                                        data-id="<?php echo esc_attr( $fsd['availability'] ); ?>"
                                        ><span class="<?php echo esc_attr( $fsd['availability'] ); ?>"><?php echo esc_html( $fsd['availability'] ); ?></span></td>
                                    <?php endif;
                                    if ( $attributes_parser->get( 'priceColumn' ) ):?>
                                        <td
                                            data-label="<?php echo esc_attr__( 'PRICE', 'wptravelengine-trip-blocks' ); ?>"
                                            class="accordion-cost"
                                        >
                                            <span class="currency-code">
                                            <?php function_exists( 'wptravelengine_svg_by_fa_icon' ) ? wptravelengine_svg_by_fa_icon( 'fas fa-tag' ) : print( '<i class="fa fa-tag"></i>' ); ?>
                                            </span>
                                            <strong
                                                class="trip-cost-holder"><?php echo wte_get_formated_price( $fsd['price'] ); ?></strong>
                                        </td>
                                    <?php endif;
                                    if ( $attributes_parser->get( 'spaceColumn' ) ):?>
                                        <td
                                            data-label="<?php esc_attr_e( 'SPACE LEFT', 'wptravelengine-trip-blocks' ); ?>"
                                            class="accordion-seats"
                                            data-id="<?php echo esc_attr( $fsd['space'] ); ?>"
                                        >
                                            <div class="seats-available">
                                                <?php
                                                if ( ( $fsd['space'] === '' ) || ( (int) $fsd['space'] > 0 ) ) :
                                                    ?>
                                                    <?php function_exists( 'wptravelengine_svg_by_fa_icon' ) ? wptravelengine_svg_by_fa_icon( 'fas fa-user' ) : print( '<i class="fa fa-user"></i>' ); ?>

                                                    <span class="seats"><?php echo sprintf( __( '%1$s Available', 'wptravelengine-trip-blocks' ), $fsd['space'] ); ?></span>
                                                    <?php
                                                    else :
                                                        echo '<span class="sold-out">' . __( 'sold out', 'wptravelengine-trip-blocks' ) . '</span>';
                                                    endif;
                                                    ?>
                                            </div>
                                        </td>
                                    <?php endif;
                                    if ( ( 0 < $fsd['space'] || '' === $fsd['space'] ) && $wtetrip ) :?>
                                        <td
                                            data-label=""
                                            data-cost="<?php echo esc_attr( $fsd['price'] ); ?>"
                                            class="accordion-book"
                                            data-id="<?php echo esc_attr( $fsd['content_id'] ); ?>"
                                        >
                                            <?php if ( WP_TRAVEL_ENGINE_POST_TYPE === $wtetrip->post->post_type  ) :?>
                                                <button
                                                data-info="<?php echo esc_attr( strtotime( $fsd['start_date'] ) ); ?>"
                                                class="book-btn wte-fsd-list-booknow-btn btn-loading"
                                                ><?php echo esc_html( $btn_txt ); ?>
                                                </button>
                                            <?php else : ?>
                                                <a href="<?php echo esc_url( get_permalink( $trip_id ) . '?action=fsd_booking&date=' . $fsd['start_date'] ); ?>" class="book-btn wte-fsd-list-booknow-btn"><?php echo esc_html( $btn_txt ); ?></a>
                                            <?php endif; ?>
                                        </td>
                                    <?php endif; ?>
                                </tr>
                                <?php
                            $counter++;
                            ?>
                            <?php endforeach; ?>
                        <?php else : ?>
                            <tr style="display: table-row;">
                                <td colspan="5"><?= esc_html__('No Fixed Departure Dates available.', 'wptravelengine-trip-blocks') ?></td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
                <?php
                if ( count( $dates_data ) > $pagination_num && $attributes_parser->get( 'loaderVisibility' ) ) :
                    ?>
                        <button class="loadMore"><?php esc_html_e( 'Load More', 'wptravelengine-trip-blocks' ); ?></button>
                        <button style="display:none;" class="showLess" ><?php esc_html_e( 'Show Less', 'wptravelengine-trip-blocks' ); ?></button>
                    <?php
                    endif;
                ?>
            </div>
        </div>
    </div>
</div>
