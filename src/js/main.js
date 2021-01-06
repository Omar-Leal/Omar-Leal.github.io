
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
const button1 = () => {
  const experienceX = `  
            <li>
               
                 <div class="jobItem">
                   <div class="jobItem-title">
                     <p>April 2017 to present</p>
                   </div>
                   <div class="jobItem-content">
                     <h4>The Centria Group</h4>
                     <p>SEO Specialist</p>
                     <p>SEO Manager</p>
                   </div>
                 </div>
             </li>
             <li>
               
                 <div class="jobItem">
                   <div class="jobItem-title">
                     <p>September 2019 to June 2020</p>
                   </div>
                   <div class="jobItem-content">
                     <h4>iSeen</h4>
                     <p> Video Editor</p>
                   </div>
                 </div>
             </li>
             <li>
               
                 <div class="jobItem">
                   <div class="jobItem-title">
                     <p>June 2014 to April 2017</p>
                   </div>
                   <div class="jobItem-content">
                     <h4>i24Web LLC</h4>
                     <p>SEO Specialist</p>
                     <p>Marketing Specialist</p>
                     <p>Traffic Manager</p>
                     <p>Content Manager</p>
                   </div>
                 </div>
             </li>   
  
           `;

           return experienceX;

}

// Education template
const button2 = () => {
  const educationY = `
                    <li>             
                    <div class="jobItem">
                      <div class="jobItem-title">
                        <p>October 2020 to present</p>
                      </div>
                      <div class="jobItem-content">
                        <h4>PLATZI</h4>
                        <p><a href="https://platzi.com/@omarleal25/curso/1350-html5-css3/diploma/detalle/" target="_blank">The Web Development Course</a></p>
                        <p><a href="https://platzi.com/@omarleal25/curso/1758-html-practico/diploma/detalle/" target="_blank">HTML and CSS Practical Course</a></p>
                        <p><a href="https://platzi.com/@omarleal25/curso/1050-programacion-basica/diploma/detalle/" target="_blank">Basic programming course</a></p>
                        <p><a href="https://platzi.com/@omarleal2503/curso/1814-basico-javascript/diploma/detalle/" target="_blank">Basic JavaScript Course</a></p>
                        <p><a href="https://platzi.com/p/omarleal2503/curso/1339-fundamentos-javascript/diploma/detalle/" target="_blank">The fundamentals of JavaScript </a></p>
                        <p><a href="https://platzi.com/p/omarleal2503/curso/1807-scope/diploma/detalle/" target="_blank">Closures and Scope in JavaScript </a></p>
                        <p><a href="https://platzi.com/@omarleal2503/curso/1748-terminal/diploma/detalle/" target="_blank">Introduction to the Terminal and Command Line Course 2020</a></p>
                        <p><a href="https://platzi.com/@omarleal2503/curso/1276-terminal-2019/diploma/detalle/" target="_blank">Introduction to the Terminal and Command Line Course 2019</a></p>


                        
                      </div>
                    </div>
                  </li>                  
                   
                  <li>             
                  <div class="jobItem">
                    <div class="jobItem-title">
                      <p>January 2020</p>
                    </div>
                    <div class="jobItem-content">
                      <h4>UDEMY</h4>
                      <p><a href="https://www.udemy.com/certificate/UC-7UUJNCYO/" target="_blank">PHP 7 & MySQL: The Complete Course and practical from the beginning</a></p>
                      
                    </div>
                  </div>
                </li>
              <li>             
               <div class="jobItem">
                 <div class="jobItem-title">
                   <p>May 2007 to december 2011</p>
                 </div>
                 <div class="jobItem-content">
                   <h4>Rafael Belloso Chacín University</h4>
                   <p>Marketing Specialist Degree</p>
                   
                 </div>
               </div>
           </li>
           `;
     return educationY;      
}



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
let btn1Content = document.getElementById("jobsExpe-id");
  text1();
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {       
          let current = document.getElementsByClassName("active");
              current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                    navigator.vibrate([100]);    
              
      });
      
      
  }
