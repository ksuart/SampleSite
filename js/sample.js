//　ランダムな色値を発生させる関数
function RandomColor(){
  var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16);
  for( var i = col.length; i<6; i++ ) { col = "0" + col; }
  return "#" + col;
}

// id="ABC" の部分の背景を指定された色に変更する
function ChengeBG( col ){
  var obj = document.getElementById('ABC');
  obj.style.backgroundColor = col;
}

// id="ABC" の部分の背景色をランダムに変更する
function ChengeBGRandom(){
  var obj = document.getElementById('ABC');
  obj.style.backgroundColor = RandomColor();
}

// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win > 640){
    $("#button").hide();
    $("#lists").show();
  }else{
    $("#button").show();
    $("#lists").hide();
  }
}

$( function(){
  
  // 初めてページを開いた時の状態チェック  
  var win = $(window).width();
  ShowAndHide(win);
  
  // Windowサイズが変更された時の状態チェック  
  $(window).resize(function(){
    var win = $(window).width();
    ShowAndHide(win);
  });

  // MENUボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});
