<?php
$page = $_GET['page'] ?? 'home';


// Build search patterns
$searchPatterns = [
    // Priority: exact matching PHP files in views/content
    __DIR__ . "/../views/{$page}.php",
    __DIR__ . "/../content/{$page}.php",
    // Support legacy "-content" files (optional)
    __DIR__ . "/../content/{$page}-content.php",
];

// Initialize as not found
$foundFile = null;
$isContent = false;

// Find the first existing file
foreach ($searchPatterns as $pattern) {
    if (file_exists($pattern)) {
        $foundFile = $pattern;
        // Mark as content if it's from content folder
        $isContent = strpos($pattern, '/content/') !== false;
        break;
    }
}

if ($foundFile && !$isContent) {
    // Custom View found
    require $foundFile;
} else if ($foundFile && $isContent) {
    // Content file found—use generic template
    $content = require $foundFile;
    require __DIR__ . '/../views/generic.php';
} else {
    // Nothing found. Check if the requested page exists in the site's navigation.
    $navFile = __DIR__ . '/../content/nav-structure.php';
    $pageInNav = false;

    if (file_exists($navFile)) {
        // load nav items into $nav_items
        $nav_items = require $navFile;
        // nav-structure.php in this repo returns $nav_items via direct include (it defines $nav_items),
        // but to be robust, handle both patterns (array return or defined variable)
        if (!isset($nav_items) || !is_array($nav_items)) {
            // try including file and capturing $nav_items
            include $navFile;
        }

        // traverse nav structure to find any 'page' keys
        $collectPages = function ($items) use (&$collectPages) {
            $pages = [];
            if (!is_array($items)) return $pages;
            foreach ($items as $entry) {
                if (isset($entry['page'])) {
                    $pages[] = $entry['page'];
                }
                if (isset($entry['items'])) {
                    $pages = array_merge($pages, $collectPages($entry['items']));
                }
                if (isset($entry['submenu'])) {
                    $pages = array_merge($pages, $collectPages($entry['submenu']));
                }
            }
            return $pages;
        };

        $allNavPages = $collectPages($nav_items ?? []);
        $pageInNav = in_array($page, $allNavPages, true);
    }

    if ($pageInNav) {
        // Page is declared in navigation but missing a view — show under-construction
        // make $page available to the view
        require __DIR__ . '/../views/under-construction.php';
    } else {
        // Page not found in nav either — show 404
        require __DIR__ . '/../views/404.php';
    }
}
?>
