let height = 600;
let width = 800;
let wallThickness = 30;
let wallColor = "silver";

let { Engine, World, Bodies, Render, MouseConstraint, Mouse, Runner } = Matter;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        height,
        width,
        wireframes: false
    }
});

Engine.run(engine);
Render.run(render);
Runner.run(Runner.create(), engine);
World.add(engine.world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

let boxUpper = Bodies.rectangle(width / 2, 0, width, wallThickness, { isStatic: true, render: { fillStyle: wallColor } });
let boxLower = Bodies.rectangle(width / 2, height, width, wallThickness, { isStatic: true, render: { fillStyle: wallColor } });
let boxLeft = Bodies.rectangle(0, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: wallColor } });
let boxRight = Bodies.rectangle(width, height / 2, wallThickness, height, { isStatic: true, render: { fillStyle: wallColor } });
World.add(engine.world, [boxUpper, boxLower, boxLeft, boxRight]);

const canvas = document.querySelector("canvas");

for (let i = 0; i < 30; i++) {
    let shape = Math.floor(Math.random() * 3);
    switch (shape) {
        case 0:
            let circle1 = Bodies.circle(Math.random() * 500 + 60, Math.random() * 500 + 60, 15, { restitution: 1 });
            World.add(engine.world, circle1); break;
        case 1:
            let circle2 = Bodies.rectangle(Math.random() * 500 + 60, Math.random() * 500 + 60, 50, 50, { restitution: 1 });
            World.add(engine.world, circle2); break;
        case 2:
            let circle3 = Bodies.polygon(Math.random() * 500 + 60, Math.random() * 500 + 60, Math.floor(Math.random() * 2) + 2, 50, { restitution: 1 });
            World.add(engine.world, circle3); break;
        default:
            let circle4 = Bodies.trapezoid(Math.random() * 500 + 60, Math.random() * 500 + 60, 50, 50, Math.random() * 4, { restitution: 1 });
            World.add(engine.world, circle4); break;
    }
}