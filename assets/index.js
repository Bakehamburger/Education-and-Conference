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

