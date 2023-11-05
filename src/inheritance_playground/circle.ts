import Shape, { ShapeConstructorProps } from './shape';

export type CircleConstructorProps = { radius: number } & ShapeConstructorProps;

export default class Circle extends Shape {
  // properties
  private _radius: number;

  constructor({ radius, ...ShapeConstructor }: CircleConstructorProps) {
    if (radius < 0) throw new InvalidRadiusError();

    super(ShapeConstructor);

    this._radius = radius;
  }

  // Getters & setters
  get radius() {
    return this._radius;
  }
  set radius(value: number) {
    if (value < 0) throw new InvalidRadiusError();

    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }
  set diameter(value: number) {
    if (value < 0) throw new InvalidRadiusError();

    this.radius = value / 2;
  }

  get area(): number {
    return Math.PI * this._radius ** 2;
  }

  get parameter(): number {
    return 2 * Math.PI * this._radius;
  }

  override get details() {
    return `${super.details}\nradius: ${this._radius}`;
  }
}

export class InvalidRadiusError extends Error {
  static Message = 'Height cannot be a negative number';

  constructor() {
    super(InvalidRadiusError.Message);
  }
}
