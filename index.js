
//Detectiing button press

var NumberOfDrumsButton = document.querySelectorAll(".drum").length;

for(var i = 0; i<NumberOfDrumsButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
    });
} 

 // detecting keyboard press

   document.addEventListener('keypress' ,function(event){
       makeSound(event.key);
       buttonAnimation(event.key);
   });
        
        
        function makeSound(key){
    
        switch(key){
             case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
             break;
             case "a":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play(); 
             case "s":
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play(); 
            case "d":
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play(); 
            case "j":
             var audio = new Audio("sounds/snare.mp3");
                audio.play(); 
            case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 

            case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play(); 

             default:console.log(key);
         }

        }

//var audio = new Audio("sounds/tom-1.mp3");
     //   audio.play();

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  
       activeButton.classList.add("pressed");

       setTimeout(function(){
           activeButton.classList.remove("pressed");
       }, 100);
    }

    