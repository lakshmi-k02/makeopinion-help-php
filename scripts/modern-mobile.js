/**
 * Modern Mobile-First JavaScript
 * Handles mobile navigation, touch interactions, and responsive behavior
 */

class ModernMobileApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileNavigation();
        this.setupTouchInteractions();
        this.setupSearch();
        this.setupThemeToggle();
        this.setupAccessibility();
        this.setupPerformanceOptimizations();
    }

    /**
     * Mobile Navigation Setup
     */
    setupMobileNavigation() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarClose = document.getElementById('sidebar-close');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const navToggles = document.querySelectorAll('.nav-toggle');

        // Mobile menu toggle
        if (mobileMenuToggle && sidebar) {
            mobileMenuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }

        // Sidebar close button
        if (sidebarClose && sidebar) {
            sidebarClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeMobileMenu();
            });
        }

        // Mobile overlay click to close
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        }

        // Navigation toggles for expandable sections
        navToggles.forEach(toggle => {
            // Do not re-bind if another script (modern-nav.js) manages this toggle
            if (toggle.dataset.managed === 'modern-nav') return;
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleNavSection(toggle);
            });
        });

        // Close mobile menu on window resize if desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.closeMobileMenu();
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

        if (sidebar && mobileOverlay && mobileMenuToggle) {
            const isOpen = sidebar.classList.contains('open');
            
            if (isOpen) {
                this.closeMobileMenu();
            } else {
                this.openMobileMenu();
            }
        }
    }

    openMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

        if (sidebar && mobileOverlay && mobileMenuToggle) {
            sidebar.classList.add('open');
            mobileOverlay.classList.add('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Focus management
            const firstFocusable = sidebar.querySelector('a, button');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        }
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

        if (sidebar && mobileOverlay && mobileMenuToggle) {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    toggleNavSection(toggle) {
        const navItem = toggle.closest('.nav-item-expandable');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        if (navItem) {
            if (isExpanded) {
                navItem.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                navItem.setAttribute('aria-expanded', 'true');
                toggle.setAttribute('aria-expanded', 'true');
            }
        }
    }

    /**
     * Touch Interactions
     */
    setupTouchInteractions() {
        // Add touch feedback to interactive elements
        const touchElements = document.querySelectorAll('a, button, .nav-link, .quick-link-card');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', (e) => {
                element.classList.add('touch-active');
            }, { passive: true });

            element.addEventListener('touchend', (e) => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            }, { passive: true });

            element.addEventListener('touchcancel', (e) => {
                element.classList.remove('touch-active');
            }, { passive: true });
        });

        // Swipe gestures for mobile navigation
        this.setupSwipeGestures();
    }

    setupSwipeGestures() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Swipe left to close sidebar (if open)
            if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    this.closeMobileMenu();
                }
            }
        }, { passive: true });
    }

    /**
     * Search Functionality
     */
    setupSearch() {
        const searchInput = document.getElementById('inline-search-input');
        const searchForm = document.getElementById('inline-search-form');
        const searchResults = document.getElementById('inline-search-results');

        // Also wire the global search modal input (used on mobile/header)
        const modalSearchInput = document.getElementById('search-input');
        const searchModal = document.getElementById('search-modal');
        const searchToggleButtons = document.querySelectorAll('[id*="search-toggle-button"]');
        const closeSearchButton = document.getElementById('close-search');

        // Initialize search data
        this.initializeSearchData();

        if (searchInput && searchForm) {
            // Search input focus handling
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('focused');
            });

            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('focused');
            });

            // Search form submission
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.performSearch(searchInput.value);
            });

            // Real-time search suggestions (basic implementation)
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                const query = e.target.value.trim();
                
                if (query.length > 2) {
                    searchTimeout = setTimeout(() => {
                        this.showSearchSuggestions(query);
                    }, 300);
                } else {
                    this.hideSearchSuggestions();
                }
            });
        }

        // Mobile search modal functionality
        if (modalSearchInput && searchModal) {
            // Search toggle buttons
            searchToggleButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openSearchModal();
                });
            });

            // Close search modal
            if (closeSearchButton) {
                closeSearchButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.closeSearchModal();
                });
            }

            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && searchModal.classList.contains('open')) {
                    this.closeSearchModal();
                }
            });

            // Close on backdrop click
            searchModal.addEventListener('click', (e) => {
                if (e.target === searchModal) {
                    this.closeSearchModal();
                }
            });

            // Real-time search in modal
            let modalSearchTimeout;
            modalSearchInput.addEventListener('input', (e) => {
                clearTimeout(modalSearchTimeout);
                const query = e.target.value.trim();
                
                if (query.length > 1) {
                    modalSearchTimeout = setTimeout(() => {
                        this.showModalSearchResults(query);
                    }, 200);
                } else {
                    this.hideModalSearchResults();
                }
            });

            // Handle Enter key in modal search
            modalSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = e.target.value.trim();
                    if (query) {
                        this.performSearch(query);
                        this.closeSearchModal();
                    }
                }
            });
        }
    }

    /**
     * Initialize search data from navigation structure
     */
    initializeSearchData() {
        this.searchData = [
            // Results Management
            { title: "Navigating the Results Page", page: "navigating-results-page", section: "Results Management", keywords: ["results", "navigation", "page", "view"] },
            
            // My Account
            { title: "Account Settings", page: "account-settings", section: "My Account", keywords: ["account", "settings", "profile"] },
            { title: "Project Overview", page: "project-overview", section: "My Account", keywords: ["project", "overview", "dashboard"] },
            { title: "Team Performance", page: "team-performance", section: "My Account", keywords: ["team", "performance", "stats"] },
            { title: "Sample Performance", page: "sample-performance", section: "My Account", keywords: ["sample", "performance", "quality"] },
            
            // Audience Management
            { title: "Using the Audience Page", page: "audience-overview", section: "Audience Management", keywords: ["audience", "page", "overview", "using"] },
            { title: "Create Audience", page: "create-audience", section: "Audience Management", keywords: ["create", "audience", "new", "setup"] },
            { title: "General Settings", page: "audience-general-settings", section: "Audience Management", keywords: ["general", "settings", "audience", "configuration"] },
            { title: "Audience Detail View", page: "x_audiencedetailview", section: "Audience Management", keywords: ["audience", "detail", "view", "specific"] },
            { title: "Standard Screeners", page: "standardquestions", section: "Audience Management", keywords: ["standard", "screeners", "questions", "default"] },
            { title: "Custom Screeners", page: "customscreeningquestions", section: "Audience Management", keywords: ["custom", "screeners", "questions", "personalized"] },
            { title: "Audience Eliminations", page: "audienceelimination", section: "Audience Management", keywords: ["audience", "eliminations", "remove", "exclude"] },
            { title: "Audience Recontacts", page: "audiencerecontacts", section: "Audience Management", keywords: ["audience", "recontacts", "follow-up", "repeat"] },
            { title: "Define Quotas", page: "quotas", section: "Audience Management", keywords: ["define", "quotas", "limits", "targets"] },
            { title: "NatRep Quotas", page: "national-representativity-quotas", section: "Audience Management", keywords: ["natrep", "quotas", "national", "representativity"] },
            { title: "NatRep Regional", page: "natrep-regional", section: "Audience Management", keywords: ["natrep", "regional", "geographic", "location"] },
            { title: "Interlocked Quotas", page: "interlocked-quotas", section: "Audience Management", keywords: ["interlocked", "quotas", "linked", "connected"] },
            { title: "Pause Quotas", page: "pausequotas", section: "Audience Management", keywords: ["pause", "quotas", "stop", "suspend"] },
            { title: "Soft Launch", page: "soft-launch", section: "Audience Management", keywords: ["soft", "launch", "test", "pilot"] },
            { title: "Project Deadlines", page: "project-deadline", section: "Audience Management", keywords: ["project", "deadlines", "due", "dates"] },
            { title: "Start Stop Time", page: "scheduledaudience", section: "Audience Management", keywords: ["start", "stop", "time", "schedule"] },
            { title: "Response Limits", page: "completionscheduler", section: "Audience Management", keywords: ["response", "limits", "completion", "scheduler"] }
        ];
    }

    /**
     * Search modal functionality
     */
    openSearchModal() {
        const searchModal = document.getElementById('search-modal');
        const searchInput = document.getElementById('search-input');
        
        if (searchModal) {
            searchModal.classList.add('open');
            document.body.style.overflow = 'hidden';
            
            // Focus search input after modal opens
            setTimeout(() => {
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        }
    }

    closeSearchModal() {
        const searchModal = document.getElementById('search-modal');
        const searchInput = document.getElementById('search-input');
        
        if (searchModal) {
            searchModal.classList.remove('open');
            document.body.style.overflow = '';
            
            // Clear search input and results
            if (searchInput) {
                searchInput.value = '';
            }
            this.hideModalSearchResults();
        }
    }

    /**
     * Show search results in modal
     */
    showModalSearchResults(query) {
        const results = this.searchData.filter(item => {
            const searchText = `${item.title} ${item.section} ${item.keywords.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        this.renderModalSearchResults(results, query);
    }

    /**
     * Hide search results in modal
     */
    hideModalSearchResults() {
        const resultsContainer = document.getElementById('search-results-container');
        if (resultsContainer) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
        }
    }

    /**
     * Render search results in modal
     */
    renderModalSearchResults(results, query) {
        let resultsContainer = document.getElementById('search-results-container');
        
        if (!resultsContainer) {
            // Create results container if it doesn't exist
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'search-results-container';
            resultsContainer.className = 'search-results-container';
            
            const searchBox = document.querySelector('.SearchBox1zrymSLJX6TP');
            if (searchBox && searchBox.parentNode) {
                searchBox.parentNode.insertBefore(resultsContainer, searchBox.nextSibling);
            }
        }

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <div class="search-no-results-icon">ðŸ”</div>
                    <div class="search-no-results-text">No results found for "${query}"</div>
                    <div class="search-no-results-suggestion">Try different keywords or check spelling</div>
                </div>
            `;
        } else {
            const resultsHtml = results.map(item => `
                <div class="search-result-item" data-page="${item.page}">
                    <div class="search-result-title">${this.highlightSearchTerm(item.title, query)}</div>
                    <div class="search-result-section">${item.section}</div>
                    <div class="search-result-keywords">${item.keywords.slice(0, 3).join(', ')}</div>
                </div>
            `).join('');

            resultsContainer.innerHTML = `
                <div class="search-results-header">
                    <div class="search-results-count">${results.length} result${results.length !== 1 ? 's' : ''} found</div>
                </div>
                <div class="search-results-list">
                    ${resultsHtml}
                </div>
            `;

            // Add click handlers to result items
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const page = item.dataset.page;
                    this.navigateToPage(page);
                    this.closeSearchModal();
                });
            });
        }

        resultsContainer.style.display = 'block';
    }

    /**
     * Highlight search terms in text
     */
    highlightSearchTerm(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    /**
     * Navigate to a specific page
     */
    navigateToPage(page) {
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set('page', page);
        window.location.href = currentUrl.toString();
    }

    performSearch(query) {
        if (query.trim()) {
            // Navigate to server-side search route so results can be rendered
            const url = window.location.pathname + '?page=search&q=' + encodeURIComponent(query.trim());
            window.location.href = url;
        }
    }

    showSearchSuggestions(query) {
        // Basic search suggestions - can be enhanced with actual data
        const suggestions = [
            'Create Audience',
            'Audience Settings',
            'Standard Questions',
            'Results Navigation'
        ].filter(item => item.toLowerCase().includes(query.toLowerCase()));

        if (suggestions.length > 0) {
            console.log('Search suggestions:', suggestions);
            // Implement suggestion display logic here
        }
    }

    hideSearchSuggestions() {
        // Hide search suggestions
    }

    showSearchResults(query) {
        // Show search results
        console.log('Showing results for:', query);
    }

    /**
     * Theme Toggle
     */
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle-button');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle-button');
        
        // Desktop theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Mobile theme toggle
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Initialize theme from localStorage or system preference
        this.initializeTheme();

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                const storedTheme = localStorage.getItem('color-scheme');
                if (storedTheme === 'system' || !storedTheme) {
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    initializeTheme() {
        const storedTheme = localStorage.getItem('color-scheme');
        let theme = 'light'; // default

        if (storedTheme) {
            if (storedTheme === 'system') {
                theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            } else {
                theme = storedTheme;
            }
        } else {
            // Check system preference if no stored theme
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = 'dark';
            }
        }

        this.applyTheme(theme);
    }

    toggleTheme() {
        const currentMode = document.documentElement.getAttribute('data-color-mode');
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        
        this.applyTheme(newMode);
        localStorage.setItem('color-scheme', newMode);
        
        // Announce theme change to screen readers
        this.announceToScreenReader(`Switched to ${newMode} mode`);
    }

    applyTheme(mode) {
        document.documentElement.setAttribute('data-color-mode', mode);
        
        // Update theme color meta tag
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = mode === 'dark' ? '#0f0f23' : '#7250ba';
        }
        
        // Add smooth transition class
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }

    /**
     * Accessibility Enhancements
     */
    setupAccessibility() {
        // Skip to content link
        const skipLink = document.querySelector('a[href="#content"]');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const content = document.getElementById('main-content');
                if (content) {
                    content.focus();
                    content.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Keyboard navigation for mobile menu
        document.addEventListener('keydown', (e) => {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                if (e.key === 'Tab') {
                    this.handleTabNavigation(e, sidebar);
                }
            }
        });

        // Announce dynamic content changes to screen readers
        this.setupLiveRegions();
    }

    handleTabNavigation(e, sidebar) {
        const focusableElements = sidebar.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    setupLiveRegions() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    }

    /**
     * Performance Optimizations
     */
    setupPerformanceOptimizations() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Debounce scroll events
        this.setupScrollOptimizations();
        
        // Preload critical resources
        this.preloadCriticalResources();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupScrollOptimizations() {
        let ticking = false;
        
        const updateScrollPosition = () => {
            // Handle scroll-based animations or effects
            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }

    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'styles/modern-framework.css',
            'styles/styles.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernMobileApp();
});

// Add touch feedback styles
const touchStyles = `
.touch-active {
    transform: scale(0.98);
    opacity: 0.8;
}

.focused .search-input {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(114, 80, 186, 0.1);
}

@media (prefers-reduced-motion: reduce) {
    .touch-active {
        transform: none;
        opacity: 1;
    }
}
`;

// Inject touch styles
const styleSheet = document.createElement('style');
styleSheet.textContent = touchStyles;
document.head.appendChild(styleSheet);