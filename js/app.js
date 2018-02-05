
$(document).ready(function(){

 var score = 0;
 var missed = 0;
 var $points = $(".points");
 var $container = $(".container");
 var $missed = $(".missed");
 var $duck = $(".duck");
 var duckClicked = false;


// Duck movements start
$('button').click(function(){
  var pos = 1;
  var interval = setInterval(frame, 30);
  function frame(){
    if (pos < 0){
      clearInterval(interval);
    }else{
      pos += 1;
      $('img').css('margin-left', pos + 'px');

    }
  }
})

//Gain point for hitting Duck
$('.duck').mousedown(function(event){
  console.log(this);
   score += 1;
   $( this ).remove();
   duckClicked = true;
   $points.html($("<p>"+score+"</p>"));
})

$('.duck').mouseup(function(event){

   duckClicked = false;

})

//Loose point for missing
//Counts misses
$('.container').click(function(event){
  if (!duckClicked) {
    missed += 1;
    score -= 1;

    $missed.html($("<p>"+missed+"</p>"));

  }



})

    });
