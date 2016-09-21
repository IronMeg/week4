var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;

var buttonSize = 100;

var currentColor = "black";
var currentStroke = 200;
var brushSize = 10;

var currentArea = ""

function setup() {
  createCanvas(600,500);
  topBoundary = 400;
  bottomBoundary = height;
  
  boundary0 =0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = width;
}

function draw() {
  
  stroke(0);
  fill("green");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary3, topBoundary, buttonSize, buttonSize);
  fill("black");
  rect(0,380,width,20);
  fill("#ffbf80");
  rect(boundary4, topBoundary, buttonSize, buttonSize);
  rect(boundary5, topBoundary, buttonSize, buttonSize);
  fill("#e67300");
  noStroke();
  textSize(100);
  text("+",boundary4+23,topBoundary+85);
  text("-",boundary5+33,topBoundary+80);
  
  
  if(mouseY > topBoundary && mouseY < bottomBoundary){
    // console.log("colorPicker");
    
    if(mouseX > boundary0 && mouseX < boundary1){
      currentArea = "area1";
    }else if(mouseX > boundary1 && mouseX <boundary2){
      currentArea = "area2";
    }else if(mouseX > boundary2 && mouseX <boundary3){
      currentArea = "area3";
    }else if (mouseX > boundary3 && mouseX <boundary4){
      currentArea = "area4";
    }else if (mouseX > boundary4 && mouseX<boundary5){
      currentArea = "area5";
    }else if (mouseX >boundary5 && mouseX<boundary6){
      currentArea = "area6";
    }
  }else if (mouseY > 380 && mouseY <topBoundary){
    currentArea = "areaReset"
  }
  else{
    currentArea = "";
  }
  
  fill(currentColor);
  stroke(currentStroke);
  ellipse(mouseX,mouseY, brushSize, brushSize);
}

function mousePressed(){
  console.log(currentArea);
  
  if(currentArea == "area1"){
    currentColor = "green";
    currentStroke = "#66ff99";
  }
  else if(currentArea =="area2"){
    currentColor = "red";
    currentStroke = "#fae";
  }
  else if(currentArea =="area3"){
    currentColor ="#ffff99";
    currentStroke ="yellow";
  }
  else if(currentArea =="areaReset"){
    currentColor = 255;
    currentStroke = 200;
  }
  else if (currentArea =="area4"){
    currentColor = "blue";
    currentStroke = "cyan";
  }else if (currentArea =="area5"){
    brushSize++;
  }else if (currentArea =="area6"){
    brushSize--;
    if(brushSize <=1){
      brushSize =1;
    }
  }
  else{
    currentColor = "black";
  }

}