function myFunction( col ){
  var obj = document.getElementById('ABC');
  obj.style.backgroundColor = col;
}

$( function(){

  var win = $(window).width();
  if(win > 640){
    $("#lists").show();
  }else{
    $("#lists").hide();
  }

  $("#button").click( function () {
    $("#lists").slideToggle();
  });

  $(window).resize(function(){
    var win = $(window).width();
    if(win > 640){
      $("#lists").show();
    }else{
      $("#lists").hide();
    }
  });

});
