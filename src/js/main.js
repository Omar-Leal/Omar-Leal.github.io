const burgerButtom = document.getElementById('icon-menu').addEventListener('click', triggerMenu);
const mobileMenu = document.getElementById('links');

function triggerMenu(){
   mobileMenu.classList.toggle("menu-active");


  /* if(!mobileMenu.classList.contains('menu-active')){
    mobileMenu.classList.add("menu-active");
  }else{
    mobileMenu.classList.remove("menu-active");
  } */

  const linkMenu = document.getElementById('item');
  linkMenu.addEventListener('click', hideMenu);

  function hideMenu(){
    mobileMenu.classList.remove("menu-active");
  }

  
  
}