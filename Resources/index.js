//When user scrolls the pages, activate my function
let nav = document.getElementsByTagName("nav");

let sticky = nav.offsetTop;


window.onscroll = function myFunction() {
    
    if (window.pageYOffset >= sticky){
    $(nav).addClass("sticky");
    }else{
    $(nav).removeClass("sticky");
    }}
    


