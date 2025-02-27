<?php
/**
 * Default header
 */

$content = '
<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:group -->
  <div class="wp-block-group">

    <!-- wp:group {"layout":{"type":"flex"}} -->
    <div class="wp-block-group">
      <!-- wp:site-logo /-->
      <!-- wp:site-title /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:navigation -->
      <!-- wp:page-list {"isNavigationChild":true,"showSubmenuIcon":true,"openSubmenusOnClick":false} /-->
    <!-- /wp:navigation -->

  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->';

return [
  'title' => __('Default Header', 'df'),
  'categories' => ['header'],
  'blockTypes' => ['core/template-part/header'],
  'content' => $content,
];
