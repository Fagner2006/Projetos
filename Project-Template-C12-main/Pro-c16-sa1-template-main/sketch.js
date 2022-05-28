var box1, box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,100,20,20,2,3);
  box2 = new Box(300,300,30,30,-4,-5);
  
}

function draw() 
{
  background(220);
  box1.display();
  box2.display();
  box1.move();
  box2.move();

}
