img="";
status = "";

function setup(){
 canvas = createCanvas(640, 820);
 canvas.position(300, 600);
 objectDetector = ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("model is loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
   if(error){
       console.log("error");
   }
   console.log(results);
}

function preload(){
    img  = loadImage("fruitBasket.jpg");
}

function draw(){
    image(img, 300, 600, 640, 820);
}
