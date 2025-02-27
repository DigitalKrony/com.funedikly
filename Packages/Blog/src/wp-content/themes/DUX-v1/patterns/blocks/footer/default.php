<?php
/**
 * Default footer
 */

$content = '
<!-- wp:group -->
<div class="wp-block-group">

  <!-- wp:group -->
  <div class="wp-block-group">

    <!-- wp:site-title {"level":0} /-->
    <!-- wp:paragraph -->
    <p class="has-text-align-right">Design:Funedikly</p>
    <!-- /wp:paragraph -->

  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->';

return [
  'title' => __('Default Footer', 'df'),
  'categories' => ['footer'],
  'blockTypes' => ['core/template-part/footer'],
  'content' => $content,
];
