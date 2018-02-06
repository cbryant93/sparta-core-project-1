
$(document).ready(function(){

 var score = 0;
 var missed = 0;
 var $points = $(".points");
 var $container = $(".container");
 var $missed = $(".missed");
 var $duck = $(".duck");
 var duckClicked = false;
 var duckId = 1;
 var startPos = 1;
 var createDuckInterval;
 var moveDuckInterval;


// Duck movements start
$('button').click(function(){
  createDuckInterval = setInterval(createDuck, 1000);
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
    duck.animate({'left':'100vw' }, 5000);
    pos+=100;
    // debugger;
  },10);
}

//Gain point for hitting Duck

function shootDuck(event) {
  console.log(this);
   score += 1; //Increment score by one when duck is shot
   $(this).remove(); //Removes duck <div> from screen
   duckClicked = true;
   $points.html($("<p>"+score+"</p>")); //updates score in the html
}

function noShootDuck(event) {
duckClicked = false;
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
