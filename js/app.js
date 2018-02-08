$(document).ready(function() {

  var score = 0; //Carnivore Score
  var missed = 0; //Vegan score
  var $points = $(".points"); //Html score
  var $missed = $(".missed"); //Html vegan score
  var $container = $(".container"); //Game containter
  var duckClicked = false;
  var carrotClicked = false;
  var meatClicked = false;
  var duckId = 1; //Unique duck ID
  var carrotId = 1; //Unique carrot ID
  var meatId = 1; //Unique meat ID
  var bang = new Audio('../sounds/gun-shot.wav'); //Gun sound src
  var music = new Audio('../sounds/Mask_Off_8_Bit.mp3'); //music src


  // Click start button to start the game
  $('#startButton').click(function() {
    createElement = setInterval(duckSelect, 500); //Begins creating targets
    $('.container').click(miss); //prevents points changing when clicking start button
    $(this).hide(); //Hides button when clicked
    $('#how').hide(); //Hides 'how to play' button when game begins
    score += 1; //Keeps scores at 0
    missed -= 1;
    timeRunOut(); //Calls timeout function when game is over
    music.play(); //Begins playing music at start of game
    music.volume = 0.5;
  })
  //Click 'how to play button' to get instructions
  $('#how').click(function() {
    $(this).hide(); //Hides button when clicked
    $("#instruct").css("display", "block"); //Displays instructions div
    $('#startButton').hide(); //Hides start button
  })
  //Click back to take you back to main page
  $('#back').click(function() {
    $('#instruct').hide(); //Hide intructions div when clicked
    $("#startButton").css("display", "block");
    $("#how").css("display", "block");
  })


  //Restart game when buttons clicked
  $('#bResart').click(function() {
    $('#restart').hide();
    //Sets games variable back to original value
    score = 0;
    missed = 0;
    score += 1;
    missed -= 1;
    createElement = setInterval(duckSelect, 500);
    timeRunOut();
    music.play();
  })
  //Create duck function
  function createDuck() {
    var duck = $('<div class="target duck" id="' + duckId + '"></div>'); //Creates a div which includes unique ID for each duck
    var duckYDir = true; // Sets ducks Y movement to true
    var duckYPx = 0; // Sets ducks Y movement to 0
    // var duckYInterval;
    duckId++; //Increments duck id, so each duck has unique ID
    $('.container').append(duck); //Appends the duck to appear in the background
    duck.css('left', '0');
    duck.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    duck.mousedown(shootDuck); //Calls shoot duck function when duck is clicked
    duck.mouseup(noShootDuck); //Sets duck clicked back to false
    //Controls ducks movement
    var moveDuck = setInterval(function() {
      duck.animate({
        left: '100vw' //Duck moves from the left
      }, 5000); //Speed ducks fly
      duck.css('top', duck.position().top + duckYPx) //Ducks move up

    }, 7);
    //Controls the ducks distance of movement up and down the Y axis
    setInterval(() => {
      if (duckYDir) {
        // moves up
        duckYDir = !duckYDir;
        duckYPx -= 1;
      } else {
        // moves down
        duckYDir = !duckYDir
        duckYPx += 1.7;
      }

    }, 400)

  }
  //Create carrot function
  function createCarrot() {
    var carrot = $('<div class="target carrot" id="' + carrotId + '"></div>');
    carrotId++;
    $('.container').append(carrot);
    carrot.css('left', '0');

    carrot.css('top', Math.floor(Math.random() * 500) + 'px');
    carrot.mousedown(shootCarrot);
    carrot.mouseup(noShootCarrot);

    var moveCarrot = setInterval(function() {
      carrot.animate({
        'left': '100vw'
      }, 4000);
    }, 10);
  }
  //Create meat function
  function createMeat() {
    var meat = $('<div class="target meat" id="' + meatId + '"></div>');
    meatId++;
    $('.container').append(meat);
    meat.css('left', '0');

    meat.css('top', Math.floor(Math.random() * 500) + 'px');
    meat.mousedown(shootMeat);
    meat.mouseup(noShootMeat);

    var moveMeat = setInterval(function() {
      meat.animate({
        'left': '100vw'
      }, 3500);

    }, 10);
  }


  //selects random target to be spawned
  function duckSelect() {

    var randomSelect = Math.floor(Math.random() * 3); //Select random number between 0-2

    switch (randomSelect) {
      case 0:

        createMeat(); //if 0 create Meat target

        break;

      case 1:

        createCarrot(); //if 1 create Meat target

        break;

      case 2:

        createDuck(); //if 2 create Meat target

        break;

      default:
        console.log('nothing selected');

    }

  }

  //Gain point for hitting Duck

  function shootDuck(event) {
    score += 1; //Increment score by one when duck is shot
    $(this).remove(); //Removes duck <div> from screen
    duckClicked = true;
    $points.html($("<p>" + score + "</p>")); //updates carnivore score in the html
    var quak = new Audio('../sounds/quak.wav');
    quak.play(); //Plays duck sound if duck is shot
    bang.play(); //Plays gun sound if duck is shot

  }

  function noShootDuck(event) {
    duckClicked = false;
  }

  function shootCarrot(event) {
    missed += 3; //Increment score by 3 when carrot is shot
    $(this).remove();
    carrotClicked = true;
    $missed.html($("<p>" + missed + "</p>")); //updates vegan score in the html
    bang.play();
  }

  function noShootCarrot(event) {
    carrotClicked = false;
  }

  function shootMeat(event) {
    score += 2; //Increment score by 5 when meat is shot
    $(this).remove();
    meatClicked = true;
    $points.html($("<p>" + score + "</p>")); //updates carnivore score in the html
    bang.play();
  }

  function noShootMeat(event) {
    meatClicked = false;
  }


  //Looses point when missed
  function miss(event) {

    missed += 1; //Incremenets vegan score when duck missed
    score -= 1; //Decrements main score when duck missed
    $missed.html($("<p>" + missed + "</p>")); //Updates vegan score in html
    $points.html($("<p>" + score + "</p>")); //Updates carnivore score in html

  }

  //timer
  function countDown(i, callback) {
    callback = callback || function() {};
    var int = setInterval(function() {
      document.getElementById("timer").innerHTML = i;
      i-- || (clearInterval(int), callback());
    }, 1000);
  }


  function timeRunOut() {

    countDown(30, function() { //30 = amount of seconds of game
      $('.target').remove(); //Divs with class 'target' are removed from container

      $("#restart").css("display", "block"); //display restart event when time runs out

      if (score > missed) { //If carnivore score is greater than vegan score displays result
        $("#finalScore").html($("<p>Score: " + score + "</p>"));
        $("#endMessage").html($("<p>You blood Thirsty animal!</p>"));
      } else if (missed > score) { //Else If vegan score is greater than carnivore score displays result
        $("#finalScore").html($("<p>Score: " + missed + "</p>"));
        $("#endMessage").html($("<p>We get it, you're a Vegan!</p>"));
      } else { //If draw displays result
        $("#finalScore").html($("<p>It's a Draw!</p>"));
        $("#endMessage").html($("<p>You obviously have dreams of a peaceful world!</p>"));
      }

      stopElement = clearInterval(createElement); //Stop creating targets
      music.pause(); //Pause music
      var laugh = new Audio('../sounds/dog-laugh.mp3');
      laugh.play(); //Play game over sound
    });
  }

});
