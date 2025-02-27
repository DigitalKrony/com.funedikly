<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 *
 */
function moray_menus() {
  register_nav_menus(
    array(
      'moray_head_nav' => __( 'Moray UH' ),
      'moray_foot_nav' => __( 'Moray UF' )
    )
  );

}
add_action( 'init', 'moray_menus' );

/**
 *
 */
function addMorayBlockCategory( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'moray',
				'title' => __( 'Moray', 'moray' ),
			),
		),
    $categories
	);
}
add_filter( 'block_categories', 'addMorayBlockCategory', 10, 2);

/**
 *
 */
function loadMorayBlocks() {
	$blockFolder = scandir(__DIR__ . DIRECTORY_SEPARATOR . 'blocks' . DIRECTORY_SEPARATOR);

	foreach($blockFolder as $block) {
		if ($block != '.' && $block != '..') :
			wp_enqueue_script(
				'moray-block-' . $block,
				plugin_dir_url(__FILE__) . 'blocks/' . $block . '/index.js',
		  	array( 'wp-blocks', 'wp-element', 'wp-data', 'wp-components', 'wp-blocks', 'wp-block-editor'),
				true
			);
		endif;
	}
}

add_action('enqueue_block_editor_assets', 'loadMorayBlocks');
