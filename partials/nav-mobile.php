<?php
include './content/nav-structure.php';
?>

<nav class="modern-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-sections">
    <?php foreach ($nav_items as $section): ?>
      <section class="nav-section">
        <h3 class="nav-section-title"><?= htmlspecialchars($section['section']) ?></h3>
        <ul class="nav-list">
          <?php foreach ($section['items'] as $item): ?>
            <?php if (isset($item['submenu'])): ?>
              <li class="nav-item nav-item-expandable">
                <button class="nav-toggle" aria-expanded="false" aria-label="Toggle <?= htmlspecialchars($item['label']) ?> submenu">
                  <span class="nav-link-text"><?= htmlspecialchars($item['label']) ?></span>
                  <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,6 15,12 9,18"></polyline>
                  </svg>
                </button>
                <ul class="nav-submenu">
                  <?php foreach ($item['submenu'] as $sub): ?>
                    <li class="nav-item">
                      <a href="?page=<?= urlencode($sub['page']) ?>" class="nav-link nav-link--submenu">
                        <span class="nav-link-text"><?= htmlspecialchars($sub['label']) ?></span>
                      </a>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </li>
            <?php else: ?>
              <li class="nav-item">
                <a href="?page=<?= urlencode($item['page']) ?>" class="nav-link">
                  <span class="nav-link-text"><?= htmlspecialchars($item['label']) ?></span>
                </a>
              </li>
            <?php endif; ?>
          <?php endforeach; ?>
        </ul>
      </section>
    <?php endforeach; ?>
  </div>
</nav>
