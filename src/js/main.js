var triggerButtom = document.getElementById("icon-menu").addEventListener("click", trigger_active);

function trigger_active(){    
  const headerSection  = this.document.getElementById("responsive-menu");
  const navItem = document.getElementById("links");
  if(triggerButtom){
    this.headerSection.classList.toggle("menu-active");
  }
  
}

