+++
title = 'Is 100% test coverage better than 80%?'
date = 2023-12-16T18:26:22+01:00
tags = ['Technology','Testing']
draft = true
+++

> The code referred to in this posts can be found in [this repo](https://github.com/cjbackman/mutation-testing-demo).

Do Ninja Turtles, X-Men and effective tests have something in common? As it turns out, yes.

## Tests are good if they catch errors

The purpose of testing software is to assure its quality by catching errors in the code. Ideally as early as possible in the software development lifecycle. Sadly, it's something easier said than done. The art of writing tests is not straightforward, and writing good tests is even harder. Nevertheless, we know it's important so we want to measure the quality of our testing. How can we do that?

It's common to talk about _test coverage_ when gauging how well tested a piece of software is, but let's explore how good of a metric that is. Let's ponder the following questions:

- Does 100% coverage mean 100% of behaviors tested?
- Is 100% test coverage better than 80%?
- Or, are my tests any good?

The answer to all those questions is _it depends_. Annoying, I know. The thing is, test coverage is blunt metric because it only tells us how many lines of the code that were executed in the tests. Simply executing a line doesn't necessarily mean the functionality was tested.

To explain this, let's look at an example of simple calculator.

```js
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  isPositive(number: number): boolean {
    return number >= 0;
  }
}
```

To assure the quality of our calculator, we have the test suite below.

```js
import { Calculator } from "./calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("add should return the sum of two numbers", () => {
    expect(calculator.add(5, 2)).toBe(7);
  });

  test("multiply should return the product of two numbers", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test("isPositive should return true if the number is positive", () => {
    expect(calculator.isPositive(5)).toBe(true);
  });

  test("isPositive should return false if the number is negative", () => {
    expect(calculator.isPositive(-3)).toBe(false);
  });
});
```

If we execute the tests and viola, we get a solid 100% test coverage and everything is green. Awesome, let's ship it. The calculator hits production and boom, we got an incident. The calculator has a bug (did you spot it?). The method `isPositive` returns true for zero, when the correct response should be false.

So, even in this simple code we didn't manage to catch the bug despite having 100% test coverage and all tests passing. Remember code coverage tells you the lines that were executed, not if behaviors were tested.

The tests did not catch the error. The tests are bad. We can't rely on test coverage only. We need to test our tests.

## Test the tests

So, we need to test the tests. One way to do this is through _mutation testing_. It is an approach where errors are deliberately introduced in the source code to see if your test suite will detect the errors.

- What is mutation testing
- How does it work
- Common mutations (and tricky cases)
- Pros and cons

So, what do Ninja Turtles, X-Men and effective tests have in common? *Mutants*, and they might save you from dropping that next bug into production.
