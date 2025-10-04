<?php
function route() {
    // Define all allowed page slugs and their corresponding files
    $allowedPages = [
        'home',
        'create-audience',
        'soft-launch',
        'customdeadlines',
        'audience-general-settings',
        'scheduledaudience',
        'standardquestions',
        'completionscheduler',
        'audiencerecontacts',
        'audienceelimination',
        'audience-overview',
        'customscreeningquestions',
        'navigating-results-page'
    ];

    $page = $_GET['page'] ?? 'home';

    if (in_array($page, $allowedPages)) {
        include "views/{$page}.php";
    } else {
        include "views/404.php";
    }
}
