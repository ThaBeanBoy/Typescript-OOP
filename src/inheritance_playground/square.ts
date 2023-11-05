import Shape, { ShapeConstructorProps } from './shape';

export type SquareConstructorProps = {
  height: number;
  width: number;
} & ShapeConstructorProps;

export default class Square extends Shape {
  // properties
  private _height: number;
  private _width: number;

  // constructor
  constructor({ height, width, ...shapConstructore }: SquareConstructorProps) {
    super(shapConstructore);

    this._height = height;
    this._width = width;
  }

  // Getters & Setters
  get height() {
    throw new Error('Method not implemented.');
  }

  set height(value: any) {
    throw new Error('Method not implemented.');
  }

  get width() {
    throw new Error('Method not implemented.');
  }

  set width(value: any) {
    throw new Error('Method not implemented.');
  }

  // Overrides
  get area(): number {
    throw new Error('Method not implemented.');
  }

  get parameter(): number {
    throw new Error('Method not implemented.');
  }
}

export class InvalidHeightError extends Error {
  static Message = 'Height cannot be a negative number';

  constructor() {
    super(InvalidHeightError.Message);
  }
}

export class InvalidWidthError extends Error {
  static Message = 'Width cannot be a negative number';

  constructor() {
    super(InvalidWidthError.Message);
  }
}
