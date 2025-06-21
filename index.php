<?php 
include './partials/header.php'; 
include './core/router.php'; // Add this line to include the router
?>

<main class="rm-Guides">
  <div class="rm-Container rm-Container_flex">
  <nav>
    <?php include './partials/nav.php'; ?>
  </nav>
  </div>
  <article id="main-content">
    <?php route(); ?>
  </article>
</main>

<footer aria-label="Status banner" class="Footer2U8XAPoGhlgO AppFooter rm-Banners"></footer>
<div class="ModalWrapper"></div>
<script src="scripts/accordion.js"></script>
</body>

</html>