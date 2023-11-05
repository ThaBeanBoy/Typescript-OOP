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
  private _position: positionType;
  public readonly generatedOn: Date;

  // Constructor
  constructor({ position, generatedOn }: ShapeConstructorProps) {
    this._position = position;
    this.generatedOn = generatedOn;
  }

  // Getters & setters
  get position() {
    throw new Error('Method not implemented.');
  }

  set position(value: positionType) {
    throw new Error('Method not implemented.');
  }

  // Utility functions
  get details() {
    return `position: (${this._position.x}, ${this._position.y})`;
  }

  abstract get area(): number;

  abstract get parameter(): number;
}
