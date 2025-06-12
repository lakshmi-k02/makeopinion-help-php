// // // Custom accordion for ReadMe sidebar navigation

// // document.addEventListener('DOMContentLoaded', () => {
// //     // Collapse all navs on load
// //     const expandButtons = document.querySelectorAll('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
// //     expandButtons.forEach(button => {
// //         button.setAttribute('aria-expanded', 'false');
// //         const parentLi = button.closest('li');
// //         const submenu = parentLi && parentLi.querySelector(':scope > ul.subpages');
// //         if (submenu) {
// //             submenu.style.display = 'none';
// //             parentLi.classList.remove('subnav-expanded');
// //         }
// //     });

// //     // Helper to toggle submenu and set active class
// //     function toggleSubmenu(button) {
// //         const parentLi = button.closest('li');
// //         const submenu = parentLi && parentLi.querySelector(':scope > ul.subpages');
// //         if (!submenu) return;
// //         const expanded = button.getAttribute('aria-expanded') === 'true';
// //         button.setAttribute('aria-expanded', !expanded);
// //         submenu.style.display = expanded ? 'none' : 'block';
// //         parentLi.classList.toggle('subnav-expanded', !expanded);

// //         // Remove 'active' from all .Sidebar-link_parent
// //         document.querySelectorAll('.Sidebar-link_parent').forEach(link => {
// //             link.classList.remove('active');
// //         });
// //         // Add 'active' to the current link
// //         const parentLink = parentLi.querySelector('.Sidebar-link_parent');
// //         if (parentLink) {
// //             parentLink.classList.add('active');
// //         }
// //     }

// //     // Make both button and text clickable
// //     document.querySelectorAll('.Sidebar-link_parent').forEach(link => {
// //         const button = link.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
// //         if (!button) return;
// //         // Prevent double toggling if button is clicked directly
// //         link.addEventListener('click', function (e) {
// //             // Only trigger if not clicking on a child <a> or <button>
// //             if (
// //                 e.target === button ||
// //                 e.target.closest('button') === button
// //             ) {
// //                 // Let the button's own handler run
// //                 return;
// //             }
// //             e.preventDefault();
// //             toggleSubmenu(button);
// //         });
// //         // Still allow button to work as before
// //         button.addEventListener('click', function (e) {
// //             e.preventDefault();
// //             e.stopPropagation();
// //             toggleSubmenu(button);
// //         });
// //     });
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const STORAGE_KEY = 'sidebarState';

//     // Load saved state from sessionStorage
//     const savedState = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};

//     const expandButtons = document.querySelectorAll('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');

//     expandButtons.forEach((button, index) => {
//         const parentLi = button.closest('li');
//         const submenu = parentLi?.querySelector(':scope > ul.subpages');
//         if (!submenu) return;

//         const menuId = parentLi.dataset.menuId || `menu-${index}`;

//         // Set menuId for tracking if not present
//         parentLi.dataset.menuId = menuId;

//         const isExpanded = savedState[menuId];
//         button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
//         submenu.style.display = isExpanded ? 'block' : 'none';
//         parentLi.classList.toggle('subnav-expanded', isExpanded);
//     });

//     function toggleSubmenu(button, expand = null) {
//         const parentLi = button.closest('li');
//         const submenu = parentLi?.querySelector(':scope > ul.subpages');
//         if (!submenu) return;

//         const menuId = parentLi.dataset.menuId;
//         const isExpanded = button.getAttribute('aria-expanded') === 'true';
//         const shouldExpand = expand !== null ? expand : !isExpanded;

//         button.setAttribute('aria-expanded', shouldExpand);
//         submenu.style.display = shouldExpand ? 'block' : 'none';
//         parentLi.classList.toggle('subnav-expanded', shouldExpand);

//         // Save new state
//         savedState[menuId] = shouldExpand;
//         sessionStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));

//         // Active class management
//         document.querySelectorAll('.Sidebar-link_parent a').forEach(link => link.classList.remove('active'));
//         const activeLink = parentLi.querySelector('a');
//         if (activeLink) activeLink.classList.add('active');
//     }

//     // Bind click handlers
//     document.querySelectorAll('.Sidebar-link_parent').forEach(linkParent => {
//         const button = linkParent.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
//         if (!button) return;

//         linkParent.addEventListener('click', function (e) {
//             if (e.target === button || e.target.closest('button') === button) return;
//             e.preventDefault();
//             toggleSubmenu(button);
//         });

//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             e.stopPropagation();
//             toggleSubmenu(button);
//         });
//     });

//     // Auto-expand based on ?page=
//     const params = new URLSearchParams(window.location.search);
//     const currentPage = params.get('page') || 'article1.php';

