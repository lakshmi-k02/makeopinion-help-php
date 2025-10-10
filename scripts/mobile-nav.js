document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'modernNavState';

    // Load saved state from sessionStorage
    const savedState = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};

    // Initialize navigation toggles
    const navToggles = document.querySelectorAll('.nav-toggle');

    navToggles.forEach((toggle, index) => {
        const parentLi = toggle.closest('.nav-item-expandable');
        const submenu = parentLi?.querySelector('.nav-submenu');
        if (!submenu) return;

        const menuId = parentLi.dataset.menuId || `nav-menu-${index}`;
        parentLi.dataset.menuId = menuId;

        // Set initial state from saved state or default to collapsed
        const isExpanded = savedState[menuId] || false;
        toggle.setAttribute('aria-expanded', isExpanded);
    // Mark this toggle as managed by modern-nav to avoid duplicate handlers
    toggle.dataset.managed = 'modern-nav';
        
        // Set initial submenu visibility
        if (isExpanded) {
            submenu.style.maxHeight = '1000px';
            submenu.style.paddingTop = 'var(--space-2)';
        } else {
            submenu.style.maxHeight = '0';
            submenu.style.paddingTop = '0';
        }
    });

    function toggleSubmenu(toggle, expand = null) {
        const parentLi = toggle.closest('.nav-item-expandable');
        const submenu = parentLi?.querySelector('.nav-submenu');
        if (!submenu) return;

        const menuId = parentLi.dataset.menuId;
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const shouldExpand = expand !== null ? expand : !isExpanded;

        // Update aria-expanded
        toggle.setAttribute('aria-expanded', shouldExpand);

        // Animate submenu
        if (shouldExpand) {
            submenu.style.maxHeight = '1000px';
            submenu.style.paddingTop = 'var(--space-2)';
        } else {
            submenu.style.maxHeight = '0';
            submenu.style.paddingTop = '0';
        }

        // Save state
        savedState[menuId] = shouldExpand;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
    }

    // Bind click handlers to navigation toggles
    navToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleSubmenu(toggle);
        });
    });

    // Auto-expand based on current page
    const params = new URLSearchParams(window.location.search);
    const currentPage = params.get('page');

    if (currentPage) {
        // Find the parent menu that contains the current page
        const currentLink = document.querySelector(`a[href*="${currentPage}"]`);
        if (currentLink) {
            const parentToggle = currentLink.closest('.nav-item-expandable')?.querySelector('.nav-toggle');
            if (parentToggle) {
                toggleSubmenu(parentToggle, true);
            }
        }
    }
});
