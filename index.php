<?php
require_once __DIR__ . '/vendor/autoload.php';
$detect = new Detection\MobileDetect;
if ($detect->isMobile() || $detect->isTablet()) {
  include './partials/header-mobile.php';
  include './core/router.php'; // Add this line to include the router
  include './partials/main-mobile.php';
} else {
  include './partials/header-desktop.php';
  include './core/router.php'; // Add this line to include the router
  include './partials/main-desktop.php';
}
?>







