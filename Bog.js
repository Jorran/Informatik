let tid;
var bog;
var timerValue = 45;
var startB;

var tekst;

function setup(){
createCanvas(500,500);



tekst = ("fhgih");

startB = createButton("Lån Bog");
startB.position(width/2 - 30, height + 40);
startB.mousePressed(timer);

Bog = createButton("The Great Gatsby");
Bog.position(width / 4, height + 10);
Bog.mousePressed(LåntBog);


}

function draw(){
background(220);
textAlign(CENTER);


    if (timerValue < 10) {
        text("0:0" + timerValue, width / 2, height / 2);
      } else {
        text("0:" + timerValue, width / 2, height / 2);
      }
    

}
function LåntBog(){
    timerValue = 45;
}
function timer(){

    setInterval(function(){
 if (timerValue > 0){
timerValue+= -1;
 }

  else if (timerValue == 1){
    textSize(20); 
    fill(0,0,0);
    text("Bogen er forskinet",200,200);
    

    console.log(tekst);

  }  },1000);

}