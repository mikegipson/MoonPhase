let dayX = 0;
let dayZ = 0;


function setup(){
  createCanvas(1000,1000,WEBGL);
}

function draw() {
  //ambientLight(255);
  background(0);
  noCursor();
  noStroke();
  


  stroke(0);
  ambientMaterial(200,200,200);

  sphere(200,75,75);
  console.log(mouseX+" "+mouseY);

  let dayX = sin(radians(frameCount));
  let dayZ = cos(radians(frameCount));
  phase(dayX,dayZ);
  
}

function phase(dayX, dayZ){
  directionalLight(255,255,255,dayX,0,dayZ);

}

