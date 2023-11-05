import Shape, { ShapeConstructorProps } from './shape';

export type CircleConstructorProps = { radius: number } & ShapeConstructorProps;

export default class Circle extends Shape {
  // properties
  private _radius: number;

  constructor({ radius, ...ShapeConstructor }: CircleConstructorProps) {
    super(ShapeConstructor);

    this._radius = radius;
  }

  // Getters & setters
  get radius() {
    throw new Error('Method not implemented.');
  }
  set radius(value: any) {
    throw new Error('Method not implemented.');
  }

  get diameter() {
    throw new Error('Method not implemented.');
  }
  set diameter(value: any) {
    throw new Error('Method not implemented.');
  }

  get area(): number {
    throw new Error('Method not implemented.');
  }
  get parameter(): number {
    throw new Error('Method not implemented.');
  }
}

export class InvalidRadiusError extends Error {
  static Message = 'Height cannot be a negative number';

  constructor() {
    super(InvalidRadiusError.Message);
  }
}
