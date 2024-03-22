document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar ul');

  menuIcon.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
  });
});
