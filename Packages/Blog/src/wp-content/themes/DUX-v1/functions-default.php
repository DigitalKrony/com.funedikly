<?php
/**
 * Microsoft BAP Design functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage designFunedikly
 * @since 2005
 */

if (!function_exists('df_support')):
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * @since Twenty Twenty-Five 1.0
   *
   * @return void
   */
  function df__support() {
    // Add support for block styles.
    add_theme_support('wp-block-styles');

    // Enqueue editor styles.
    add_editor_style('style.css');
  }
endif;

add_action('after_setup_theme', 'df_support');

if (!function_exists('df_styles')):
  /**
   * Enqueue styles.
   *
   * @since Twenty Twenty-Five 1.0
   *
   * @return void
   */
  function df__styles() {
    // Register theme stylesheet.
    $theme_version = wp_get_theme()->get('Version');

    $version_string = is_string($theme_version) ? $theme_version : false;
    wp_register_style('df-style', get_template_directory_uri() . '/style.css', [], $version_string);

    // Enqueue theme stylesheet.
    wp_enqueue_style('df-style');
  }
endif;

add_action('wp_enqueue_scripts', 'df_styles');

if (!function_exists('local_dev_scripts')) :
  function local_dev_scripts() {
    if ($_SERVER['REMOTE_ADDR'] === '127.0.0.1'):
      wp_register_script('livereload', 'http://localhost:35729/livereload.js?snipver=1', null, false, true);
      wp_enqueue_script('livereload');
    endif;
  }
endif;

add_action('wp_enqueue_scripts', 'local_dev_scripts');

// Add block patterns
require get_template_directory() . '/patterns/block-patterns.php';

add_filter( 'show_admin_bar', '__return_false' );
