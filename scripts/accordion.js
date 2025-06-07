// // Custom accordion for ReadMe sidebar navigation

// document.addEventListener('DOMContentLoaded', () => {
//     // Collapse all navs on load
//     const expandButtons = document.querySelectorAll('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
//     expandButtons.forEach(button => {
//         button.setAttribute('aria-expanded', 'false');
//         const parentLi = button.closest('li');
//         const submenu = parentLi && parentLi.querySelector(':scope > ul.subpages');
//         if (submenu) {
//             submenu.style.display = 'none';
//             parentLi.classList.remove('subnav-expanded');
//         }
//     });

//     // Helper to toggle submenu and set active class
//     function toggleSubmenu(button) {
//         const parentLi = button.closest('li');
//         const submenu = parentLi && parentLi.querySelector(':scope > ul.subpages');
//         if (!submenu) return;
//         const expanded = button.getAttribute('aria-expanded') === 'true';
//         button.setAttribute('aria-expanded', !expanded);
//         submenu.style.display = expanded ? 'none' : 'block';
//         parentLi.classList.toggle('subnav-expanded', !expanded);

//         // Remove 'active' from all .Sidebar-link_parent
//         document.querySelectorAll('.Sidebar-link_parent').forEach(link => {
//             link.classList.remove('active');
//         });
//         // Add 'active' to the current link
//         const parentLink = parentLi.querySelector('.Sidebar-link_parent');
//         if (parentLink) {
//             parentLink.classList.add('active');
//         }
//     }

//     // Make both button and text clickable
//     document.querySelectorAll('.Sidebar-link_parent').forEach(link => {
//         const button = link.querySelector('.Sidebar-link-buttonWrapper3hnFHNku8_BJ');
//         if (!button) return;
//         // Prevent double toggling if button is clicked directly
//         link.addEventListener('click', function (e) {
//             // Only trigger if not clicking on a child <a> or <button>
//             if (
//                 e.target === button ||
//                 e.target.closest('button') === button
//             ) {
//                 // Let the button's own handler run
//                 return;
//             }
//             e.preventDefault();
//             toggleSubmenu(button);
//         });
//         // Still allow button to work as before
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             e.stopPropagation();
//             toggleSubmenu(button);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'sidebarState';

    // Load saved state from localStorage
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));

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
});

  // Theme toggle functionality
                document.addEventListener('DOMContentLoaded', function() {
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
                    
                    // Function to show search modal
                    function showSearchModal() {
                        searchModal.classList.add('show');
                        setTimeout(() => {
                            searchInput.focus();
                        }, 100);
                    }
                    
                    // Function to hide search modal
                    function hideSearchModal() {
                        searchModal.classList.remove('show');
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
                    searchModal.addEventListener('click', function(e) {
                        if (e.target === searchModal) {
                            hideSearchModal();
                        }
                    });
                    
                    // Close modal with ESC key
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && searchModal.classList.contains('show')) {
                            hideSearchModal();
                        }
                    });
                    
                    // Tab switching functionality
                    const tabs = document.querySelectorAll('.SearchTabs-Tab2715KRxrb5JT');
                    tabs.forEach(tab => {
                        tab.addEventListener('click', function() {
                            // Remove active class from all tabs
                            tabs.forEach(t => t.classList.remove('Tabs-listItem_active'));
                            
                            // Add active class to clicked tab
                            this.classList.add('Tabs-listItem_active');
                            
                            // Set aria-selected attributes
                            tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
                            this.setAttribute('aria-selected', 'true');
                        });
                    });
                });


// Global expandImage function for inline onclick usage
function expandImage(img) {
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
}