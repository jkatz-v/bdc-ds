/** Burger Menu **/ 
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


/** Top Nav **/
const submenuItems = document.querySelectorAll('.has-submenu');

  submenuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');

    // Show submenu when hovering over "has-submenu" or the submenu itself
    item.addEventListener('mouseover', () => {
      submenu.classList.add('visible');
    });

    // Hide submenu when mouse leaves "has-submenu" or the submenu itself
    item.addEventListener('mouseleave', () => {
      submenu.classList.remove('visible');
    });
  });