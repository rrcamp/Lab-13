$(document).ready(function() {
  
  var originalText;

  $ ('li').hover(function(){
    $( this ).fadeTo(100, 0.25); //the first is the number of milliseconds you want it to take to fade, the second is the opacity
  },
  function() {
    $( this ).fadeTo(100, 1);
  });

  $ ('li').click(function(){
    $( this ).css("background-color", "#c0cfc4")
    if ($( this ).text() ===  "Clicked!"){
      $( this ).text(originalText);
    }
    else{
      originalText = $( this ).text();
      $( this ).text('Clicked!');
      $( this ).css("background-color", "#c0cfc4");
    }

  });

});


//$( this ).click(function() {
//  $( this ).toggle().text('Clicked!')};
