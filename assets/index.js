document.addEventListener('DOMContentLoaded', function() {
            const burgerBtn = document.getElementById('burgerBtn');
            const closeBtn = document.getElementById('closeMenu');
            const mobileMenu = document.getElementById('mobileMenu');
            const body = document.body;

            function openMenu() {
                mobileMenu.classList.add('active');
                body.classList.add('menu-open');
            }

            function closeMenu() {
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
            }

            burgerBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            
            // Close on link click
            document.querySelectorAll('.mobile-nav-links a').forEach(link => {
                link.addEventListener('click', closeMenu);
            });
            
            // Close on backdrop click
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) closeMenu();
            });
            
            // Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
        });


// Select all the groups we created
const regionGroups = document.querySelectorAll('.map-region');

regionGroups.forEach(group => {
  group.addEventListener('click', function() {
    // 1. Remove 'active' from all groups to clear previous selection
    regionGroups.forEach(g => g.classList.remove('active'));
    
    // 2. Add 'active' to the group that was just clicked
    this.classList.add('active');
    
    // 3. Optional: Get the ID to show the name of the region
    console.log("You clicked the " + this.id + " region!");
  });
});



// case section

document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all filter groups (Region, Category, System)
    const filterGroups = document.querySelectorAll('.filter-group');

    filterGroups.forEach(group => {
        // 2. Find the very first button in each group (The "All" button)
        const allButton = group.querySelector('.btn');
        
        if (allButton) {
            // 3. Make it orange and active
            allButton.classList.add('active-orange');
            allButton.classList.remove('btn-outline-secondary');
        }
    });

    // 4. Handle manual clicks for the rest of the session
    const allButtons = document.querySelectorAll('.filter-group .btn');
    allButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active state from all buttons in THIS specific group
            const currentGroup = this.closest('.d-flex');
            currentGroup.querySelectorAll('.btn').forEach(b => {
                b.classList.remove('active-orange');
                b.classList.add('btn-outline-secondary');
            });

            // Add active state to the clicked button
            this.classList.add('active-orange');
            this.classList.remove('btn-outline-secondary');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the region from the URL (e.g., 'north')
    const params = new URLSearchParams(window.location.search);
    const regionValue = params.get('region');

    // 2. Define the highlighting function
    function applyOrangeStyle(button) {
        if (!button) return;

        // Find the row this button is in
        const row = button.closest('.d-flex');
        
        // Remove orange from all buttons in this row (resetting 'All')
        row.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('active-orange');
            btn.classList.add('btn-outline-secondary');
        });

        // Add the orange highlight to the target button
        button.classList.add('active-orange');
        button.classList.remove('btn-outline-secondary');
    }

    // 3. EXECUTION ON LOAD
    if (regionValue) {
        // Find the button where data-region="north"
        const target = document.querySelector(`[data-region="${regionValue}"]`);
        if (target) {
            applyOrangeStyle(target);
        }
    } else {
        // If no region in URL (clicked "View More"), highlight "All"
        document.querySelectorAll('[data-region="all"]').forEach(btn => {
            applyOrangeStyle(btn);
        });
    }

    // 4. MANUAL CLICK HANDLER
    document.querySelectorAll('.filter-group .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            applyOrangeStyle(this);
        });
    });
});