<?php
$nav_items = [
    [
        "section" => "Results Management",
        "items" => [
            ["label" => "Navigating the Results Page", "page" => "navigating-results-page"],
            // Add more as needed
        ]
    ],
    [
        "section" => "My Account",
        "items" => [
            ["label" => "Account Settings", "page" => "account-settings"],
            [
                "label" => "Account Overview",
                "submenu" => [
                    ["label" => "Project Overview", "page" => "project-overview"],
                    ["label" => "Team Performance", "page" => "team-performance"],
                    ["label" => "Sample Performance", "page" => "sample-performance"]
                ]
            ]
            // Add more as needed
        ]
    ],
    [
        "section" => "Audience Management",
        "items" => [
            ["label" => "Using the Audience Page", "page" => "audience-overview"],
            [
                "label" => "Creating Edit Audiences",
                "submenu" => [
                    ["label" => "Create Audience", "page" => "create-audience"],
                    ["label" => "General Settings", "page" => "audience-general-settings"],
                    ["label" => "Audience Detail View", "page" => "x_audiencedetailview"]
                ]
            ],
            [
                "label" => "Audience Targeting",
                "submenu" => [
                    ["label" => "Standard Screeners", "page" => "standardquestions"],
                    ["label" => "Custom Screeners", "page" => "customscreeningquestions"],
                    ["label" => "Audience Eliminations", "page" => "audienceelimination"],
                    ["label" => "Audience Recontacts", "page" => "audiencerecontacts"]
                ]
            ],
            [
                "label" => "Quotas",
                "submenu" => [
                    ["label" => "Define Quotas", "page" => "quotas"],
                    ["label" => "NatRep Quotas", "page" => "natrepquotas"],
                    ["label" => "Interlocked Quotas", "page" => "interlockedquotas"],
                    ["label" => "Pause Quotas", "page" => "pausequotas"]
                ]
            ],
            [
                "label" => "Audience Scheduling",
                "submenu" => [
                    ["label" => "Soft Launch", "page" => "soft-launch"],
                    ["label" => "Project Deadlines", "page" => "project-deadline"],
                    ["label" => "Start Stop Time", "page" => "scheduledaudience"],
                    ["label" => "Response Limits", "page" => "completionscheduler"]
                ]
            ]
        ]
    ]
];