//     document.querySelectorAll('.Sidebar-link_parent a').forEach(link => {
//         const href = link.getAttribute('href');
//         if (href?.includes(currentPage)) {
//             const parentLi = link.closest('li');
//             const button = parentLi?.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
//             if (button) {
//                 toggleSubmenu(button, true);
//             }
//         }
//     });
// });

//   // Theme toggle functionality
//                 document.addEventListener('DOMContentLoaded', function() {
//                     const toggleBtn = document.getElementById('theme-toggle-button');
//                     const html = document.documentElement;
                    
//                     if (toggleBtn) {
//                         toggleBtn.addEventListener('click', function() {
//                             const currentMode = html.getAttribute('data-color-mode') || 'system';
//                             const nextMode = currentMode === 'dark' ? 'light' : 'dark';
                            
//                             // Update UI
//                             html.setAttribute('data-color-mode', nextMode);
                            
//                             // Save preference
//                             localStorage.setItem('color-scheme', nextMode);
                            
//                             // Update button visuals
//                             const isDark = nextMode === 'dark';
//                             toggleBtn.setAttribute('aria-label', isDark ? 
//                                 'Toggle to light mode' : 'Toggle to dark mode');
//                         });
//                     }
                    
//                     // Apply saved theme preference
//                     const savedMode = localStorage.getItem('color-scheme');
//                     if (savedMode) {
//                         html.setAttribute('data-color-mode', savedMode);
//                     }
                    
//                     // Search modal functionality
//                     const searchToggle = document.getElementById('search-toggle-button');
//                     const mobileSearchToggle = document.getElementById('search-toggle-button-mobile');
//                     const searchModal = document.getElementById('search-modal');
//                     const closeSearch = document.getElementById('close-search');
//                     const searchInput = document.getElementById('search-input');

//                     // New: Container for search results
//                     let searchResultsContainer = document.getElementById('search-results');
//                     if (!searchResultsContainer && searchModal) {
//                         searchResultsContainer = document.createElement('div');
//                         searchResultsContainer.id = 'search-results';
//                         searchResultsContainer.style.maxHeight = '50vh';
//                         searchResultsContainer.style.overflowY = 'auto';
//                         searchResultsContainer.style.marginTop = '1em';
//                         searchModal.querySelector('.AlgoliaSearch-Col2ycAQ9JMrSYg')?.appendChild(searchResultsContainer);
//                     }

//                     // Function to get all nav links
//                     function getSidebarLinks() {
//                         const nav = document.getElementById('hub-sidebar');
//                         if (!nav) return [];
//                         const links = nav.querySelectorAll('a[href]');
//                         return Array.from(links).map(link => ({
//                             href: link.getAttribute('href'),
//                             text: link.textContent.trim() || link.getAttribute('href')
//                         })).filter(l => l.href && l.href !== '#');
//                     }

//                     // Function to render links in modal
//                     function renderSearchResults(links, filter = '') {
//                         if (!searchResultsContainer) return;
//                         const filtered = filter
//                             ? links.filter(l => l.text.toLowerCase().includes(filter.toLowerCase()) || l.href.toLowerCase().includes(filter.toLowerCase()))
//                             : links;
//                         if (filtered.length === 0) {
//                             searchResultsContainer.innerHTML = '<div class="mo-search-noresults">No results found.</div>';
//                             return;
//                         }
//                         searchResultsContainer.innerHTML = `
//         <div class="mo-search-results-list">
//             ${filtered.map(l => `
//                 <a href="${l.href}" class="mo-search-result-item">
//                     <span class="mo-search-result-title">${l.text}</span>
//                 </a>
//             `).join('')}
//         </div>
//     `;
//                     }

//                     // Inject CSS for search results (only once)
//                     if (!document.getElementById('mo-search-style')) {
//                         const style = document.createElement('style');
//                         style.id = 'mo-search-style';
//                         style.textContent = `
//         .mo-search-results-list {
//             display: flex;
//             flex-direction: column;
//             gap: 0.5em;
//             margin: 2em auto 0 auto;
//             max-width: 520px;
//         }
//         .mo-search-result-item {
//             display: block;
//             padding: 1em 1.5em;
//             border-radius: 10px;
//             background: #fff;
//             color: #2d2250;
//             font-size: 1.08em;
//             font-weight: 500;
//             text-decoration: none;
//             box-shadow: 0 2px 8px rgba(114,80,186,0.07);
//             border: 1px solid #ece6fa;
//             transition: box-shadow 0.18s, border 0.18s, background 0.18s, color 0.18s;
//         }
//         .mo-search-result-item:hover, .mo-search-result-item:focus {
//             background: #f6f3fd;
//             color: #7250ba;
//             border: 1px solid #d1c4f6;
//             box-shadow: 0 4px 16px rgba(114,80,186,0.13);
//         }
//         .mo-search-result-title {
//             display: block;
//             line-height: 1.3;
//         }
//         .mo-search-noresults {
//             padding: 2em 0;
//             text-align: center;
//             color: #888;
//             font-size: 1.1em;
//         }
//     `;
//                         document.head.appendChild(style);
//                     }

