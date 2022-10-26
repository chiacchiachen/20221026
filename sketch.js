var mic
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  mic= new p5.AudioIn(); //麥克風設定
  mic.start(); //麥克風設定
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  var micLevel=mic.getLevel() //麥克風設定
  console.log(micLevel) //麥克風設定
  push()
    translate(width/2,height/2)
    ellipse(0,0,400)
    ellipse(0,0,100,50)
    ellipse(0-25,0,20) //左鼻孔
    ellipse(25,0,20) //右鼻孔
      
    ellipse(-75,-100,60) 
    ellipse(+75,-100,60)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20) //左邊眼睛
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20,20)
    // if(mouseIsPressed)
    // {
    //   fill(255)
    //   arc(0,75,200,150,0,180)
    // }
    // else
    // {
    // fill(255,0,0)
    // arc(0,75,200,80,0,180) //arc是弧度，全嘴唇，pi是角度
    // }

    arc(0,75,200,75+micLevel*1000,0,180)

    fill(255)
    arc(0,74,200,50,0,180) //蓋掉上嘴垂的顏色
  pop() 
}