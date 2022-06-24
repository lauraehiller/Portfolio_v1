/*Code to run preload animation*/
/*Runs until document loads, then runs an additional 1000ms*/
/*At the end it calls loadAnimations*/

var preloaddone = false;

var loader = document.getElementById("preload");
window.addEventListener("load",function(){
  setTimeout(function(){
    loader.classList.add('preload-finish'); 
    loadAnimations(); 
  }, 3000)
})


/*Begins load animations i.e. elements growing to their full size*/
/*Calls regularAnimaitons*/

function loadAnimations(){
  /*Menu load animations*/

  /*Navbar load animations*/
  document.getElementById("navbar-logo").classList.add('menu-anim');
  document.getElementById("toggler").classList.add('menu-anim');
  document.getElementById("navlink-1").classList.add('menu-anim');
  document.getElementById("navlink-2").classList.add('menu-anim');
  document.getElementById("navlink-3").classList.add('menu-anim');
  document.getElementById("navlink-5").classList.add('menu-anim');
  document.getElementById("navlink-6").classList.add('menu-anim');

  /*Socialbar load animations*/
  document.getElementById("sociallink-1").classList.add('menu-anim');
  document.getElementById("sociallink-2").classList.add('menu-anim');
  document.getElementById("sociallink-3").classList.add('menu-anim');

  /*Body load animations*/

  /*Home*/
  document.getElementById("Homebox").classList.add('body-anim');

  /*AboutMe*/
  document.getElementById("AboutMe-title").classList.add('body-anim');
  document.getElementById("Aboutbox").classList.add('body-anim');

  /*Skills*/
  document.getElementById("Skills-title").classList.add('body-anim');
  document.getElementById("Card1").classList.add('body-anim');
  document.getElementById("Card2").classList.add('body-anim');
  document.getElementById("Card3").classList.add('body-anim');
  document.getElementById("Card4").classList.add('body-anim');
  document.getElementById("Card5").classList.add('body-anim');
  document.getElementById("Card6").classList.add('body-anim');
  document.getElementById("Card7").classList.add('body-anim');
  document.getElementById("Card8").classList.add('body-anim');
  document.getElementById("Card9").classList.add('body-anim');

  /*Experience*/
  document.getElementById("Experience-title").classList.add('body-anim');
  document.getElementById("Exp1").classList.add('body-anim');
  document.getElementById("Exp2").classList.add('body-anim');
  document.getElementById("Exp3").classList.add('body-anim');

  /*Projects*/
  document.getElementById("Projects-title").classList.add('body-anim');
  document.getElementById("Fireflies").classList.add('body-anim');
  document.getElementById("Personal").classList.add('body-anim');
  document.getElementById("Sunrise").classList.add('body-anim');
  document.getElementById("EmpoweredU").classList.add('body-anim');
}






  