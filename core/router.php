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
    // Nothing found
    require __DIR__ . '/../views/404.php';
}
?>
