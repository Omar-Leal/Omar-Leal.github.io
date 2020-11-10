window.onscroll =  function() { stickyHeader() };
const deviceSize = window.matchMedia("(min-width: 961px)");

  let headerSection = document.getElementById('menu-id');
  let sticky = headerSection.offsetTop;
    function stickyHeader() {
      if(window.pageYOffset > sticky && deviceSize.matches) {
        headerSection.classList.add("stickyHeader");
      } else {
        headerSection.classList.remove("stickyHeader");
      }
    }







 

