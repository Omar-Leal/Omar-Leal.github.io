window.addEventListener('scroll', function (){
  let about = this.document.getElementById('about');
  let positionObj1 = about.getBoundingClientRect().top;
  console.log(positionObj1);
  let screenSize = window.innerHeight/4.5;

    if(positionObj1 < screenSize){
      about.style.animation = 'moveUp  3s ease-out';
    }
})