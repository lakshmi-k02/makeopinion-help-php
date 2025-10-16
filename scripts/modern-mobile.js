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
    }

    // Search data structure with all available help articles
    getSearchData() {
        return [
            {
                title: "Create Audience",
                description: "Learn how to create and manage your target audiences",
                url: "?page=create-audience",
                content: "Define the target respondents for your survey by selecting country, completes, and audience name. Creates a scoped audience group tied to the project. Can be duplicated and customized later. Acts as a foundation for applying further targeting and quota settings.",
                category: "Audience Management"
            },
            {
                title: "Using the Audience Page",
                description: "Understand how to navigate and use the audience page",
                url: "?page=audience-overview",
                content: "Navigate through your audience management interface. View and manage all your audience settings in one place.",
                category: "Audience Management"
            },
            {
                title: "General Settings",
                description: "Configure general audience settings and preferences",
                url: "?page=audience-general-settings",
                content: "Set up general preferences and configurations for your audience. Manage basic settings that apply to all audience members.",
                category: "Audience Management"
            },
            {
                title: "Soft Launch",
                description: "Set up and manage soft launch for your audience",
                url: "?page=soft-launch",
                content: "Configure soft launch settings to test your audience before full deployment. Manage launch timing and parameters.",
                category: "Audience Scheduling"
            },
            {
                title: "Project Deadline",
                description: "Set custom deadlines for your project",
                url: "?page=customdeadlines",
                content: "Define project deadlines and timeline management. Set custom completion dates and manage project scheduling.",
                category: "Audience Scheduling"
            },
            {
                title: "Start / Stop Time",
                description: "Configure when your audience starts and stops",
                url: "?page=scheduledaudience",
                content: "Set up start and stop times for your audience. Schedule when your audience becomes active and inactive.",
                category: "Audience Scheduling"
            },
            {
                title: "Response Limits",
                description: "Set limits on audience responses",
                url: "?page=completionscheduler",
                content: "Configure response limits and completion settings. Manage how many responses your audience can provide.",
                category: "Audience Scheduling"
            },
            {
                title: "Standard Screeners",
                description: "Set up standard screening questions for your surveys",
                url: "?page=standardquestions",
                content: "Configure standard screening questions that apply to all surveys. Set up common demographic and qualification questions.",
                category: "Audience Targeting"
            },
            {
                title: "Custom Screeners",
                description: "Create custom screening questions for specific needs",
                url: "?page=customscreeningquestions",
                content: "Design custom screening questions tailored to your specific research needs. Create unique qualification criteria.",
                category: "Audience Targeting"
            },
            {
                title: "Audience Eliminations",
                description: "Manage audience elimination rules and criteria",
                url: "?page=audienceelimination",
                content: "Set up rules for eliminating audience members based on specific criteria. Manage exclusion rules and filters.",
                category: "Audience Targeting"
            },
            {
                title: "Audience Recontacts",
                description: "Manage recontact settings for your audience",
                url: "?page=audiencerecontacts",
                content: "Configure recontact settings and manage follow-up communications with your audience members.",
                category: "Audience Targeting"
            },
            {
                title: "Navigating the Results Page",
                description: "Learn how to navigate and interpret your results",
                url: "?page=navigating-results-page",
                content: "Understand how to navigate through your survey results. Learn to interpret data and find insights in your research findings.",
                category: "Results Management"
            }
        ];
    }

    performSearch(query) {
        if (query.trim()) {
            const searchData = this.getSearchData();
            const results = this.searchArticles(searchData, query);
            this.showSearchResults(query, results);
        }
    }

    searchArticles(articles, query) {
        const searchTerm = query.toLowerCase().trim();
        
        return articles.filter(article => {
            const searchableText = [
                article.title,
                article.description,
                article.content,
                article.category
            ].join(' ').toLowerCase();
            
            return searchableText.includes(searchTerm);
        }).sort((a, b) => {
            // Prioritize title matches, then description, then content
            const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
            const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
            
            if (aTitleMatch && !bTitleMatch) return -1;
            if (!aTitleMatch && bTitleMatch) return 1;
            
            return 0;
        });
    }

    showSearchSuggestions(query) {
        const searchData = this.getSearchData();
        const suggestions = this.searchArticles(searchData, query).slice(0, 5);
        
        if (suggestions.length > 0) {
            console.log('Search suggestions:', suggestions);
            // Could implement suggestion dropdown here
        }
    }

    hideSearchSuggestions() {
        // Hide search suggestions
    }

    showSearchResults(query, results) {
        const searchResults = document.getElementById('inline-search-results');
        
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <div class="search-no-results-icon">🔍</div>
                    <h3>No results found</h3>
                    <p>Try searching for different keywords or check your spelling.</p>
                </div>
            `;
        } else {
            const resultsHtml = results.map(article => `
                <div class="search-result-item">
                    <a href="${article.url}" class="search-result-link">
                        <div class="search-result-content">
                            <h3 class="search-result-title">${article.title}</h3>
                            <p class="search-result-description">${article.description}</p>
                            <span class="search-result-category">${article.category}</span>
                        </div>
                    </a>
                </div>
            `).join('');
            
            searchResults.innerHTML = `
                <div class="search-results-header">
                    <h3>Search Results for "${query}"</h3>
                    <p>Found ${results.length} result${results.length !== 1 ? 's' : ''}</p>
                </div>
                <div class="search-results-list">
                    ${resultsHtml}
                </div>
            `;
        }
        
        searchResults.style.display = 'block';
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
            'styles/styles-mobile.css'
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

// Add touch feedback styles and search results styles
const touchStyles = `
.touch-active {
    transform: scale(0.98);
    opacity: 0.8;
}

.focused .search-input {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(114, 80, 186, 0.1);
}

/* Search Results Styles */
.search-results {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    max-height: 400px;
    overflow-y: auto;
    z-index: 1000;
}

.search-results-header {
    padding: 16px 20px 12px;
    border-bottom: 1px solid #e1e5e9;
    background: #f8f9fa;
    border-radius: 8px 8px 0 0;
}

.search-results-header h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
}

