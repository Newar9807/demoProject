<?php
/**
 * Trip Blocks global settings.
 *
 * @since 1.0.0
 * @package WP_Travel_Engine
 */

$wp_travel_engine_settings = get_option( 'wp_travel_engine_settings' );
$trip_blocks_enable        = isset( $wp_travel_engine_settings['trip_blocks_enable'] ) && 'yes' === $wp_travel_engine_settings['trip_blocks_enable'];

/**
 * Added option to disable full payment in global settings.
 *
 * @since 1.0.0
 */
?>
	<div class="wpte-field wpte-checkbox advance-checkbox">
		<label class="wpte-field-label" for="wp_travel_engine_settings_trip_blocks_enable_show">
		<?php
			esc_html_e( 'Enable Trip Blocks', 'wte-trip-blocks' );
		?>
			</label>
		<div class="wpte-checkbox-wrap">
			<input type="checkbox" name="wp_travel_engine_settings[trip_blocks_enable]" value="" id="wp_travel_engine_settings_trip_blocks_enable_hide" checked />
			<input type="checkbox" name="wp_travel_engine_settings[trip_blocks_enable]" value="yes" id="wp_travel_engine_settings_trip_blocks_enable_show" 
				<?php
					checked( true, $trip_blocks_enable );
				?>
			/>
			<label for="wp_travel_engine_settings_trip_blocks_enable_show"></label>
		</div>
		<span class="wpte-tooltip">
		<?php
			esc_html_e( 'Enable this feature to edit your trips using WP Travel Engine\'s single trip blocks. Enabling this feature will disable the default trip editing functionalitites.', 'wte-trip-blocks' );
		?>
			</span>
	</div>

<?php
