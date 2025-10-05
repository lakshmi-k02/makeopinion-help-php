<?php 
include './partials/header.php'; 
include './core/router.php'; // Add this line to include the router
?>

<main class="rm-Guides">
  <div class="rm-Container rm-Container_flex">
    <div id="mobile-overlay" hidden></div>
    <nav>
      <?php include './partials/nav.php'; ?>
    </nav>
    <article id="main-content">
      <?php route(); ?>
    </article>
  </div>
</main>

<footer aria-label="Status banner" class="Footer2U8XAPoGhlgO AppFooter rm-Banners"></footer>
<div class="ModalWrapper"></div>
<script src="scripts/accordion.js?sd=1"></script>
<script src="scripts/mobile-nav.js"></script>
</body>

</html>