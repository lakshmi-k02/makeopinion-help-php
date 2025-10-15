<!DOCTYPE html>
<html lang="en" class="w-mod-js w-mod-ix" data-lt-installed="true">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="MakeOpinion Help Center - Find answers, guides, and resources to help you use MakeOpinion Next">
    <meta name="theme-color" content="#7250ba">
    
    <?php
    // Dynamically generate base URL
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
    $host = $_SERVER['HTTP_HOST'];
    $server = $protocol . $host;
    $base_path = $server . '/assets';
    // Get the current page address
    $current_page = $_SERVER['REQUEST_URI'];
    ?>
    <title>Help-Center</title>
    
    <!-- Modern CSS Framework -->
    <link rel="stylesheet" href="styles/modern-framework.css">
    <link rel="stylesheet" href="styles/styles-mobile.css">
    <link rel="stylesheet" href="styles/responsive-mobile.css">
    <!-- <link rel="stylesheet" href="styles/ui-styles.css"> -->
    <!-- <link rel="stylesheet" href="styles/ui-header.css"> -->
    <!-- <link rel="stylesheet" href="styles/ui-main.css"> -->
    <!-- <link rel="stylesheet" href="styles/ui-footer.css"> -->
    <!-- <link rel="stylesheet" href="styles/ui-routes.css"> -->
    

    <!-- control dark theme and light theme -->
    <script>
        var storedColorMode = localStorage.getItem('color-scheme') || 'system';
        document.documentElement.setAttribute('data-color-mode', storedColorMode);
    </script>

    <!-- Mobile JavaScript -->
    <!-- <script src="scripts/accordion.js"></script> -->
    <script src="scripts/modern-mobile.js"></script>

</head>

