<?php
/**
 * C+AI Design: Block Patterns
 *
 * @since C+AI Design 0.1.0
 */

function df_site_register_block() {
  $pattern_categories = [
    'featured' => ['label' => __('Featured', 'df')],
    'footer' => ['label' => __('Footers', 'df')],
    'header' => ['label' => __('Headers', 'df')],
    'query' => ['label' => __('Query', 'df')],
    'pages' => ['label' => __('Pages', 'df')],
  ];

  $pattern_categories = apply_filters('df_site_block_pattern_categories', $pattern_categories);

  foreach ($pattern_categories as $name => $properties) {
    if (!WP_Block_Pattern_Categories_Registry::get_instance()->is_registered($name)) {
      register_block_pattern_category($name, $properties);
    }
  }

  $patterns = glob(__DIR__ . DIRECTORY_SEPARATOR . 'blocks' . DIRECTORY_SEPARATOR . '**' . DIRECTORY_SEPARATOR .'*');
  $patterns = apply_filters('df_block_patterns', $patterns);
  foreach ($patterns as $file) {
    $path_info = pathinfo(realpath($file));
    $parent_category = end(explode(DIRECTORY_SEPARATOR, $path_info['dirname']));

    $blockSlug = 'df/' . $parent_category . '-' . $path_info['filename'];
    $blockArray = require $file;

    register_block_pattern( $blockSlug, $blockArray );
  }
}

add_action('init', 'df_site_register_block', 9);
