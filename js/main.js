const elSiteThemaToggler = document.querySelector('.site-header-thema-toggler');

elSiteThemaToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
})