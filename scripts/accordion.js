
document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'sidebarState';

    // Load saved state from sessionStorage
    const savedState = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};

    const expandButtons = document.querySelectorAll('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');

    expandButtons.forEach((button, index) => {
        const parentLi = button.closest('li');
        const submenu = parentLi?.querySelector(':scope > ul.subpages');
        if (!submenu) return;

        const menuId = parentLi.dataset.menuId || `menu-${index}`;

        // Set menuId for tracking if not present
        parentLi.dataset.menuId = menuId;

        const isExpanded = savedState[menuId];
        button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        submenu.style.display = isExpanded ? 'block' : 'none';
        parentLi.classList.toggle('subnav-expanded', isExpanded);
    });

    function toggleSubmenu(button, expand = null) {
        const parentLi = button.closest('li');
        const submenu = parentLi?.querySelector(':scope > ul.subpages');
        if (!submenu) return;

        const menuId = parentLi.dataset.menuId;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const shouldExpand = expand !== null ? expand : !isExpanded;

        button.setAttribute('aria-expanded', shouldExpand);
        submenu.style.display = shouldExpand ? 'block' : 'none';
        parentLi.classList.toggle('subnav-expanded', shouldExpand);

        // Save new state
        savedState[menuId] = shouldExpand;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));

        // Active class management
        // document.querySelectorAll('.Sidebar-link_parent a').forEach(link => link.classList.remove('active'));
        // const activeLink = parentLi.querySelector('a');
        // if (activeLink) activeLink.classList.add('active');
        const sidebar = document.getElementById('hub-sidebar');
        if (sidebar) {
            const allLinks = sidebar.querySelectorAll('a');
            allLinks.forEach(a => a.classList.remove('active'));
        }

        // Add active class to current item
        const activeLink = parentLi.querySelector('a');
        if (activeLink) activeLink.classList.add('active'); 
    }

    // Bind click handlers
    document.querySelectorAll('.Sidebar-link_parent').forEach(linkParent => {
        const button = linkParent.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
        if (!button) return;

        linkParent.addEventListener('click', function (e) {
            if (e.target === button || e.target.closest('button') === button) return;
            e.preventDefault();
            toggleSubmenu(button);
        });

        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleSubmenu(button);
        });
    });

    // Auto-expand based on ?page=
    const params = new URLSearchParams(window.location.search);
    const currentPage = params.get('page') || 'article1.php';

    document.querySelectorAll('.Sidebar-link_parent a').forEach(link => {
        const href = link.getAttribute('href');
        if (href?.includes(currentPage)) {
            const parentLi = link.closest('li');
            const button = parentLi?.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
            if (button) {
                toggleSubmenu(button, true);
            }
        }
    });

    // Theme toggle functionality
    const toggleBtn = document.getElementById('theme-toggle-button');
    const html = document.documentElement;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const currentMode = html.getAttribute('data-color-mode') || 'system';
            const nextMode = currentMode === 'dark' ? 'light' : 'dark';

            // Update UI
            html.setAttribute('data-color-mode', nextMode);

            // Save preference
            localStorage.setItem('color-scheme', nextMode);

            // Update button visuals
            const isDark = nextMode === 'dark';
            toggleBtn.setAttribute('aria-label', isDark ?
                'Toggle to light mode' : 'Toggle to dark mode');
        });
    }

    // Apply saved theme preference
    const savedMode = localStorage.getItem('color-scheme');
    if (savedMode) {
        html.setAttribute('data-color-mode', savedMode);
    }

    // Search modal functionality
    const searchToggle = document.getElementById('search-toggle-button');
    const mobileSearchToggle = document.getElementById('search-toggle-button-mobile');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');

    // Create search results container
    let searchResultsContainer = document.getElementById('search-results');
    if (!searchResultsContainer && searchModal) {
        searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'search-results';
        searchResultsContainer.className = 'SearchResults2G1wv8-Fb__d';
        searchResultsContainer.style.maxHeight = '60vh';
        searchResultsContainer.style.overflowY = 'auto';
        searchModal.querySelector('.AlgoliaSearch-Col2ycAQ9JMrSYg')?.appendChild(searchResultsContainer);
    }

    function getSidebarLinks() {
        const nav = document.getElementById('hub-sidebar');
        if (!nav) return [];

        const allLinks = nav.querySelectorAll('a[href]');
        return Array.from(allLinks).map(link => {
            // Optional: add indentation for subpages based on nesting depth
            let depth = 0;
            let parent = link.parentElement;
            while (parent && parent !== nav) {
                if (parent.tagName.toLowerCase() === 'ul') depth++;
                parent = parent.parentElement;
            }

            return {
                href: link.getAttribute('href'),
                text: link.textContent.trim() || link.getAttribute('href'),
                section: link.closest('section')?.querySelector('h2')?.textContent || 'Documentation',
                depth: depth
            };
        }).filter(l => l.href && l.href !== '#');
    }


    function highlightMatches(text, query) {
        if (!query || !text) return text;
        const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        return text.replace(regex, match => `<mark class="ais-Snippet-highlighted">${match}</mark>`);
    }

    function renderSearchResults(links, filter = '') {
        if (!searchResultsContainer) return;

        const filtered = filter
            ? links.filter(l =>
                l.text.toLowerCase().includes(filter.toLowerCase()) ||
                l.href.toLowerCase().includes(filter.toLowerCase()) ||
                (l.section && l.section.toLowerCase().includes(filter.toLowerCase()))
            )
            : links;

        if (filtered.length === 0) {
            searchResultsContainer.innerHTML = `
                <div class="undefined-scrollTo SearchResults-ScrollTo28SHJvIpddRO"></div>
                <div aria-live="polite" class="undefined-list SearchResults-list SearchResults-list1K5B-Tc-CEqg notranslate">
                    <div class="rm-SearchModal-empty">
                        <div class="rm-SearchModal-empty-icon">🔍</div>
                        <div>No results found for "${filter}"</div>
                    </div>
                </div>
            `;
            return;
        }

        searchResultsContainer.innerHTML = `
            <div class="undefined-scrollTo SearchResults-ScrollTo28SHJvIpddRO"></div>
            <div aria-live="polite" class="undefined-list SearchResults-list SearchResults-list1K5B-Tc-CEqg notranslate">
                ${filtered.map(l => `
                    <a class="undefined-result SearchResults-Result3TWcEjpDrkd5" href="${l.href}">
                        <i class="undefined-result-icon SearchResults-Result-Icon2Y3KBBRMHQVZ icon-guides"></i>
                        <div class="SearchResults-Result-TextoHt6MHPXQ4wk">
                            <header class="SearchResults-Result-HeaderCczExPFd06go" title="${l.text}">
                                <span class="SearchResults-Result-TitlelacDJQ7ZLXvz undefined-result-title">
                                    ${highlightMatches(l.text, filter)}
                                </span>
                            </header>
                            <div class="SearchResults-Result-Excerpt_uiIutiTwGtZ undefined-result-excerpt" title="${l.section}">
                                <span class="ais-Snippet">
                                    ${highlightMatches(l.section, filter)}
                                </span>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        `;
    }

    function showSearchModal() {
        if (searchModal) {
            searchModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                searchInput && searchInput.focus();
            }, 100);
            const links = getSidebarLinks();
            renderSearchResults(links, searchInput.value);
        }
    }

    function hideSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('show');
            document.body.style.overflow = '';
            searchInput.value = '';
        }
    }

    // Desktop search button
    if (searchToggle) {
        searchToggle.addEventListener('click', showSearchModal);
    }
    // Mobile search button
    if (mobileSearchToggle) {
        mobileSearchToggle.addEventListener('click', showSearchModal);
    }

    // Close button
    if (closeSearch) {
        closeSearch.addEventListener('click', hideSearchModal);
    }

    // Close modal when clicking outside content
    if (searchModal) {
        searchModal.addEventListener('click', function (e) {
            if (e.target === searchModal) {
                hideSearchModal();
            }
        });
    }

    // Close modal with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchModal?.classList.contains('show')) {
            hideSearchModal();
        }
    });

    // Tab switching functionality
    const tabs = document.querySelectorAll('.SearchTabs-Tab2715KRxrb5JT');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => {
                t.classList.remove('Tabs-listItem_active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('Tabs-listItem_active');
            this.setAttribute('aria-selected', 'true');

            // Filter results by tab type
            const links = getSidebarLinks();
            const filterType = this.getAttribute('aria-label');
            const searchTerm = searchInput.value;

            let filteredLinks = links;
            if (filterType !== 'All') {
                filteredLinks = links.filter(l => l.section.includes(filterType));
            }
            renderSearchResults(filteredLinks, searchTerm);
        });
    });

    // Filter results as user types
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const links = getSidebarLinks();
            renderSearchResults(links, searchInput.value);
        });
    }

    // Global expandImage function for inline onclick usage
    window.expandImage = function (img) {
        // Create overlay
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.cursor = 'zoom-out';

        var expandedImg = document.createElement('img');
        expandedImg.src = img.src;
        expandedImg.alt = img.alt;
        expandedImg.style.maxWidth = '90vw';
        expandedImg.style.maxHeight = '90vh';
        expandedImg.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
        expandedImg.style.borderRadius = '8px';
        expandedImg.style.background = '#fff';
        expandedImg.style.padding = '8px';
        expandedImg.style.border = '1px solid #ccc';
        expandedImg.style.cursor = 'auto';

        // Prevent click on image from closing overlay
        expandedImg.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Close overlay on click outside image
        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });

        // Close overlay on ESC key
        function escListener(e) {
            if (e.key === 'Escape') {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                    document.removeEventListener('keydown', escListener);
                }
            }
        }
        document.addEventListener('keydown', escListener);

        overlay.appendChild(expandedImg);
        document.body.appendChild(overlay);
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('inline-search-input');
    const results = document.getElementById('inline-search-results');

    // Helper to get sidebar links (same as in accordion.js)
    function getSidebarLinks() {
        const nav = document.getElementById('hub-sidebar');
        if (!nav) return [];
        const links = nav.querySelectorAll('a[href]');
        return Array.from(links).map(link => ({
            href: link.getAttribute('href'),
            text: link.textContent.trim() || link.getAttribute('href')
        })).filter(l => l.href && l.href !== '#');
    }

    function highlightMatches(text, query) {
        if (!query || !text) return text;
        const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        return text.replace(regex, match => `<mark style="background:#f6f3fd;color:#7250ba">${match}</mark>`);
    }

    function renderResults(links, filter = '') {
        if (!filter) {
            results.style.display = 'none';
            results.innerHTML = '';
            return;
        }
        const filtered = links.filter(l =>
            l.text.toLowerCase().includes(filter.toLowerCase()) ||
            l.href.toLowerCase().includes(filter.toLowerCase())
        );
        if (filtered.length === 0) {
            results.innerHTML = '<div style="padding:1em;color:#888;">No results found.</div>';
            results.style.display = 'block';
            return;
        }
        results.innerHTML = `
      <div style="background:#fff;border:1px solid #ece6fa;border-radius:8px;box-shadow:0 2px 8px rgba(114,80,186,0.07);">
        ${filtered.map(l => `
          <a href="${l.href}" style="display:block;padding:0.7em 1em;text-decoration:none;color:#2d2250;border-bottom:1px solid #f3f0fa;">
            ${highlightMatches(l.text, filter)}
          </a>
        `).join('')}
      </div>
    `;
        results.style.display = 'block';
    }

    const links = getSidebarLinks();

    if (input) {
        input.addEventListener('input', function () {
            renderResults(links, input.value.trim());
        });

        input.addEventListener('blur', function () {
            setTimeout(() => { results.style.display = 'none'; }, 200);
        });
        input.addEventListener('focus', function () {
            if (input.value.trim()) renderResults(links, input.value.trim());
        });
    }
});