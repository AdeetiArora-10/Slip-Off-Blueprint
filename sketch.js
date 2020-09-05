const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var surface;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(230, 100, 50, 50);
    surface = new Ground(200, 360, 400, 40 );
}

function draw() {
    background(0);

    Engine.update(engine);

    box1.display();
    box2.display();
    surface.display();
}