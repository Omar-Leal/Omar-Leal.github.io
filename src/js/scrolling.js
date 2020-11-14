
let scrolling = document.querySelectorAll(".scrolling");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < scrolling.length; i++){
      let animateHigh = scrolling[i].offsetTop;
      if(animateHigh - 700 < scrollTop) {
        scrolling[i].style.opacity = 1;   
        scrolling[i].classList.add("showTop");
        scrolling[i].classList.add("carrusel-left");           
      }       
    }
}

window.addEventListener('scroll', showScroll);