.search-results-header p {
    margin: 0;
    font-size: 14px;
    color: #6c757d;
}

.search-results-list {
    padding: 8px 0;
}

.search-result-item {
    border-bottom: 1px solid #f1f3f4;
}

.search-result-item:last-child {
    border-bottom: none;
}

.search-result-link {
    display: block;
    padding: 12px 20px;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s ease;
}

.search-result-link:hover {
    background-color: #f8f9fa;
    text-decoration: none;
}

.search-result-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.search-result-title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
    line-height: 1.3;
}

.search-result-description {
    margin: 0;
    font-size: 14px;
    color: #6c757d;
    line-height: 1.4;
}

.search-result-category {
    font-size: 12px;
    color: #7250ba;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.search-no-results {
    padding: 40px 20px;
    text-align: center;
}

.search-no-results-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
}

.search-no-results h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
}

.search-no-results p {
    margin: 0;
    font-size: 14px;
    color: #6c757d;
}

@media (prefers-reduced-motion: reduce) {
    .touch-active {
        transform: none;
        opacity: 1;
    }
    
    .search-result-link {
        transition: none;
    }
}

/* Dark mode support */
[data-color-mode="dark"] .search-results {
    background: #1a1a1a;
    border-color: #333;
}

[data-color-mode="dark"] .search-results-header {
    background: #2a2a2a;
    border-color: #333;
}

[data-color-mode="dark"] .search-result-title {
    color: #ffffff;
}

[data-color-mode="dark"] .search-result-description {
    color: #b0b0b0;
}

[data-color-mode="dark"] .search-result-link:hover {
    background-color: #2a2a2a;
}

[data-color-mode="dark"] .search-no-results h3 {
    color: #ffffff;
}

[data-color-mode="dark"] .search-no-results p {
    color: #b0b0b0;
}
`;

// Inject touch styles
const styleSheet = document.createElement('style');
styleSheet.textContent = touchStyles;
document.head.appendChild(styleSheet);
