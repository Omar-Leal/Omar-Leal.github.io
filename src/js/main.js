
const burgerButtom = document.getElementById('icon-menu');
const mobileMenu = document.getElementById('links');
let count = 0;

burgerButtom.addEventListener('click', function triggerMenu(){
  if(count == 0){   
    mobileMenu.classList.add("menu-active");    
    mobileMenu.classList.add("movement");    
    burgerButtom.classList.add("fingerPrint-active");          
    navigator.vibrate([100]);    
    count = 1;
  }else {
    mobileMenu.classList.remove("menu-active");
    count = 0;   
  }
 const linkMenu = document.getElementById('item');
  linkMenu.addEventListener('click', hideMenu);
    function hideMenu(){
      mobileMenu.classList.remove("menu-active");
      navigator.vibrate([100]); 
    }   
})

// Buttoms experience

//experience templeta

