import { describe, expect, test } from 'vitest';
import Square, {
  SquareConstructorProps,
  InvalidHeightError,
  InvalidWidthError,
} from '../src/inheritance_playground/square';

const testSquareProps: SquareConstructorProps = {
  position: { x: 0, y: 0 },
  generatedOn: new Date(),
  height: 30,
  width: 40,
};

const validTestSquare = new Square(testSquareProps);

describe('Square Constructor', () => {
  // Checking negative height
  test('Negative Height', () => {
    try {
      new Square({
        position: { x: 0, y: 0 },
        generatedOn: new Date(),
        height: -30,
        width: 40,
      });
      expect.fail();
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidHeightError);
      expect(error.message).to.equal(InvalidHeightError.Message);
    }
  });

  // Checking negative with
  test('Negative Width', () => {
    try {
      new Square({
        position: { x: 0, y: 0 },
        generatedOn: new Date(),
        height: -30,
        width: 40,
      });
      expect.fail();
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidWidthError);
      expect(error.message).to.equal(InvalidWidthError.Message);
    }
  });

  // Checking proper details
  test('Correct Square Constructor', () => {
    try {
      new Square(testSquareProps);
    } catch (error) {}
  });
});

describe('Getters', () => {
  // Position
  test('Position', () => {
    expect(validTestSquare.position.x, 'Correct x position').toBe(
      testSquareProps.position.x
    );

    expect(validTestSquare.position.y, 'Correct y position').toBe(
      testSquareProps.position.y
    );
  });

  // Generation date
  test('Generation Date', () => {
    expect(validTestSquare.generatedOn.getTime()).toBe(
      testSquareProps.generatedOn.getTime()
    );
  });

  // height
  test('Height', () => {
    expect(validTestSquare.height).toBe(testSquareProps.height);
  });

  // width
  test('Width', () => {
    expect(validTestSquare.width).toBe(testSquareProps.width);
  });

  // details
  test('Details', () => {
    expect(validTestSquare.details).toBe(
      `position: (${testSquareProps.position.x}, ${testSquareProps.position.y})\nwidth: ${testSquareProps.width}\nheight: ${testSquareProps.height}`
    );
  });
});

describe('Calculations', () => {
  // area
  test('Area', () => {
    expect(validTestSquare.area).toBe(1200);
  });

  // parameter
  test('Parameter', () => {
    expect(validTestSquare.parameter).toBe(
      2 * testSquareProps.width + 2 * testSquareProps.height
    );
  });
});

describe('Setters', () => {
  const testSquareChangesProps: SquareConstructorProps = {
    position: { x: 50, y: 50 },
    generatedOn: new Date(),
    height: 80,
    width: 120,
  };

  test('Height Reassignment', () => {
    validTestSquare.height = testSquareChangesProps.height;
    expect(validTestSquare.height).toBe(testSquareChangesProps.height);
  });

  test('Width Reassignment Error', () => {
    validTestSquare.width = testSquareChangesProps.width;
    expect(validTestSquare.width).toBe(testSquareChangesProps.width);
  });

  test('Height Reassignment Error', () => {
    try {
      validTestSquare.height = -30;
      expect.fail(InvalidHeightError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidWidthError);
      expect(error.message).to.equal(InvalidWidthError.Message);
    }
  });

  test('Width Reassignment Error', () => {
    try {
      validTestSquare.width = -30;
      expect.fail(InvalidWidthError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidWidthError);
      expect(error.message).to.equal(InvalidWidthError.Message);
    }
  });

  test('Position Reassignment', () => {
    validTestSquare.position = testSquareChangesProps.position;
    expect(validTestSquare.position.x).toBe(testSquareChangesProps.position.x);
    expect(validTestSquare.position.y).toBe(testSquareChangesProps.position.y);
  });

  test('X Position Reassignment', () => {
    validTestSquare.position.x = 999;
    expect(validTestSquare.position.x).toBe(999);
  });

  test('Y Position Reassigment', () => {
    validTestSquare.position.y = 999;
    expect(validTestSquare.position.y).toBe(999);
  });
});
