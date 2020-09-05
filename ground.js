class Ground {

    constructor(x, y, width, height) {
        var o = {
            isStatic: true
        }


        this.surface = Bodies.rectangle(x, y, width, height,o);
        World.add(world, this.surface);
        this.width = width;
        this.height = height;
    }
    display() {

        var p = this.surface.position

        rectMode(CENTER);
        rect(p.x, p.y, this.width, this.height);
    }
}