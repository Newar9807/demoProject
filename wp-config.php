<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'demoProject' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5WVWnyDwz4lFEKAObDDABZluO8vTmbnwJM4dRfETGqBRhntVaA7UwoYBDN90LF7z' );
define( 'SECURE_AUTH_KEY',  '1iptvyX2n70kT8cILwUiY7rEGi2RyYSMZ55hfQjAdoI8np7pniqU2x0TSl4Msruq' );
define( 'LOGGED_IN_KEY',    'Bw9feq1dBVDrE6fLoW6WKB4pJXXsKy35I1REh7QWJq76T27zhFCFuGKjp00ICgDm' );
define( 'NONCE_KEY',        '87aSa1nZIsknSBPy8yaQdmusrmkT4JRTBZeZwuZ5fKrUz7mvilvt07Z1s616oD13' );
define( 'AUTH_SALT',        'OOUR7PXO7fZgWeAs7b1BqtSMZrBdCU2mzoCUKz7MLRnAk1Y21hDFllEtJbYoBDjR' );
define( 'SECURE_AUTH_SALT', 'M1JtCt8xXXcxWOrZ0uPHWsyO2KULgUblfaQtx7XAjb2oQOuDaQC8LQw9davOZ97l' );
define( 'LOGGED_IN_SALT',   '6jjSwezzpSIlqORn9gKQ54IfUyNGT0HishiIFYVJSqnvW1DyCKIOckYGoVRVVz9J' );
define( 'NONCE_SALT',       'wXgx2Anr5rNyYGdgWFRtN0e8sUNUkcS0kkA3nBGls7PTHhiXQ4qpigaFyoGdCVHD' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
