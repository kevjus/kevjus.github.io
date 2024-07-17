function setup(){
    createCanvas(700,700)
    background(158, 247, 255)
    rectMode(CORNERS)
    textAlign(CENTER)
    textSize(20)
    noStroke()
    //blue = 158, 247, 255
    //green = 55, 255, 48
    //yellow = 255, 200, 0
    //red = 255, 0, 0
    newDiff()
}
dead = false
function start(){
    rectMode(CORNERS)
    textAlign(CENTER)
    textSize(20)
    wallY = random(100,550)
    wallX = 725
    wallY2 = random(100,550)
    wallX2 = 1100
    score = 0
    dropSpeed = 0
    yPos = 350
    loop()
}
r = 0
g = 0
b = 0
function newDiff(){
    background(0,0,0)
    textSize(50)
    fill(55, 255, 48)
    rect(200,200,500,265)
    fill(255, 200, 0)
    rect(200,300,500,365)
    fill(255, 0, 0)
    rect(200,400,500,465)
    fill(158, 247, 255)
    rect(200,500,500,565)
    fill(0)
    text("easy",350,250)
    text("medium",350,350)
    text("hard", 350, 450)
    text("impossible", 350, 550)
    textSize(20)
    diff = 0
}
function topWall(){
    rect(wallX - 25,wallY - 75,wallX + 25,0)
}
function bottomWall(){
    rect(wallX - 25,wallY + 75,wallX + 25,700)
}
function topWall2(){
    rect(wallX2 - 25,wallY2 - 75,wallX2 + 25,0)
}
function bottomWall2(){
    rect(wallX2 - 25,wallY2 + 75,wallX2 + 25,700)
}

function draw(){
    if(diff != 0){
    fill(255,255,255)
    background(r,g,b)
    ellipse(75, yPos, 50)
    yPos += dropSpeed
    if (dropSpeed < 2 * diff){
        dropSpeed += 0.15 * diff
    }
    else if (dropSpeed < 7 * diff){
        dropSpeed += 0.2  * diff
    }
    else if (dropSpeed < 15){
        dropSpeed += 0.3 * diff
    }
    wallX -= 3 * diff
    if (wallX < -25){
        wallX = 725
        wallY = random(100,550)
        score++
    }
    wallX2 -= 3 * diff
    if (wallX2 < -25){
        wallX2 = 725
        wallY2 = random(100,550)
        score++
    }
    topWall()
    bottomWall()
    topWall2()
    bottomWall2()
    if (yPos > wallY + 57 && wallX < 118 && wallX > 32){
        dead = true
    }
    else if (yPos < wallY - 57 && wallX < 118 && wallX > 32){
        dead = true
    }
    else if (yPos > wallY2 + 57 && wallX2 < 118 && wallX2 > 32){
        dead = true
    }
    else if (yPos < wallY2 - 57 && wallX2 < 118 && wallX2 > 32){
        dead = true
    }
    else if (yPos < 10 || yPos > 690){
        dead = true
    }
    fill(r,g,b)
    text(score, 75,yPos)
    if (dead){
        background(0,50)
        fill(255,255,255)
        textSize(50)
        rect(200,300,500,365)
        rect(200,400,500,465)
        fill(r,g,b)
        text("play again",350,350)
        text("new difficulty", 350, 450)
        noLoop()
    }}
}
function mouseClicked(){
    if(dead && mouseX < 500 && mouseX > 200 && mouseY < 365 && mouseY > 300){
        dead = false
        start()
    }
    else if(dead && mouseX < 500 && mouseX > 200 && mouseY < 465 && mouseY > 400){
        dead = false
        setup()
        newDiff()
        
    }
    else if(diff == 0 && mouseX < 500 && mouseX > 200 && mouseY < 265 && mouseY > 200){
        dead = false
        diff = 1
        r = 55
        g = 255
        b = 48
        start()
    }
    else if(diff == 0 && mouseX < 500 && mouseX > 200 && mouseY < 365 && mouseY > 300){
        dead = false
        diff = 1.75
        r = 255
        g = 200
        b = 0
        start()
    }
    else if((diff == 0 && mouseX < 500 && mouseX > 200 && mouseY < 465 && mouseY > 400)){
        dead = false
        diff = 2.5
        r = 255
        g = 0
        b = 0
        start()
    }
    else if((diff == 0 && mouseX < 500 && mouseX > 200 && mouseY < 565 && mouseY > 500)){
        dead = false
        diff = 3
        r = 158
        g = 247
        b = 255
        start()
    }
    if (!dead){
        dropSpeed = -3 - diff*2
    }
}