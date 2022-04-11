$(function(){
 
var janArea = $('jan_area');//ジャンケンを管理するDOMを設定
var cnt = 0; //現在の対戦数を管理
var fin_cnt = 5; //何回で終了か設定
var PointCom = 0, PointMe = 0;



$("#gu").on("click", function(){
  var human_gu = 1;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  if(fin_cnt>cnt){
  }else{
   result();
  }
  
  function result(){
    
    setTimeout(function(){
    $(".jan_area").hide();
  }, 6000);

  setTimeout(function(){
    $('.result2').html('<button><a href="main.html">もう一回挑戦</a></button>')
   }, 8000);


    if(PointCom>PointMe){
      setTimeout(function(){
     $('.result').text("あなたの勝ちです")
    }, 8000);
    }else{
      setTimeout(function(){
      $('.result').text("あなたの負けです")
    }, 8000);
    }
  }

   if(pc == 1){
    setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/gu.png")
  }, 500);
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あなたの勝ちです")
    $('#point_me').text(++ PointMe);
    $("#opponent").attr("src","img/cho.png")
  }, 500);

  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あなたの負けです")
    $('#point_com').text(++ PointCom);
    $("#opponent").attr("src","img/pa.png")
  }, 500);
  }
});


$("#cho").on("click", function(){
  var human_cho = 2;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);


  
  if(fin_cnt>cnt){
  }else{
   result();
  }

  function result(){
    setTimeout(function(){
    $(".jan_area").hide();
  }, 6000);

  setTimeout(function(){
    $('.result2').html(' <a href="main.html">もう一回挑戦</a>')
   }, 8000);

    if(PointCom>PointMe){
      setTimeout(function(){
     $('.result').text("あなたの勝ちです")
    }, 8000);
    }else{
      setTimeout(function(){
      $('.result').text("あなたの負けです")
    }, 8000);
    }
  }
  
  
  if(pc == 1){
    setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あなたの負けです")
    $("#opponent").attr("src","img/gu.png")
    $('#point_com').text(++ PointCom);
  }, 500);
   
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/cho.png")
  }, 500);
  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あなたの勝ちです")
    $("#opponent").attr("src","img/pa.png")
    $('#point_me').text(++ PointMe);
  }, 500);
  }
});

$("#pa").on("click", function(){
  var human_pa = 3;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  if(fin_cnt>cnt){
  }else{
   result();
  }

  function result(){
    setTimeout(function(){
    $(".jan_area").hide();
  }, 500);
  }

  setTimeout(function(){
    $('.result2').html(' <a href="main.html">もう一回挑戦</a>')
   }, 8000);

    if(PointCom>PointMe){
      setTimeout(function(){
     $('.result').text("あなたの勝ちです")
    }, 8000);
    }else{
      setTimeout(function(){
      $('.result').text("あなたの負けです")
    }, 8000);
    }

  
   if(pc == 1){
      setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あなたの勝ちです")
    $("#opponent").attr("src","img/gu.png")
    $('#point_me').text(++ PointMe);
  }, 500);
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あなたの負けです")
    $("#opponent").attr("src","img/cho.png")
    $('#point_com').text(++ PointCom);
  }, 500);
  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あいこです")
    $("#opponent").attr("src","img/pa.png")
  }, 500);
  }
});






  
});