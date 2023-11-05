import { describe, expect, test } from 'vitest';
import Circle, {
  CircleConstructorProps,
  InvalidRadiusError,
} from '../src/inheritance_playground/circle';

const testCircleProps: CircleConstructorProps = {
  position: {
    x: 0,
    y: 0,
  },
  generatedOn: new Date(),
  radius: 50,
};

const validTestCircle = new Circle(testCircleProps);

describe('Constructor', () => {
  test('Invalid Radius', () => {
    try {
      new Circle({
        position: {
          x: 0,
          y: 0,
        },
        generatedOn: new Date(),
        radius: -50,
      });

      expect.fail(InvalidRadiusError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidRadiusError);
      expect(error.message).to.equal(InvalidRadiusError.Message);
    }
  });

  test('Correct Circle Constructor Props', () => {
    new Circle(testCircleProps);
  });
});

describe('Getters', () => {
  test('Position', () => {
    expect(validTestCircle.position.x, 'Correct x position').toBe(
      testCircleProps.position.x
    );

    expect(validTestCircle.position.y, 'Correct y position').toBe(
      testCircleProps.position.y
    );
  });

  test('Generation Date', () => {
    expect(validTestCircle.generatedOn.getTime()).toBe(
      testCircleProps.generatedOn.getTime()
    );
  });

  test('Radius', () => {
    expect(validTestCircle.radius).toBe(testCircleProps.radius);
  });

  test('Diameter', () => {
    expect(validTestCircle.diameter).toBe(2 * testCircleProps.radius);
  });

  test('Details', () => {
    expect(validTestCircle.details).toBe(
      `position: (${validTestCircle.position.x}, ${validTestCircle.position.y})\nradius: ${validTestCircle.radius}`
    );
  });
});

describe('Calculations', () => {
  test('Area', () => {
    expect(validTestCircle.area).toBe(
      2 * Math.PI * testCircleProps.radius ** 2
    );
  });

  test('Parameter/Circumference', () => {
    expect(validTestCircle.parameter).toBe(
      2 * Math.PI * testCircleProps.radius
    );
  });
});

describe('Setters', () => {
  const testCircleChangesProps: CircleConstructorProps = {
    position: { x: 50, y: 50 },
    generatedOn: new Date(),
    radius: 150,
  };

  test('Position Reassignment', () => {
    validTestCircle.position = testCircleChangesProps.position;
    expect(validTestCircle.position.x).toBe(testCircleChangesProps.position.x);
    expect(validTestCircle.position.y).toBe(testCircleChangesProps.position.y);
  });

  test('X Position Reassignment', () => {
    validTestCircle.position.x = 999;
    expect(validTestCircle.position.x).toBe(999);
  });

  test('Y Position Reassigment', () => {
    validTestCircle.position.y = 999;
    expect(validTestCircle.position.y).toBe(999);
  });

  test('Radius', () => {
    validTestCircle.radius = 1000;
    expect(validTestCircle.radius).toBe(1000);
  });

  test('Diameter', () => {
    validTestCircle.diameter = 5000;
    expect(validTestCircle.radius).toBe(2500);
  });

  test('Invalid Radius', () => {
    try {
      validTestCircle.radius = -1;
      expect.fail(InvalidRadiusError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidRadiusError);
      expect(error.message).to.equal(InvalidRadiusError.Message);
    }
  });
  // invalid diameter
  test('Invalid Diameter', () => {
    try {
      validTestCircle.diameter = -1;
      expect.fail(InvalidRadiusError.Message);
    } catch (error) {
      expect(error).to.be.an.instanceOf(InvalidRadiusError);
      expect(error.message).to.equal(InvalidRadiusError.Message);
    }
  });
});
