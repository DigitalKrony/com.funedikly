<?php
/**
 * Main footer
 */

$content = '<footer id="footer" class="wp-block-group alignfull mt-0">
  <div class="wp-block-group alignwide">
    <p>All rights reserved &copy; '  . date("Y") .  ' Design:Funedikly.</p>
  </div>
</footer>';

return [
  'title' => __('Main Footer', 'df'),
  'categories' => ['footer'],
  'blockTypes' => ['core/template-part/footer'],
  'content' => $content,
];
