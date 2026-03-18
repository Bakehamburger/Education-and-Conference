const menu = document.getElementById('navContent');

menu.addEventListener('show.bs.collapse', () => {
  document.body.style.overflow = 'hidden';
});

menu.addEventListener('hide.bs.collapse', () => {
  document.body.style.overflow = 'auto';
});
