for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
    var letterClicked = this.innerHTML;
    makesound(letterClicked);
    animation(letterClicked);
})}


document.addEventListener("keydown",function (event) {
    var keyPressed = event.key;
    makesound(keyPressed);
    animation(keyPressed);
})
function makesound(key)
{
    switch (key) {
        case "w":
        var t1audio = new Audio("./sounds/tom-1.mp3");
        t1audio.play()
        break;
        case "a":
        var t2audio = new Audio("./sounds/tom-2.mp3");
        t2audio.play()
        break;
        case "s":
        var t3audio = new Audio("./sounds/tom-3.mp3");
        t3audio.play()
        break;
        case "d":
        var t4audio = new Audio("./sounds/tom-4.mp3");
        t4audio.play()
        break;
        case "j":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play()
        break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
        crash.play()
        break;
        case "l":
         var kickbass = new Audio("./sounds/kick-bass.mp3");
         kickbass.play()
        break;
        default: alert("press the right key")
        break;
 }}
function animation(currentkey){
   var activebutton= document.querySelector("."+ currentkey);
   activebutton.classList.add("pressed");
   setTimeout(()=>{activebutton.classList.remove("pressed")},100 );
}