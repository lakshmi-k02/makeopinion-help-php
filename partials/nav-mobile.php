<nav class="modern-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-sections">
        <!-- Results Management Section -->
        <section class="nav-section">
            <h3 class="nav-section-title">Results Management</h3>
            <ul class="nav-list">
                <?php $pagename = "navigating-results-page"; ?>
                <li class="nav-item">
                    <a href="?page=<?php echo $pagename; ?>" 
                       class="nav-link <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                        <span class="nav-link-text">Navigating the Results Page</span>
                    </a>
                </li>
            </ul>
        </section>

        <!-- My Account Section -->
        <section class="nav-section">
            <h3 class="nav-section-title">My Account</h3>
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <span class="nav-link-text">Account Settings</span>
                    </a>
                </li>
                <li class="nav-item nav-item-expandable">
                    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle Account Overview submenu">
                        <span class="nav-link-text">Account Overview</span>
                        <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,6 15,12 9,18"></polyline>
                        </svg>
                    </button>
                    <ul class="nav-submenu">
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Project Overview</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Team Performance</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Sample Performance</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <!-- Audience Management Section -->
        <section class="nav-section">
            <h3 class="nav-section-title">Audience Management</h3>
            <ul class="nav-list">
                <?php $pagename = "audience-overview"; ?>
                <li class="nav-item">
                    <a href="?page=<?php echo $pagename; ?>" 
                       class="nav-link <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                        <span class="nav-link-text">Using the Audience Page</span>
                    </a>
                </li>

                <!-- Creating / Edit Audiences -->
                <li class="nav-item nav-item-expandable">
                    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle Creating / Edit Audiences submenu">
                        <span class="nav-link-text">Creating / Edit Audiences</span>
                        <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,6 15,12 9,18"></polyline>
                        </svg>
                    </button>
                    <ul class="nav-submenu">
                        <?php $pagename = "create-audience"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Create Audience</span>
                            </a>
                        </li>
                        <?php $pagename = "audience-general-settings"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">General Settings</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Audience Scheduling -->
                <li class="nav-item nav-item-expandable">
                    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle Audience Scheduling submenu">
                        <span class="nav-link-text">Audience Scheduling</span>
                        <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,6 15,12 9,18"></polyline>
                        </svg>
                    </button>
                    <ul class="nav-submenu">
                        <?php $pagename = "soft-launch"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Soft Launch</span>
                            </a>
                        </li>
                        <?php $pagename = "customdeadlines"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Project Deadline</span>
                            </a>
                        </li>
                        <?php $pagename = "scheduledaudience"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Start / Stop Time</span>
                            </a>
                        </li>
                        <?php $pagename = "completionscheduler"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Response Limits</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Audience Targeting -->
                <li class="nav-item nav-item-expandable">
                    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle Audience Targeting submenu">
                        <span class="nav-link-text">Audience Targeting</span>
                        <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,6 15,12 9,18"></polyline>
                        </svg>
                    </button>
                    <ul class="nav-submenu">
                        <?php $pagename = "standardquestions"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Standard Screeners</span>
                            </a>
                        </li>
                        <?php $pagename = "customscreeningquestions"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Custom Screeners</span>
                            </a>
                        </li>
                        <?php $pagename = "audienceelimination"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Audience Eliminations</span>
                            </a>
                        </li>
                        <?php $pagename = "audiencerecontacts"; ?>
                        <li class="nav-item">
                            <a href="?page=<?php echo $pagename; ?>" 
                               class="nav-link nav-link-sub <?php echo (isset($_GET['page']) && $_GET['page'] == $pagename) ? 'active' : ''; ?>">
                                <span class="nav-link-text">Audience Recontacts</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Quotas -->
                <li class="nav-item nav-item-expandable">
                    <button class="nav-toggle" aria-expanded="false" aria-label="Toggle Quotas submenu">
                        <span class="nav-link-text">Quotas</span>
                        <svg class="nav-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,6 15,12 9,18"></polyline>
                        </svg>
                    </button>
                    <ul class="nav-submenu">
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Define Quotas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">NatRep Quotas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Interlocked Quotas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-link-sub">
                                <span class="nav-link-text">Pause Quotas</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</nav>