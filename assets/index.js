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