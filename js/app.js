$(document).ready(function() {

  var score = 0;
  var missed = 0;
  var $points = $(".points");
  var $container = $(".container");
  var $missed = $(".missed");
  var duckClicked = false;
  var carrotClicked = false;
  var meatClicked = false;
  var buttonClicked = false;
  var duckId = 1;
  var carrotId = 1;
  var meatId = 1;
  var startPos = 1;
  var createDuckInterval;
  var moveDuckInterval;


  // Duck movements start
  $('button').click(function() {
    createElement = setInterval(duckSelect, 500);
    $('.container').click(miss);
    $(this).hide();
  })

  function createDuck() {
    var duck = $('<div class="duck" id="' + duckId + '"></div>'); //Creates a duv which includes unique ID for each duck
    var duckYDir = true;
    var duckYPx = 0;
    var duckYInterval;
    duckId++;
    $('.container').append(duck); //Appends the duck to appear in the background
    duck.css('left', '0');

    duck.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    duck.mousedown(shootDuck); //Calls shoot duck fucntion when duck is clicked
    duck.mouseup(noShootDuck); //Sets duck clicked back to false

    var moveDuck = setInterval(function() { //speed and direction duck goes in
      duck.animate({
        left: '100vw'
      }, 5000);
      console.log(duck.position().top);

      duck.css('top', duck.position().top + duckYPx)

    }, 7);

    setInterval(() => {
      if (duckYDir) {
        // moves up
        duckYDir = !duckYDir;
        duckYPx -= 1;
      } else {
        // moves down
        duckYDir = !duckYDir
        duckYPx += 2;
      }

    }, 400)

  }

  function createCarrot() {
    var carrot = $('<div class="carrot" id="' + carrotId + '"></div>'); //Creates a div which includes unique ID for each duck
    carrotId++;
    $('.container').append(carrot); //Appends the duck to appear in the background
    carrot.css('left', '0');

    carrot.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    carrot.mousedown(shootCarrot); //Calls shoot duck fucntion when duck is clicked
    carrot.mouseup(noShootCarrot); //Sets duck clicked back to false

    var moveCarrot = setInterval(function() { //speed and direction duck goes in
      carrot.animate({
        'left': '100vw'
      }, 4000);
    }, 10);
  }

  function createMeat() {
    var meat = $('<div class="meat" id="' + meatId + '"></div>'); //Creates a div which includes unique ID for each duck
    meatId++;
    $('.container').append(meat); //Appends the duck to appear in the background
    meat.css('left', '0');

    meat.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    meat.mousedown(shootMeat); //Calls shoot duck fucntion when duck is clicked
    meat.mouseup(noShootMeat); //Sets duck clicked back to false

    var moveMeat = setInterval(function() { //speed and direction duck goes in
      meat.animate({
        'left': '100vw'
      }, 3500);
      // debugger;
    }, 10);
  }



  //select random target
  function duckSelect() {

    var randomSelect = Math.floor(Math.random() * 3);

    // return randomSelect;


    switch (randomSelect) {
      case 0:
        var randomSelect = 0;

        createDuck();

        break;

      case 1:
        var randomSelect = 1;

        createCarrot();

        break;

      case 2:
        var randomSelect = 2;

        createMeat();

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
    $points.html($("<p>" + score + "</p>")); //updates score in the html
  }

  function noShootDuck(event) {
    duckClicked = false;
  }

  function shootCarrot(event) {
    missed += 3; //Increment score by one when carrot is shot
    $(this).remove(); //Removes carrot <div> from screen
    carrotClicked = true;
    $missed.html($("<p>" + missed + "</p>")); //updates score in the html
  }

  function noShootCarrot(event) {
    carrotClicked = false;
  }

  function shootMeat(event) {
    score += 5; //Increment score by one when carrot is shot
    $(this).remove(); //Removes carrot <div> from screen
    meatClicked = true;
    $points.html($("<p>" + score + "</p>")); //updates score in the html
  }

  function noShootMeat(event) {
    meatClicked = false;
  }


  //Looses point when missed
  function miss(event) {

    missed += 1; //Incremenets vegan score when duck missed
    score -= 1; //Decrements main score when duck missed
    $missed.html($("<p>" + missed + "</p>")); //Updates score in html
    $points.html($("<p>" + score + "</p>"));

  }



  //timer
  function countDown(i, callback) {
    callback = callback || function() {};
    var int = setInterval(function() {
      document.getElementById("timer").innerHTML = "Time left:"+ i;
      i-- || (clearInterval(int), callback());
    }, 1000);
  }
  $("button").click(function() {
    countDown(30, function() { //30 = amount of seconds of game

      if (score > missed) {
        alert("You bloody thirsty animal!");
      } else if (missed > score) {
        alert("Ok, we get it, your a vegan!");
      } else {
        alert("You have dreams of a peaceful world");
      }
      alert("Gameover!"); //Alerts game over when timer runs out

      //call end game
    });
  });
});

$("button").mousedown(function() {
  buttonClicked = true;

});

$("button").mouseup(function() {
  buttonClicked = false;

});
