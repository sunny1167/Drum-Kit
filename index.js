// function handleClick(){
//   alert("I got clicked");
// }
// we don't want the function to execute straight away as soon as the script tag is read, that's why
// rather than handleClick(), we just write the nme of the function which is to be called when the event happens
// which here is click.

// Also rather than defining the function elsewhere and then using its name, we can use an
// anonymous function in the addEventListener itself.

// For mouse click on buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

  // For keyboard click on the whole document which is being selected
  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      default:
        alert("Press the right key!");
    }
  }

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);                                        // After 100 ms we execute function given as first parameter
}
