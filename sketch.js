function setup(){
    createCanvas(600, 600);
    background(0);
}

// SHIP POSITION
let spaceX = 285;
let spaceY = 550;
let move = false;
let positionY = spaceY + 15;
let positionX = spaceX + 15;
let enemy = [];

function draw(){
    //SHIP
    background(0);
    fill(255, 100, 0);
    rect(spaceX, spaceY, 30, 30);
    // CONTROLS
    if(keyIsDown(LEFT_ARROW)){
        spaceX -= 7;
    }
    if(keyIsDown(RIGHT_ARROW)){
        spaceX += 7;
    }
    //SHIP LIMIT
    if(spaceY > 550)
        spaceY = 550;
    if(spaceX > 570)
        spaceX = 570;
    if(spaceX < 0)
        spaceX = 0;
    
    //ENEMY SHIPs
    for(let enemies = 0; enemies < width || enemies == 12; enemies +=width/12 ){
        enemy.push(enemies);
        for(let i = 0; i < 3; i++){
            fill("red");
            rect(enemies, i * 75 + 50, 30, 30);
        }
    }
    //bullet position
    if(!move){
        positionX = spaceX + 15;
    }
    //conditional for space key pressed
    if(keyIsDown(32)){
        move = true;
    }
    //tells bullet when and how to move and when to stop
    if(move){
        fill(255);
        circle(positionX, positionY, 5);
        positionY -= 7;
    }
    if(positionY < 0){
        move = false;
        positionX = spaceX + 15;
        positionY = spaceY + 15;
    }
}