<body
    class="body-none theme-line header-solid header-bg-size-auto header-bg-pos-tl header-overlay-triangles reference-layout-row lumosity-normal ">
    
    <div id="ssr-main">
        <div class="App ThemeContext ThemeContext_dark ThemeContext_line"
            style="--color-primary:#7250ba;--color-primary-inverse:#fff;--color-primary-alt:#4b2796;--color-primary-darken-10:#5b3d9a;--color-primary-darken-20:#452e76;--color-primary-alpha-25:rgba(114, 80, 186, 0.25);--color-link-primary:#7250ba;--color-link-primary-darken-5:#6644ac;--color-link-primary-darken-10:#5b3d9a;--color-link-primary-darken-20:#452e76;--color-link-primary-alpha-50:rgba(114, 80, 186, 0.5);--color-link-primary-alpha-25:rgba(114, 80, 186, 0.25);--color-link-background:rgba(114, 80, 186, 0.09);--color-link-text:#fff;--color-login-link:#018ef5;--color-login-link-text:#fff;--color-login-link-darken-10:#0171c2;--color-login-link-primary-alpha-50:rgba(1, 142, 245, 0.5)">
            <header class="Header3zzata9F_ZPQ rm-Header Header-links-buttons">
                <div class="rm-Header-top Header-topuTMpygDG4e1V">
                    <div class="rm-Container rm-Container_flex">
                        <div style="outline:none" tabindex="-1"><a href="#content" target="_self"
                                class="Button Button_md rm-JumpTo Header-jumpTo3IWKQXmhSI5D Button_primary">Jump to
                                Content</a></div>
                        <div class="rm-Header-left Header-leftADQdGVqx1wqU"><a class="rm-Logo Header-logo1Xy41PtkzbdG"
                                href="https://www.MakeOpinion.com" target="_self"><img alt="MakeOpinion"
                                    class="rm-Logo-img  Header-logo-img3YvV4lcGKkeb" src="images/logo.svg" /></a><a
                                aria-current="page"
                                class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text rm-Header-top-link_active Header-link2tXYTgXq85zW"
                                href="" target="_self">Documentation</a></div>
                        <div class="rm-Header-left Header-leftADQdGVqx1wqU Header-left_mobile1RG-X93lx6PF">
                            <div class="Header-left-nav2xWPWMNHOGf_"><i
                                    class="icon-guides Header-left-nav-icon10glJKFwewOv"></i>Documentation</div>
                        </div>
                        <div class="rm-Header-right Header-right21PC2XTT6aMg">

                            <span
                                class="Header-right_desktop14ja01RUQ7HE"><a
                                    class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text Header-link2tXYTgXq85zW"
                                    href="<?php echo $server; ?>?page=home" target="_self"
                                    to="<?php echo $server; ?>">Home</a>
                            </span>
                            <a class="theme-toggle" href="<?php echo $server; ?>?page=home" aria-label="Go to Help Home">
                                <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 12l9-8 9 8"></path>
                                    <path d="M9 22V12h6v10"></path>
                                </svg>
                            </a>
                            <button class="theme-toggle" id="theme-toggle-button" aria-label="Toggle theme" type="button">
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
                            <button aria-label="Toggle navigation menu" class="icon-menu menu3d6DYNDa3tk5 mobile-only" aria-controls="hub-sidebar" aria-expanded="false" type="button"></button>
                            <div class="Header-searchtb6Foi0-D9Vx"><button aria-label="Search ⌘k"
                                    class="rm-SearchToggle" data-symbol="⌘" id="search-toggle-button">
                                    <div class="rm-SearchToggle-icon icon-search1"></div>
                                </button></div>
                        </div>
                    </div>
                </div>
                <div class="Header-bottom2eLKOFXMEmh5 rm-Header-bottom  ">
                    <div class="rm-Container rm-Container_flex">
                        <nav aria-label="Primary navigation" class="Header-leftADQdGVqx1wqU Header-subnavnVH8URdkgvEl"
                            role="navigation">
                            <div class="rm-NavLinksDropdown Dropdown Dropdown_closed" data-testid="dropdown-container">
                                <div class="Dropdown-toggle" aria-haspopup="dialog"><button
                                        class="rm-Header-link rm-Header-bottom-link undefined Button Button_slate_text Button_md"
                                        type="button"><span>Documentation</span><i
                                            class="undefined icon-chevron-down"></i></button></div>
                            </div><span
                                class="rm-Header-link rm-Header-bottom-link undefined NavItem_inactive1YE6SGanIJp5">Getting
                                started</span>
                        </nav><button align="center" justify="between" style="--flex-gap:var(--xs)"
                            class="Button Button_sm Flex Flex_row MobileSubnav1DsTfasXloM2 Button_contrast Button_contrast_outline"
                            type="button"><span class="Button-label">Getting started</span><span
                                class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24"
                                    class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a" data-name="chevron-up-down"
                                    role="img" style="--icon-color:inherit;--icon-size:inherit;--icon-stroke-width:2px">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        d="m6 16 6 6 6-6M18 8l-6-6-6 6" class="icon-stroke-width"></path>
                                </svg></span></button>
                        <div class="Header-search-placeholder3Vx4OmMPcjAi rm-SearchToggle-placeholder" style="position: absolute; right: 20px; top: 78%; transform: translateY(-50%);">
                            <button aria-label="Search ⌘k" class="rm-SearchToggle" data-symbol="⌘" id="search-toggle-button-mobile">
                                <div class="rm-SearchToggle-icon icon-search1"></div>
                                <div class="Header-search-placeholder3Vx4OmMPcjAi rm-SearchToggle-placeholder">Search
                                </div>
                                <div class="rm-SearchToggle-shortcut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Search Modal -->
            <div class="rm-SearchModal" id="search-modal">
                <button class="close-search" id="close-search">×</button>
                <div class="AlgoliaSearch-Col2ycAQ9JMrSYg">
                    <div class="SearchBox1zrymSLJX6TP">
                        <input aria-label="Search" autocapitalize="off" autocomplete="off" autocorrect="off"
                            spellcheck="false" tabindex="0" aria-required="false"
                            class="Input Input_md Input_touched SearchBox-InputUQZAW9QXMe-c"
                            type="search" value="" placeholder="Search documentation..." id="search-input">
                    </div>
                    <div class="SearchTabs9v4kr3U2lwvI">
                        <div class="Tabs Tabs-list" role="tablist">
                            <div aria-label="All" aria-selected="true"
                                class="SearchTabs-Tab2715KRxrb5JT Tabs-listItem Tabs-listItem_active"
                                role="tab" tabindex="-1">
                                <span class="SearchTabs-Tab2715KRxrb5JT">
                                    <i class="icon icon-search1"></i>All
                                </span>
                            </div>
                            <div aria-label="Guides" aria-selected="false"
                                class="SearchTabs-Tab2715KRxrb5JT Tabs-listItem"
                                role="tab" tabindex="-1">
                                <span class="SearchTabs-Tab2715KRxrb5JT">
                                    <i class="icon icon-guides"></i>Documentation
                                </span>
                            </div>
                            <div aria-label="Changelog" aria-selected="false"
                                class="SearchTabs-Tab2715KRxrb5JT Tabs-listItem"
                                role="tab" tabindex="-1">
                                <span class="SearchTabs-Tab2715KRxrb5JT">
                                    <i class="icon icon-changelog"></i>Changelog
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>