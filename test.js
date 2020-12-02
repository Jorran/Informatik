let timer = 80;
let sec = 45;

let bogLaant = false;

var bog;

function setup(){
    createCanvas(500,500);
    frameRate(60);

    bog = createButton("Lån Bog");
    bog.position(width/2 - 30, height + 40);
    bog.mousePressed(laantgg);
}

function draw(){
    background(250);
    if (timer > 0){
        timer -= 1;
    }
    else if (timer <= 0) {
        timer = 75;
        if (bogLaantgg){
            sec -= 1;
            if(sec <= 0){
                text("Du er blevet Ansh'd", 100, 100, 100, 100);
                sec = 45;
                bogLaantgg = false;
            }
        }
    }
    text(sec, width/2, height/2,100,100);
}

function laantgg(){
    bogLaantgg = true;
}