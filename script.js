
var i = 1;                  
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var now = (new Date().getTime())
$(".stopButton").css("pointer-events" , "none")

function myLoop() {        
  setTimeout(function() {   
    $(".red").toggleClass("rednew");
     
    i;                    
    if (i < 10) {         
                
    }                      
  }, 100)
  setTimeout(function(){
    $(".yellow").toggleClass("yellownew");
     
    i;                    
    if (i < 10) {         
                
    }  
  },150)
  setTimeout(function(){
    $(".green").toggleClass("greennew");
     
    i;                    
    if (i < 10) {         
                
    }  
  },200)
}

function myGame() {        
  setTimeout(function() {   
    $(".red").toggleClass("rednew");
     
    i;                    
    if (i < 10) {         
                
    }                      
  }, 500)
  setTimeout(function(){
    $(".yellow").toggleClass("yellownew");
     
    i;                    
    if (i < 10) {         
                
    }  
  },1000)
  setTimeout(function(){
    $(".green").toggleClass("greennew");
     
    i;                    
    if (i < 10) {         
                
    }  
  },800*k)
}


setTimeout(function(){
  myLoop()
},200)
myLoop()

var a
var k = Math.floor(Math.random()*11)+2


$(document).on('click','.startButton',function(){
  
  myGame()
  $(".startButton").removeClass("startButton")
  $(".niceStart").addClass("newStartButton")
  a = new Date().getTime()
  $(".stopButton").css("pointer-events" , "visible")

})


$(".stopButton").on("click",function(){
 b = new Date().getTime()
 score = (b-a)-800*k
 $(".theScoreDisplay").text(score)
 if (score<0){
     gameOver()
 }
 $(".stopButton").css("pointer-events" , "none")
 
})


function gameOver(){
  $(".theScoreDisplay").addClass("gameOverDisplay")
  $("body").css("background-color","rgba(255, 0, 0, 0.829)")
  $(".stopButton").removeClass("stopButton")
  $(".theScoreDisplay").text("GAME OVER")
  $(".newStartButton").removeClass("newStartButton")
}