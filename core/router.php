<?php
function route() {
    // Define all allowed page slugs and their corresponding files
    $allowedPages = [
        'home',
        'createaudience',
        'softlaunch',
        'customdeadlines',
        'editaudience',
        'scheduledaudience',
        'standardquestions',
        'navigatingaudiencelist',
        'completionscheduler',
        'audiencerecontacts',
        'audienceelimination',
        'audiencedetailview',
        'customscreeningquestions'
    ];

    $page = $_GET['page'] ?? 'home';

    if (in_array($page, $allowedPages)) {
        include "views/{$page}.php";
    } else {
        include "views/404.php";
    }
}
