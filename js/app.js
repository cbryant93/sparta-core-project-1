
$(document).ready(function(){

   var score = 0;
   var missed = 0;
   var $points = $(".points");
   var $container = $(".container");
   var $missed = $(".missed");
   var $duck = $(".duck");
   var $carrot = $(".carrot");
   var duckClicked = false;
   var carrotClicked = false;
   var meatClicked = false;
   var duckId = 1;
   var carrotId = 1;
   var meatId = 1;
   var startPos = 1;
   var createDuckInterval;
   var moveDuckInterval;


  // Duck movements start
  $('button').click(function(){
    createElement = setInterval(duckSelect, 1000);
    // createDuckInterval = setInterval(createDuck, 1000);
    // createCarrotInterval = setInterval(createCarrot, 1000);
    $('.container').click(miss);
  })

  function createDuck(){
    var duck = $('<div class="duck" id="' + duckId + '"></div>'); //Creates a duv which includes unique ID for each duck
    duckId++;
    $('.container').append(duck); //Appends the duck to appear in the background
    duck.css('left', '0');

    duck.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    duck.mousedown(shootDuck); //Calls shoot duck fucntion when duck is clicked
    duck.mouseup(noShootDuck); //Sets duck clicked back to false

    var moveDuck = setInterval(function(){ //speed and direction duck goes in
      var pos = 0;
      duck.animate({'left':'100vw'}, 5000);
      pos+=100;
      // debugger;
    },10);
  }

  function createCarrot(){
    var carrot = $('<div class="carrot" id="' + carrotId + '"></div>'); //Creates a div which includes unique ID for each duck
    carrotId++;
    $('.container').append(carrot); //Appends the duck to appear in the background
    carrot.css('left', '0');

    carrot.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    carrot.mousedown(shootCarrot); //Calls shoot duck fucntion when duck is clicked
    carrot.mouseup(noShootCarrot); //Sets duck clicked back to false

    var moveCarrot = setInterval(function(){ //speed and direction duck goes in
      var pos = 0;
      carrot.animate({'left':'100vw'}, 5000);
      pos+=100;
      // debugger;
    },10);
  }

  function createMeat(){
    var meat = $('<div class="meat" id="' + meatId + '"></div>'); //Creates a div which includes unique ID for each duck
    meatId++;
    $('.container').append(meat); //Appends the duck to appear in the background
    meat.css('left', '0');

    meat.css('top', Math.floor(Math.random() * 500) + 'px'); //spawns duck at random position of Y axis on background container
    meat.mousedown(shootMeat); //Calls shoot duck fucntion when duck is clicked
    meat.mouseup(noShootMeat); //Sets duck clicked back to false

    var moveMeat = setInterval(function(){ //speed and direction duck goes in
      var pos = 0;
      meat.animate({'left':'100vw'}, 5000);
      pos+=100;
      // debugger;
    },10);
  }



  //select random target
  function duckSelect(){

    var randomSelect = Math.floor(Math.random()*3);

    // return randomSelect;


     switch (randomSelect) {
       case 0: var randomSelect = 0;

                 createDuck();

       break;

       case 1: var randomSelect = 1;

                 createCarrot();

       break;

       case 2: var randomSelect = 2;

                 createMeat();

       break;

       default: console.log('nothing selected');

                     }

    }






  //Gain point for hitting Duck

  function shootDuck(event) {
     score += 1; //Increment score by one when duck is shot
     $(this).remove(); //Removes duck <div> from screen
     duckClicked = true;
     $points.html($("<p>"+score+"</p>")); //updates score in the html
  }

  function noShootDuck(event) {
  duckClicked = false;
  }

  function shootCarrot(event) {
     missed += 1; //Increment score by one when carrot is shot
     $(this).remove(); //Removes carrot <div> from screen
     carrotClicked = true;
     $missed.html($("<p>"+missed+"</p>")); //updates score in the html
  }

  function noShootCarrot(event) {
  carrotClicked = false;
  }

  function shootMeat(event) {
     score += 5; //Increment score by one when carrot is shot
     $(this).remove(); //Removes carrot <div> from screen
     meatClicked = true;
     $points.html($("<p>"+score+"</p>")); //updates score in the html
  }

  function noShootMeat(event) {
  meatClicked = false;
  }


  //Looses point when missed
  function miss(event) {

      missed += 1; //Incremenets vegan score when duck missed
      score -= 1; //Decrements main score when duck missed
      $missed.html($("<p>"+missed+"</p>")); //Updates score in html
      $points.html($("<p>"+score+"</p>"));

  }

  //timer
  function countDown(i, callback) {
      callback = callback || function(){};
      var int = setInterval(function() {
          document.getElementById("timer").innerHTML = "Number: " + i;
          i-- || (clearInterval(int), callback());
      }, 1000);
  }
  $("button").click(function(){
      countDown(30, function(){ //30 = amount of seconds of game
        alert("Gameover!"); //Alerts game over when timer runs out

        //call end game
      });
  });
});
