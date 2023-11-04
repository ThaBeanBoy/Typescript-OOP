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
  public readonly _generatedOn: Date;

  // Constructor
  constructor({ position, generatedOn }: ShapeConstructorProps) {
    this._position = position;
    this._generatedOn = generatedOn;
  }

  // Getters & setters
  get position() {
    return this._position;
  }

  set position(value: positionType) {
    this._position = value;
  }

  // Utility functions
  details(): string {
    return `position: (${this._position.x}, ${this._position.y})`;
  }

  abstract get area(): number;

  abstract get parameter(): number;
}
