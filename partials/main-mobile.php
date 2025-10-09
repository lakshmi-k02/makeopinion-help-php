<main class="main-layout">
  <div class="mobile-overlay" id="mobile-overlay" aria-hidden="true"></div>

  <!-- Mobile Header -->
  <header class="mobile-header">
    <div class="container">
      <div class="flex items-center justify-between">
        <a href="https://www.MakeOpinion.com" class="logo">
          <img src="images/logo.svg" alt="MakeOpinion" class="logo-img">
        </a>
        <div class="mobile-header-actions">
          <a class="theme-toggle" href="?page=home" aria-label="Go to Help Home">
            <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12l9-8 9 8"></path>
              <path d="M9 22V12h6v10"></path>
            </svg>
          </a>
          <button class="theme-toggle mobile-theme-toggle" id="mobile-theme-toggle-button" aria-label="Toggle theme" type="button">
            <svg class="theme-icon theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg class="theme-icon theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div class="layout-container">
    <!-- Sidebar Navigation -->
    <aside class="sidebar" id="sidebar" aria-label="Main navigation">
      <div class="sidebar-header">
        <div class="flex items-center justify-between">
          <h2 class="sidebar-title">Documentation</h2>
          <button class="sidebar-close" id="sidebar-close" aria-label="Close navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <nav class="sidebar-nav">
        <?php include './partials/nav-mobile.php'; ?>
      </nav>
    </aside>

    <!-- Main Content -->
    <article class="main-content" id="main-content">
      <div class="content-wrapper">
        <?php route(); ?>
      </div>
    </article>
  </div>
</main>

<footer aria-label="Status banner" class="Footer2U8XAPoGhlgO AppFooter rm-Banners"></footer>
<div class="ModalWrapper"></div>
<script src="scripts/accordion.js?sd=1"></script>
<script src="scripts/mobile-nav.js"></script>
<script src="scripts/modern-mobile.js"></script>
</body>

</html>