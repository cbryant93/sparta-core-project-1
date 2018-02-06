
$(document).ready(function(){

 var score = 0;
 var missed = 0;
 var $points = $(".points");
 var $container = $(".container");
 var $missed = $(".missed");
 var $duck = $(".duck");
 var $test = $(".test");
 // var duckClicked = false;
 var duckId = 1;
 var startPos = 1;
 var createDuckInterval;
 var moveDuckInterval;


// Duck movements start
$('button').click(function(){
  createDuckInterval = setInterval(createDuck, 1000);

})

function createDuck(){
  // THIS duck needs to start at 0 then move right EVERY TIME
  var duck = $('<div class="duck" id="' + duckId + '"></div>');
  duckId++;
  $('.container').append(duck);
  duck.css('left', '0');
  duck.click((e)=>{
    console.log('clicked : ' + e.target.id);
  })
  duck.click(shootDuck);
  var moveDuck = setInterval(function(){
    var pos = 0;
    duck.animate({'left':'100vw'}, 5000);
    pos+=100;
    // debugger;
  },10);
}


//Gain point for hitting Duck

function shootDuck(event) {
  console.log(this);
   score += 1;
   $(this).remove();
   duckClicked = true;
   $points.html($("<p>"+score+"</p>"));
}

// $('.duck').mouseup(function(event){
//
//    duckClicked = false;
//
// })
//Loose point for missing
//Counts misses
$('.container').click(function(event){

  if (!duckClicked) {
    missed += 1;
    score -= 1;


    $missed.html($("<p>"+missed+"</p>"));

  }

})

//Loose point for missing
//Counts misses


// var timer;
// var startTime = 5;
//
// $("button").click(function(){
//   if (startTime > 0) {
//     timer = setInterval(function(){
//       console.log(startTime);
//       startTime -= 1;
//     }, 1000);
//   } else {
//     clearInterval(timer);
//     clearInterval(0);
//     alert("Gameover!");
//   }
// });


//timer
function countDown(i, callback) {
    callback = callback || function(){};
    var int = setInterval(function() {
        document.getElementById("timer").innerHTML = "Number: " + i;
        i-- || (clearInterval(int), callback());
    }, 1000);
}
$("button").click(function(){
    countDown(30, function(){
      alert("Gameover!");
      stoppInterval();
      //if yes restart game, else go to homepage
    });
});


    });
