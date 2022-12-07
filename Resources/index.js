//When user scrolls the pages, activate my function
let nav = document.getElementsByTagName("nav");

let sticky = nav.offsetTop;





window.onscroll = function myFunction() {
    
    if (window.pageYOffset >= sticky){
    $(nav).addClass("sticky");
    }else{
    $(nav).removeClass("sticky");
    }}

let button = document.getElementById("button");
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
button.onclick = function() {
    alert("Current Time: " + time)
}




