<?php
/**
 * Helper functions.
 */

namespace WPTravelEngineTripBlocks;

class Helpers {

	public static function generate_random_string(): string {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		return sprintf( '%05s', substr( str_shuffle( str_repeat( $characters, ceil( 5 / strlen( $characters ) ) ) ), 1, 5 ) );
	}

	/**
	 * Generates a unique ID string with a prefix.
	 *
	 * @param string $prefix The prefix to append to the generated unique ID.
	 *
	 * @return string The generated unique ID.
	 */
	public static function unique_id( string $prefix = '', $sections = 3 ): string {
		return $prefix . implode( '-', array_map( [ __CLASS__, 'generate_random_string' ], range( 1, $sections ) ) );
	}

}