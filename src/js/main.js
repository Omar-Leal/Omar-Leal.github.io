const burgerButtom = document.getElementById('icon-menu');
const mobileMenu = document.getElementById('links');
let count = 0;

burgerButtom.addEventListener('click', function triggerMenu(){
  if(count == 0){
    mobileMenu.classList.add("menu-active");
    mobileMenu.classList.add("movement");    
    burgerButtom.classList.add("fingerPrint-active");
    navigator.vibrate(1000);

    count = 1;
  }else {
    mobileMenu.classList.remove("menu-active");
    count = 0;   
  }
 const linkMenu = document.getElementById('item');
  linkMenu.addEventListener('click', hideMenu);
    function hideMenu(){
      mobileMenu.classList.remove("menu-active");
    }   
})
// Buttoms experience
let header = document.getElementById("buttoms-id");
let btns = header.getElementsByClassName("buttom1");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
    });
}
