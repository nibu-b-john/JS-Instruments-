for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
makeSound(this.innerHTML);
animation(this.innerHTML.toLowerCase());
  });
  document.addEventListener("keydown", function(event){
    makeSound(event.key.toUpperCase());
    animation(event.key);
  });
}



function makeSound(key){
  switch (key) {
    case "W":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "A":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    // default: console.log(this.innerHTML);

  }
}

function animation(pressedKey){
  document.querySelector("." + pressedKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + pressedKey).classList.remove("pressed");
  }, 100);
}
