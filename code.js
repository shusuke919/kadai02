$(function(){
 
var janArea = $('jan_area');//ジャンケンを管理するDOMを設定
var cnt = 0; //現在の対戦数を管理
var fin_cnt = 5; //何回で終了か設定
var PointCom = 0, PointMe = 0;


// 背景　開始

var colors = new Array(
  
  [0,255,255],
  [0,0,255],
  [135,206,250],
  [30,144,255],
  [0,206,209],
  [0,191,255]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

// 背景　終了





$("#gu").on("click", function(){
  var human_gu = 1;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  if(fin_cnt<=cnt){
   result();
  }
  
  function result(){
    setTimeout(function(){
    $(".jan_area").hide();
  }, 2500);

  setTimeout(function(){
    $('.result2').html('<button><a href="main.html">もう一回挑戦</a></button>')
   }, 4000);


   if(PointCom == PointMe){
    setTimeout(function(){
   $('.result').text("あいこ")
  }, 4000);
  }else if(PointCom<PointMe){
    setTimeout(function(){
    $('.result').text("あなたの勝ち")
  }, 4000);
  }else {
    setTimeout(function(){
    $('.result').text("あなたの負け")
  }, 4000);
  }
}

  

   if(pc == 1){
    setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あいこ")
    $("#opponent").attr("src","img/gu.png")
    $("#gu,#cho,#pa").hide()
  
　　　
    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()
　　　

    }, 2000);


  }, 500);
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あなたの勝ち")
    $('#point_me').text(++ PointMe);
    $("#opponent").attr("src","img/cho.png")
    $("#gu,#cho,#pa").hide()


    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);

    
  }, 500);

  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あなたの負け")
    $('#point_com').text(++ PointCom);
    $("#opponent").attr("src","img/pa.png")
    $("#gu,#cho,#pa").hide()


    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);

   

  }, 500);
  }
});


$("#cho").on("click", function(){
  var human_cho = 2;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);


  
  if(fin_cnt<=cnt){
    result();
   }
  
  function result(){
    setTimeout(function(){
    $(".jan_area").hide();
  }, 2500);

  setTimeout(function(){
    $('.result2').html('<button><a href="main.html">もう一回挑戦</a></button>')
   }, 4000);


   if(PointCom == PointMe){
    setTimeout(function(){
   $('.result').text("あいこ")
  }, 4000);
  }else if(PointCom<PointMe){
    setTimeout(function(){
    $('.result').text("あなたの勝ち")
  }, 4000);
  }else {
    setTimeout(function(){
    $('.result').text("あなたの負け")
  }, 4000);
  }
}

  
  
  if(pc == 1){
    setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あなたの負け")
    $("#opponent").attr("src","img/gu.png")
    $('#point_com').text(++ PointCom);
    $("#gu,#cho,#pa").hide()
   

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);
  }, 500);
   
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あいこ")
    $("#opponent").attr("src","img/cho.png")
    $("#gu,#cho,#pa").hide()

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);

  }, 500);
  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あなたの勝ち")
    $("#opponent").attr("src","img/pa.png")
    $('#point_me').text(++ PointMe);
    $("#gu,#cho,#pa").hide()

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);
  }, 500);
  }
});

$("#pa").on("click", function(){
  var human_pa = 3;
  var pc = Math.floor(Math.random()*3+1 );
  $('#cnt').text(++ cnt);

  if(fin_cnt<=cnt){
    result();
   }
  
  function result(){
    setTimeout(function(){
    $(".jan_area").hide();
  }, 2500);

  setTimeout(function(){
    $('.result2').html('<button><a href="main.html">もう一回挑戦</a></button>')
   }, 4000);


   if(PointCom == PointMe){
    setTimeout(function(){
   $('.result').text("あいこ")
  }, 4000);
  }else if(PointCom<PointMe){
    setTimeout(function(){
    $('.result').text("あなたの勝ち")
  }, 4000);
  }else {
    setTimeout(function(){
    $('.result').text("あなたの負け")
  }, 4000);
  }
}

  
   if(pc == 1){
      setTimeout(function(){
    $("#pc").text("グー")
    $("#result").text("あなたの勝ち")
    $("#opponent").attr("src","img/gu.png")
    $('#point_me').text(++ PointMe);
    $("#gu,#cho,#pa").hide()

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);
  }, 500);
   
  }
 else if(pc == 2){
  setTimeout(function(){
    $("#pc").text("チョキ")
    $("#result").text("あなたの負け")
    $("#opponent").attr("src","img/cho.png")
    $('#point_com').text(++ PointCom);
    $("#gu,#cho,#pa").hide()

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()
    }, 2000);
  }, 500);
  }
  if(pc == 3){
    setTimeout(function(){
    $("#pc").text("パー")
    $("#result").text("あいこ")
    $("#opponent").attr("src","img/pa.png")
    $("#gu,#cho,#pa").hide()

    setTimeout(function(){
      $("#opponent").attr("src","img/goku.png")
      $("#pc").text("PCが出した手")
      $("#result").text("じゃんけんの結果")
      $("#gu,#cho,#pa").show()

    }, 2000);
  }, 500);
  }
});


});