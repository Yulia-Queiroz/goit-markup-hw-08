(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-button'),
    closeMenuBtn: document.querySelector('.close-menu-button'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mobile-menu--is-hidden');
  }
})();
