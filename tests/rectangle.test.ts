import { describe, expect, test } from 'vitest';
import Rectangle, {
  RectangleConstructorProps,
  InvalidHeightError,
  InvalidWidthError,
} from '../src/inheritance_playground/rectangle';

const testRectangleProps: RectangleConstructorProps = {
  position: { x: 0, y: 0 },
  generatedOn: new Date(),
  height: 30,
  width: 40,
};

const validTestRectangle = new Rectangle(testRectangleProps);

describe('Rectangle Constructor', () => {
  // Checking negative height
  test('Negative Height', () => {
    try {
      new Rectangle({
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
      new Rectangle({
        position: { x: 0, y: 0 },
        generatedOn: new Date(),
        height: 30,
        width: -40,
      });
      expect.fail();
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidWidthError);
      expect(error.message).to.equal(InvalidWidthError.Message);
    }
  });

  // Checking proper details
  test('Correct Rectangle Constructor Props', () => {
    new Rectangle(testRectangleProps);
  });
});

describe('Getters', () => {
  test('Position', () => {
    expect(validTestRectangle.position.x, 'Correct x position').toBe(
      testRectangleProps.position.x
    );

    expect(validTestRectangle.position.y, 'Correct y position').toBe(
      testRectangleProps.position.y
    );
  });

  // Generation date
  test('Generation Date', () => {
    expect(validTestRectangle.generatedOn.getTime()).toBe(
      testRectangleProps.generatedOn.getTime()
    );
  });

  // height
  test('Height', () => {
    expect(validTestRectangle.height).toBe(testRectangleProps.height);
  });

  // width
  test('Width', () => {
    expect(validTestRectangle.width).toBe(testRectangleProps.width);
  });

  // details
  test('Details', () => {
    expect(validTestRectangle.details).toBe(
      `position: (${testRectangleProps.position.x}, ${testRectangleProps.position.y})\nwidth: ${testRectangleProps.width}\nheight: ${testRectangleProps.height}`
    );
  });
});

describe('Calculations', () => {
  // area
  test('Area', () => {
    expect(validTestRectangle.area).toBe(1200);
  });

  // parameter
  test('Parameter', () => {
    expect(validTestRectangle.parameter).toBe(
      2 * testRectangleProps.width + 2 * testRectangleProps.height
    );
  });
});

describe('Setters', () => {
  const testRectangleChangesProps: RectangleConstructorProps = {
    position: { x: 50, y: 50 },
    generatedOn: new Date(),
    height: 80,
    width: 120,
  };

  test('Position Reassignment', () => {
    validTestRectangle.position = testRectangleChangesProps.position;
    expect(validTestRectangle.position.x).toBe(
      testRectangleChangesProps.position.x
    );
    expect(validTestRectangle.position.y).toBe(
      testRectangleChangesProps.position.y
    );
  });

  test('X Position Reassignment', () => {
    validTestRectangle.position.x = 999;
    expect(validTestRectangle.position.x).toBe(999);
  });

  test('Y Position Reassigment', () => {
    validTestRectangle.position.y = 999;
    expect(validTestRectangle.position.y).toBe(999);
  });

  test('Height Reassignment Error', () => {
    try {
      validTestRectangle.height = -30;
      expect.fail(InvalidHeightError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidHeightError);
      expect(error.message).to.equal(InvalidHeightError.Message);
    }
  });

  test('Width Reassignment Error', () => {
    try {
      validTestRectangle.width = -30;
      expect.fail(InvalidWidthError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidWidthError);
      expect(error.message).to.equal(InvalidWidthError.Message);
    }
  });

  test('Height Reassignment', () => {
    validTestRectangle.height = testRectangleChangesProps.height;
    expect(validTestRectangle.height).toBe(testRectangleChangesProps.height);
  });

  test('Width Reassignment Error', () => {
    validTestRectangle.width = testRectangleChangesProps.width;
    expect(validTestRectangle.width).toBe(testRectangleChangesProps.width);
  });
});
