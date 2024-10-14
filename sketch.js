let dude1points=0
let dude2points=0
let roof
let floo
let dude1
let dude2
let littleball
let start=false
let coolmusicyah,pointsound,bonce

function preload() {
coolmusicyah=loadSound("game-music-loop-6-144641.mp3") 
bonce=loadSound("tap-notification-180637.mp3")
pointsound=loadSound("retro-coin-1-236677-1.mp3")

}

function setup() {
  createCanvas(880, 500);
  coolmusicyah.play()
  coolmusicyah.loop()
  dude1=createSprite(20,250,20,160) 
  dude1.collider="static"
  dude2=createSprite(860,250,20,160)
  dude2.collider="static"
  
  dude1.color="#1700ff"
  dude2.color="#00ff00"
  littleball=createSprite(440,250,35)
  littleball.color="#ff0000"
  littleball.bounciness=1
  roof=createSprite(440,0,880,0)

roof.collider="static"
  floo=createSprite(440,500,880,0)

floo.collider="static"
}

function draw() {
  background("#C900ff");
  fill("#ffffff") 
  textSize(30)
  text(dude1points,300,50)
  fill("#ffffff") 
  textSize(30)
  text(dude2points,550,50)
  move()
  GoBall()
    points()
  restart()
  fixball()
}

function move() {
if(keyIsDown(UP_ARROW)){
   dude2.y=dude2.y+-10
}
if (keyIsDown(DOWN_ARROW)){
dude2.y=dude2.y+10
   }  
  if(keyIsDown(87)){
   dude1.y=dude1.y+-10
}
if (keyIsDown(83)){
dude1.y=dude1.y+10
   } 
}

function GoBall(){
if (keyIsDown(32) &&start==false){
 start=true
  let list1x=[-7,7] 
  let random1x=random(list1x)
  let list1y=[-7,7] 
  let random1y=random(list1y)
  
 littleball.vel.x=random1x
  littleball.vel.y=random1y
  }
}

function points (){
  if (littleball.x < -20){
dude2points=dude2points+1
    pointsound.play()
     }
     if (littleball.x > 870){
dude1points=dude1points+1
     pointsound.play()}
  
}

function restart(){
  if (littleball.x < -20 ||littleball.x > 870){
    littleball.y=250
    littleball.x=440
    littleball.vel.x=0
    littleball.vel.y=0
    start=false
 
  }

}

function fixball(){
  if(littleball.collided(dude1) || littleball.collided(dude2) || littleball.collided(floo) || littleball.collided(roof)){
     console.log("vel.x  ",littleball.vel.x)
     console.log("vel.y  ",littleball.vel.y)
    let minx=7
    let miny=7
    if(abs(littleball.vel.y) < miny ){
       littleball.vel.y= littleball.vel.y < 0 ? -miny:miny
       }
     if(abs(littleball.vel.x) < minx ){
       littleball.vel.x= littleball.vel.x < 0 ? -minx:minx
       }
bonce.play() 
}
}