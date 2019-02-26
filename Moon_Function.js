
function setup(){
  createCanvas(1000,1000,WEBGL);
}

function draw() {
  //ambientLight(255);
  background(0);
  let dayCount = (frameCount/30%30);
  console.log(dayCount);
  moon(dayCount);
  
}


function moon(phase){
  noStroke();
  noCursor();
  ambientMaterial(200,200,200);
  let dayX = sin(radians(map(phase,1,30,0,360)));
  let dayZ = cos(radians(map(phase,1,30,0,360)));
  directionalLight(255,255,255,dayX,0,dayZ);
  sphere(200,75,75);
}

