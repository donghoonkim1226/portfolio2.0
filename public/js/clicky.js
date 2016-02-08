// Global Variables

  var decTimer;
  var secondsLeft = 20;
  var count = 0;
  var img = document.getElementsByClassName("character");

// Function to Start Timer and allow image to be clicked

  function startTimer(){
     decTimer = setInterval(myTimer, 1000);
     for (var i = 0; i < img.length; i++) {
      img[i].setAttribute("data-clickable", "true");
    }
  };

  document.getElementById("start").addEventListener("click", startTimer);


// Function for count down, alert user score and prevent future clicks after game is over

  function myTimer(){
    if(secondsLeft > 0){
      document.getElementById("time").innerHTML = secondsLeft-=1;
    } else {
        document.getElementById("timeLine").innerHTML = "Our of time!";
        document.getElementById("timeLine").className = "change";
        alert("You clicked " + count + " characters!");
        for (var i = 0; i < img.length; i++) {
         img[i].setAttribute("data-clickable", "false");
        };
        clearInterval(decTimer);
    };
  }; 
 
// Function to count number of clicks

  function countClicks(){      
    if (this.getAttribute('data-clickable') == 'true'){
      count++;
      this.setAttribute('data-clickable', 'false');
      this.className = "clicked";
      document.getElementById("clickTotal").innerHTML = count;
    };
  };

// Loop adding the onclicks to images 

  for (i = 0; i < 20; i++){
    document.getElementsByClassName("character")[i].addEventListener("click", countClicks);
  };