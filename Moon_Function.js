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
  
  console.log(mouseX+" "+mouseY);

  let phase = frameCount%30;
  
  let dayX = sin(radians(frameCount));
  let dayZ = cos(radians(frameCount));
  moon(dayX,dayZ);
  
}


function moon(phase){
  stroke(0);
  ambientMaterial(200,200,200);
  directionalLight(255,255,255,dayX,0,dayZ);
  sphere(200,75,75);
}

