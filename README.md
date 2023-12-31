# Typescript Object Orientated Programming

## Table of Content

- [Typescript Object Orientated Programming](#typescript-object-orientated-programming)
  - [Table of Content](#table-of-content)
  - [Resources](#resources)
  - [Introduction](#introduction)
  - [Setup](#setup)
    - [Vite](#vite)
    - [Vitest](#vitest)
      - [Vitest UI](#vitest-ui)
  - [OOP](#oop)
  - [Test cases](#test-cases)
    - [Write test cases](#write-test-cases)
    - [Correct code](#correct-code)
    - [Refactor the code](#refactor-the-code)

## Resources

- [Course](https://www.linkedin.com/learning/typescript-object-oriented-programming/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Google TypeScript Style](https://google.github.io/styleguide/tsguide.html)
- [VSCode](https://code.visualstudio.com/)

## Introduction

[certificate](https://www.linkedin.com/learning/certificates/ab98bf41a09079b73f104f0c61de3ddd894132f60733145412edd380bfb4b307)

[![certificate](./assets/certificate.png)](https://www.linkedin.com/learning/certificates/ab98bf41a09079b73f104f0c61de3ddd894132f60733145412edd380bfb4b307)

This is largely based on the [Typescript Object Orientated Programming](https://www.linkedin.com/learning/typescript-object-oriented-programming/) course that is on [LinkedIn Learning](https://www.linkedin.com/learning/). I already have experience with typescript, so the course wasn't challenging. The only thing I did not understand is the difference between `extends` & `implements`

The more exciting thing for me was that this was my first time learning & using a testing framework.

The following concepts were covered:

- Classes & Objects
- Constructor & class properties
- Methods
- Getters & Setters
- Inheritance
- Polymorphism
- Encapsulation
- Accessibility modifiers

## Setup

### Vite

The reason why I used [Vite](https://vitejs.dev/) is that I didn't want to install [typescript](https://www.typescriptlang.org/) & manually configure it, make changes to the package.json scripts etc... Honestly I was just feeling lazy. So I looked for something that would just provide full [Typescript](https://www.typescriptlang.org/) support from the word go.

running the following command

```bash
npm create vite@latest
```

will result in [vite](https://vitejs.dev/) asking us what type of project we would like to initialise. I simply picked vanilla with typescript, & it generated everything needed for the project.

### Vitest

I recently experienced testing in Java applications, which made me realise the importance of testing. Unlike manual testing, which I used to do 🥲, tests are like scripts that test your code. In this case, it was unit testing. I majorly tested in the Rectangle & Circle class.

The test framework I used was [Vitest](https://vitest.dev/) because of 2 reasons:

- It supports ES Modules right out of the box, with no configuration required.
- It supports Typescript right out of the box, with no configuration required.

#### Vitest UI

![tests](./assets/tests.png)

Another thing I loved about about [Vitest](https://vitest.dev/) is the [Vitest ui](https://vitest.dev/guide/ui.html).

> Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests

It was cool to work with [Vitest ui](https://vitest.dev/guide/ui.html), but I didn't take the time to find a way to integrate [Vitest ui](https://vitest.dev/guide/ui.html) with my text editor ([VSCode](https://code.visualstudio.com/))

## OOP

This was pretty basic, especially since I've been dealing with these concepts at school & in my own free time through my personal projects and/or reading about them. The basic explanation I was taught is,

> A class is like a blueprint, the object is the actual thing.

The classes [UserClass](./src/challenge_1.ts), [Admin](./src/challenge_2.ts), [Shape](./src/inheritance_playground/shape.ts), [Rectangle](./src/inheritance_playground/rectangle.ts), [Circle](./src/inheritance_playground/circle.ts). You will find the objects in the [main](./src/main.ts), [challenge.test](./tests/challenge_1.test.ts), [circle.test](./tests/circle.test.ts) & [rectangle.test](./tests/rectangle.test.ts)

Unlike the course, I decided to use objects for the constructors, I thought it was easier to pass an object to the constructor because it works like named parameters, which makes it easier to work with in my opinion.

I also experimented with my own classes ([Shape](./src/inheritance_playground/shape.ts), [Rectangle](./src/inheritance_playground/rectangle.ts), [Circle ](./src/inheritance_playground/circle.ts)) because I wanted to revise OOP concepts with my own scenario (using shapes).

Each class had getters and setters for each property. Each class also had their own methods, & you'll notice that [Rectangle](./src/inheritance_playground/rectangle.ts), [Circle ](./src/inheritance_playground/circle.ts) also override a few methods from the parent class [Shape](./src/inheritance_playground/shape.ts).

I displayed polymorphism in the [main.ts](./src/main.ts).

A few other concepts from the [course](https://www.linkedin.com/learning/typescript-object-oriented-programming/) were also covered.

## Test cases

The tests were the most fun, but time-consuming from this project. This

There are 3 main phases in TDD (test-driven development):

1. Write test cases,
2. Correct code
3. Refactor the code

### Write test cases

The first thing I did was write test cases. The tests not only test the code with valid data but also check how the methods & constructors react when invalid data is passed in.

### Correct code

After writing the test cases, as expected, the tests will fail. From this point, the methods & constructors were implemented. this was done until all test cases were passed.

### Refactor the code

After all the test cases are done, checks for redundancy & possible ways to improve the code is done.
