import Shape, { ShapeConstructorProps } from './shape';

export type RectangleConstructorProps = {
  height: number;
  width: number;
} & ShapeConstructorProps;

export default class Rectangle extends Shape {
  // properties
  private _height: number;
  private _width: number;

  // constructor
  constructor({
    height,
    width,
    ...shapConstructore
  }: RectangleConstructorProps) {
    super(shapConstructore);

    if (height < 0) throw new InvalidHeightError();

    this._height = height;

    if (width < 0) throw new InvalidWidthError();

    this._width = width;
  }

  // Getters & Setters
  get height() {
    return this._height;
  }

  set height(value: number) {
    if (value < 0) throw new InvalidHeightError();

    this._height = value;
  }

  get width() {
    return this._width;
  }

  set width(value: number) {
    if (value < 0) throw new InvalidWidthError();

    this._width = value;
  }

  // Overrides
  get area(): number {
    return this._height * this._width;
  }

  get parameter(): number {
    return this._height * 2 + this._width * 2;
  }

  override get details() {
    return `${super.details}\nwidth: ${this._width}\nheight: ${this._height}`;
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
