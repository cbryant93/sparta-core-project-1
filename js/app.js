
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

});