//                     // Function to show search modal
//                     function showSearchModal() {
//                         if (searchModal) {
//                             searchModal.classList.add('show');
//                             setTimeout(() => {
//                                 searchInput && searchInput.focus();
//                             }, 100);
//                             // Load and render links
//                             const links = getSidebarLinks();
//                             renderSearchResults(links, searchInput.value);
//                         }
//                     }

//                     // Desktop search button
//                     if (searchToggle) {
//                         searchToggle.addEventListener('click', showSearchModal);
//                     }
//                     // Mobile search button
//                     if (mobileSearchToggle) {
//                         mobileSearchToggle.addEventListener('click', showSearchModal);
//                     }
                    
//                     // Close button
//                     if (closeSearch) {
//                         closeSearch.addEventListener('click', hideSearchModal);
//                     }
                    
//                     // Close modal when clicking outside content
//                     searchModal.addEventListener('click', function(e) {
//                         if (e.target === searchModal) {
//                             hideSearchModal();
//                         }
//                     });
                    
//                     // Close modal with ESC key
//                     document.addEventListener('keydown', function(e) {
//                         if (e.key === 'Escape' && searchModal.classList.contains('show')) {
//                             hideSearchModal();
//                         }
//                     });
                    
//                     // Tab switching functionality
//                     const tabs = document.querySelectorAll('.SearchTabs-Tab2715KRxrb5JT');
//                     tabs.forEach(tab => {
//                         tab.addEventListener('click', function() {
//                             // Remove active class from all tabs
//                             tabs.forEach(t => t.classList.remove('Tabs-listItem_active'));
                            
//                             // Add active class to clicked tab
//                             this.classList.add('Tabs-listItem_active');
                            
//                             // Set aria-selected attributes
//                             tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
//                             this.setAttribute('aria-selected', 'true');
//                         });
//                     });

//                     // Filter results as user types
//                     if (searchInput) {
//                         searchInput.addEventListener('input', function() {
//                             const links = getSidebarLinks();
//                             renderSearchResults(links, searchInput.value);
//                         });
//                     }
//                 });


// // Global expandImage function for inline onclick usage
// function expandImage(img) {
//   // Create overlay
//   var overlay = document.createElement('div');
//   overlay.style.position = 'fixed';
//   overlay.style.top = '0';
//   overlay.style.left = '0';
//   overlay.style.width = '100vw';
//   overlay.style.height = '100vh';
//   overlay.style.background = 'rgba(0,0,0,0.8)';
//   overlay.style.display = 'flex';
//   overlay.style.alignItems = 'center';
//   overlay.style.justifyContent = 'center';
//   overlay.style.zIndex = '9999';
//   overlay.style.cursor = 'zoom-out';

//   var expandedImg = document.createElement('img');
//   expandedImg.src = img.src;
//   expandedImg.alt = img.alt;
//   expandedImg.style.maxWidth = '90vw';
//   expandedImg.style.maxHeight = '90vh';
//   expandedImg.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
//   expandedImg.style.borderRadius = '8px';
//   expandedImg.style.background = '#fff';
//   expandedImg.style.padding = '8px';
//   expandedImg.style.border = '1px solid #ccc';
//   expandedImg.style.cursor = 'auto';

//   // Prevent click on image from closing overlay
//   expandedImg.addEventListener('click', function(e) {
//     e.stopPropagation();
//   });

//   // Close overlay on click outside image
//   overlay.addEventListener('click', function() {
//     document.body.removeChild(overlay);
//   });

//   // Close overlay on ESC key
//   function escListener(e) {
//     if (e.key === 'Escape') {
//       if (document.body.contains(overlay)) {
//         document.body.removeChild(overlay);
//         document.removeEventListener('keydown', escListener);
//       }
//     }
//   }
//   document.addEventListener('keydown', escListener);

//   overlay.appendChild(expandedImg);
//   document.body.appendChild(overlay);
// }

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
        document.querySelectorAll('.Sidebar-link_parent a').forEach(link => link.classList.remove('active'));
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
        toggleBtn.addEventListener('click', function() {
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
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                hideSearchModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal?.classList.contains('show')) {
            hideSearchModal();
        }
    });
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.SearchTabs-Tab2715KRxrb5JT');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
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
        searchInput.addEventListener('input', function() {
            const links = getSidebarLinks();
            renderSearchResults(links, searchInput.value);
        });
    }

    // Global expandImage function for inline onclick usage
    window.expandImage = function(img) {
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
        expandedImg.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Close overlay on click outside image
        overlay.addEventListener('click', function() {
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