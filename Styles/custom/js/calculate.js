$( document ).ready(function() {
  var number = "";
  $(".numbtn").click(function(pressed){
     pressed = $(this).text();
     pressed = pressed.replace(/\s/g, '');
     number = number + pressed;
     $("#numdisplay").text(number);
  });
    
    $("#clear").click(function(){
     number = "";
     $("#numdisplay").text("");  
    });
});