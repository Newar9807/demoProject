<?php

namespace WPTravelEngineTripBlocks\Block\Styles;

use WPTravelEngineTripBlocks\Helpers;

class Style {
	/**
	 * @var string
	 */
	public string $key;

	/**
	 * @var mixed
	 */
	protected $value;

	/**
	 * @var array
	 */
	protected array $settings;

	/**
	 * @var string|bool
	 */
	protected $css_property = false;

	/**
	 * @var string
	 */
	protected string $variable_name = '';

	/**
	 * @var array
	 */
	protected array $control;
	/**
	 * @var mixed|string
	 */
	protected string $pseudo_token = '';

	protected array $styles = [];

	/**
	 * @var mixed|string
	 */
	protected $css_selectors;

	/**
	 * Color constructor.
	 *
	 * @param string $key
	 * @param mixed $value
	 * @param array $settings
	 */
	public function __construct( string $key, $value, array $settings ) {
		$this->key      = $key;
		$this->value    = $value;
		$this->settings = $settings;
		$this->control  = $settings[ 'control' ];

		$this->set_properties();
	}

	public function set_variable_name( $value = '' ) {
		$this->variable_name = $value;
	}

	protected function format_css_variable( $property_name ): string {
		$property_name = preg_replace_callback( '/[A-Z]/', function ( $matches ) {
			return '-' . strtolower( $matches[ 0 ] );
		}, preg_replace( [ '#^--#', '#[0-9\s]#', '#[^\w-]#' ], [ '', '-', '' ], $property_name ) );

		return "--{$property_name}";
	}

	protected function get_css_selectors(): string {
		$selectors = $this->control[ 'selectors' ] ?? '%WRAPPER%';

		return is_array( $selectors ) ? implode( ',', $selectors ) : $selectors;
	}

	protected function default_properties(): array {
		return [
			'textColor'       => 'color',
			'color'           => 'color',
			'borderColor'     => 'border-color',
			'background'      => 'background',
			'backgroundColor' => 'background-color',
		];
	}

	protected function stringify_selectors( $selectors ): string {
		return is_string( $selectors ) ? $selectors : implode( ',', (array) $selectors );
	}

	protected function is_valid_property( $property ): bool {
		return isset( $this->default_properties()[ $property ] );
	}

	protected function pseudo_tokens( $token_string = '' ): array {
		return explode( ':', $token_string );
	}

	protected function set_properties() {
		$this->set_css_property( $this->control[ 'style' ] ?? false );
		$this->set_variable_name( $this->settings[ 'variableName' ] ?? $this->key );
		$this->set_css_selectors( $this->settings[ 'selectors' ] ?? '%WRAPPER%' );
	}

	public function styles(): array {
		$selector_value = [];
		if ( empty( $this->value ) ) {
			return [];
		}

		$variable_name = $this->format_css_variable( $this->variable_name );

		$selector_value[ $variable_name ] = $this->css_value();
		if ( $this->css_property ) {
			$selector_value[ $this->css_property ] = "var($variable_name)";
		}


		return $this->styles_by_selectors( $selector_value );
	}

	protected function styles_by_selectors( $selector_value ) {
		$selectors = ! is_array( $this->css_selectors ) ? [ (string) $this->css_selectors ] : $this->css_selectors;

		$styles = [];
		foreach ( $selectors as $selector ) {
			$styles[ $selector . $this->pseudo_token ] = $selector_value;
		}

		$this->styles = array_merge( $this->styles, $styles );

		return $this->styles;
	}

	protected function css_property(): string {
		return $this->css_property;
	}

	protected function css_value() {
		return $this->value;
	}

	protected function variable_name(): string {
		return $this->variable_name;
	}

	protected function set_css_property( $value = '' ) {
		$this->css_property = $value;
		if ( strpos( $this->css_property, ':' ) > 0 ) {
			list( $css_property, $pseudo_token ) = explode( ':', $this->css_property );
			$this->css_property = $css_property;
			$this->pseudo_token = ":{$pseudo_token}";
		}
	}

	protected function set_css_selectors( $value = '' ) {
		$this->css_selectors = $value;
	}

	public static function parse( ...$args ): Style {
		return new static( ...$args );
	}

}