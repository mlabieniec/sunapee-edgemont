
var buttons = document.getElementsByClassName("button-scroll");
for (var index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    btn.onclick = function(evt) {
        document.getElementById(evt.target.id).scrollIntoView({
            behavior: "smooth", 
            block: "start", 
            inline: "nearest"
        });
    }
    
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

function scrollTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
  
window.addEventListener("scroll", reveal);
reveal();