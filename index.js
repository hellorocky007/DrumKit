//detecting button
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
});
}
//detection keyword
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(press){
switch (press) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
        break;
    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
        break;
    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/crash.mp3");
         audio.play();
        break;
    case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
        break;
    case "l":
        var audio = new Audio("sounds/snare.mp3");
         audio.play();
        break;
   
    default:console.log(buttonInnerHtml);
        break;
   }
}
function buttonAnimation(currentKey){
    var activeB = document.querySelector("."+currentKey);
    activeB.classList.add("pressed");
    setTimeout(function(){
        activeB.classList.remove("pressed");
    },100);
    
} 
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();