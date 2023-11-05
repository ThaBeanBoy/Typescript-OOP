export type positionType = {
  x: number;
  y: number;
};

export type ShapeConstructorProps = {
  position: positionType;
  generatedOn: Date;
};

export default abstract class Shape {
  // Properties
  position: positionType;
  public readonly generatedOn: Date;

  // Constructor
  constructor({ position, generatedOn }: ShapeConstructorProps) {
    this.position = position;
    this.generatedOn = generatedOn;
  }

  // Utility functions
  get details() {
    return `position: (${this.position.x}, ${this.position.y})`;
  }

  abstract get area(): number;

  abstract get parameter(): number;
}
