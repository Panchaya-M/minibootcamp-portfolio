window.onscroll = function() {myFunction()};

var nav = document.getElementById("main");
var sticky = nav.offsetTop;

function myFunction() {
    if(window.pageYOffset > 100) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}