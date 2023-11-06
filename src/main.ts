import Shape from "./inheritance_playground/shape";
import Rectangle from "./inheritance_playground/rectangle";
import Circle from "./inheritance_playground/circle";

const Shapes: Shape[] = [
  new Rectangle({position: {x: 0, y: 2}, generatedOn: new Date(), width: 100, height: 500}),
  new Rectangle({position: {x: 0, y: 2}, generatedOn: new Date(), width: 500, height: 200}),
  new Circle({position: {x: 3, y: 16}, generatedOn: new Date(), radius: 300})
]

Shapes.forEach(shp => console.log(DistanceFromOrigin(shp)))

function DistanceFromOrigin(arg : Shape) {
  return Math.sqrt((arg.position.x)**2 + (arg.position.y)**2);
}
