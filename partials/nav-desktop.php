<?php
include './content/nav-structure.php';
?>

<nav aria-label="Secondary navigation"
    class="rm-Sidebar hub-sidebar reference-redesign Nav3C5f8FcjkaHj rm-Sidebar_guides"
    id="hub-sidebar" role="navigation">
    <div class="Sidebar1t2G1ZJq-vU1 rm-Sidebar hub-sidebar-content">
        <div class="space-y-1">
            <div class="Sidebar1t2G1ZJq-vU1 rm-Sidebar hub-sidebar-content">
                <?php foreach ($nav_items as $section): ?>
                <section class="Sidebar-listWrapper6Q9_yUrG906C rm-Sidebar-section">
                    <h2 class="Sidebar-headingTRQyOa2pk0gh rm-Sidebar-heading"><?= htmlspecialchars($section['section']) ?></h2>
                    <ul class="Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">
                        <?php foreach ($section['items'] as $item): ?>
                            <?php if (isset($item['submenu'])): ?>
                                <li class="Sidebar-item23D-2Kd61_k3 subnav-expanded">
                                    <a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link"
                                        target="_self" href=""
                                        aria-current="page">
                                        <span class="Sidebar-link-textLuTE1ySm4Kqn">
                                            <span class="Sidebar-link-text_label1gCT_uPnx7Gu"><?= htmlspecialchars($item['label']) ?></span>
                                        </span>
                                        <button aria-expanded="true"
                                            aria-label="Hide subpages for <?= htmlspecialchars($item['label']) ?>"
                                            class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button">
                                            <i aria-hidden="true"
                                                class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW fas fa-chevron-right"
                                                style="font-size: 0.85em;"></i>
                                        </button>
                                    </a>
                                    <ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list">
                                        <?php foreach ($item['submenu'] as $sub): ?>
                                            <li class="Sidebar-item23D-2Kd61_k3">
                                                <a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] == $sub['page']) ? 'active' : ''; ?>"
                                                    target="_self" href="?page=<?= urlencode($sub['page']) ?>">
                                                    <span class="Sidebar-link-textLuTE1ySm4Kqn">
                                                        <span class="Sidebar-link-text_label1gCT_uPnx7Gu"><?= htmlspecialchars($sub['label']) ?></span>
                                                    </span>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </li>
                            <?php else: ?>
                                <li class="Sidebar-item23D-2Kd61_k3">
                                    <a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link <?php echo (isset($_GET['page']) && $_GET['page'] == $item['page']) ? 'active' : ''; ?>"
                                        target="_self"
                                        href="?page=<?= urlencode($item['page']) ?>">
                                        <span class="Sidebar-link-textLuTE1ySm4Kqn">
                                            <span class="Sidebar-link-text_label1gCT_uPnx7Gu"><?= htmlspecialchars($item['label']) ?></span>
                                        </span>
                                    </a>
                                </li>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </ul>
                </section>
                <?php endforeach; ?>

                <button aria-label="Hide sidebar navigation" class="Nav-toggle-collapse39KxgTH727KL"
                    type="button"></button>
            </div>
        </div>
    </div>
</nav>