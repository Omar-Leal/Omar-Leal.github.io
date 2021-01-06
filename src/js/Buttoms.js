import button1 from './Experience.js';
import button2 from './Educaction.js';


const sectCont = document.getElementById("jobsExpe__id");
const button__1 = document.getElementById('button__1');
const button__2 = document.getElementById('button__2');
  const text1 = () => sectCont.innerHTML = button1();
  const text2 = () => sectCont.innerText = button2();

    function gettingClicks(){}

      gettingClicks.prototype.text1 = function() {
          this.block1 = sectCont.innerHTML = button1();
      }

      gettingClicks.prototype.text2 = function(){
        this.block2 = sectCont.innerHTML = button2();
      }
        const content1 = new gettingClicks();
        const content2 = new gettingClicks();
          button__1.onclick = () => content1.text1();
          button__2.onclick = () => content2.text2();



let header = document.getElementById("buttoms-id");
let btns = header.getElementsByClassName("buttom1");
let btn1Content = document.getElementById("jobsExpe__id");
  text1();
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {       
          let current = document.getElementsByClassName("active");
              current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                    navigator.vibrate([100]);    
              
      });
      
      
  }
