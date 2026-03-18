const menu = document.getElementById('navContent');

menu.addEventListener('show.bs.collapse', () => {
  document.body.style.overflow = 'hidden';
});

menu.addEventListener('hide.bs.collapse', () => {
  document.body.style.overflow = 'auto';
});
 const burgerBtn = document.getElementById('burgerBtn');
        const closeBtn = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const body = document.body;

        function openMenu() {
            mobileMenu.classList.add('active');
            body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }

        // Event Listeners
        burgerBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Close menu when clicking on nav links
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on outside click (optional)
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });