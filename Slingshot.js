class SlingShot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffnens:0.04,
            length:10
        } 
        this.pointB = pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;

    }
    display(){
        if (this.sling.body){
       // console.log(pointB);
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

}
