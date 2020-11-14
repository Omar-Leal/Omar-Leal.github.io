
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
    }   
})

// Buttoms experience

//experience templeta
const buttom1 = () => {
  const experienceX = `  
            <li>
               <span class="spanList"></span>
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
               <span class="spanList"></span>
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
               <span class="spanList"></span>
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
const buttom2 = () => {
  const educationY = `
             <li>
             <span class="spanList"></span>
               <div class="jobItem">
                 <div class="jobItem-title">
                   <p>May 2007 to december 2011</p>
                 </div>
                 <div class="jobItem-content">
                   <h4>Universidad Rafael Belloso Chacín</h4>
                   <p>Marketing Specialist Degree</p>
                   
                 </div>
               </div>
           </li>
           `;
     return educationY;      
}

let sectCont = document.getElementById("jobsExpe-id");

const text1 = () => {
   return sectCont.innerHTML = buttom1();
}

const text2 = () => {
  return sectCont.innerHTML = buttom2();
}

let header = document.getElementById("buttoms-id");
let btns = header.getElementsByClassName("buttom1");
let btn1Content = document.getElementById("jobsExpe-id");
  text1();
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
          this.className += " active";

          
    });
    
    
}
