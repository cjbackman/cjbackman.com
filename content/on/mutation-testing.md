+++
title = 'Is 100% code coverage better than 80%?'
date = 2023-12-16T18:26:22+01:00
tags = ['Technology','Testing']
draft = true
+++

> If you want to try out the stuff described in this post, check out this [this repo](https://github.com/cjbackman/mutation-testing-demo).

Did you know that Ninja Turtles, X-Men and effective tests have something in common?

## Tests are good if they catch errors

The purpose of testing software is to assure its quality. The idea is simple: catch errors before the user does. While the idea is simple the practice is not. Writing tests is not straightforward, and writing good tests is even harder. This means that not only is the quality of software variable, so is the _quality of tests_. Moreover, errors are expensive, and the later you discover them in the software development cycle the more expensive they get. Consequently, we have a financial incentive to assure the quality of our tests. How can we do that?

When talking about gauging test quality, it's common to talk about _code coverage_. A metric defined as the share of lines of the total codebase that were executed during the tests. To understand if that's a good metric, let's ponder the following questions:

- Does 100% coverage imply that 100% of the functionality is tested?
- Is 100% code coverage better than 80%?
- Or, simply put, are my tests any good?

The answer to all those questions is: _it depends_. Annoying, I know. The thing is, code coverage is a blunt metric because executing a line doesn't necessarily mean all behaviors encapsulated in that line were tested.

To explain this, let's look at an example of a simple calculator.

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

This is a silly calculator able to do basic addition, multiplication and to check if a number is positive. Despite its sillyness, I take pride in producing high-quality code, so I've created the following test suite to go with it.

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

Executing these tests yields a perfect 100% coverage and all tests pass with flying colors. Awesome, let's ship it. The calculator hits production and boom, we have an incident. It turns out the calculator has a bug (did you spot it?). The method `isPositive` returns true for zero, when the correct response should be false.

Alright, the example is stupid but the point I'm trying to make is not. Code coverage is not a reliable metric if you want to be confident that your tests are able to catch errors. 80% code coverage of good tests can be better than 100% coverage of bad tests.

We need to find a different way.

## How can we check if our tests are good?

What we're talking about here is to find a reliable method to test our tests. A possible approach to achieve that is to leverage something called _mutation testing_. It's a type of testing where errors are deliberately introduced in the source code to see if your test suite will detect them. These modified variants of the source code with injected errors are called mutants, and we want to kill them.

## Mutation testing offers a way

Mutation testing is all about killing mutants. On a high level, the process is:

1. Create mutants by modifying the source code to introduce errors.
2. Execute your existing test suite against the mutants.​
3. If the tests fail, the mutant is killed. If the tests pass, the mutant survived.​
4. If mutants survive, improve the tests and repeat the process.​

Or as a visual representation:

![process.jpg](/mutation-testing/process.jpg)

_Figure 1. A high-level process of how mutation testing works._

The kind of modifications done to the source are not random but based on pre-defined rules, called _mutators_ or _operators_. There are many types of mutations, and different mutation testing frameworks will support different mutators (I'm using [Stryker](https://stryker-mutator.io) for these examples and here is [the full list of mutators supported by them](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/)). A few common types are:

- **Statement mutations** change statements, e.g., duplicating or deleting a statement or a block of statements.​
- **Decision mutations** alter operators, e.g., arithmetical, relational, and logical operators.​
- **Value mutations** transform constants or literals in the code, e.g., changing a value to a very big or small value.​
- **Exception Mutations** modify exception handling in the code, e.g., removing a try-catch block.​
- **Function Call Mutations** mutate the parameters of a function call, or removing the function call entirely.

Enough theory, now we have a rough understanding of how mutation testing works, let's apply this to our calculator.

### A high mutation score indicates high test quality

If we run the mutation tests on our calculator and its test suite, we get an output like this:

![stryker-output.png](/mutation-testing/stryker-output.png)

_Figure 2. The output from Stryker when mutation testing the calculator._

Don't mind all information but you'll see that we get something that says _% score_ (highlighted by a red box), that is the _mutation score_. This is the share of successfully killed mutants. 100% means all mutants were killed (awesome!) and 0% percent means all mutants surived (bad tests!). Additionally, you can see information about the surviving mutant (also highlighted by a red box), namely applying the [EqualityOperator](https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/#equality-operator) so that `return number >= 0;` was changed to `return number > 0;`.

How can we improve our tests based on this information? We add a test case for `.isPositive(0)` like:

```js
test("isPositive should return false if the number is zero", () => {
  expect(calculator.isPositive(0)).toBe(false);
});
```

If re-run our unit tests, including this new case, we catch the bug. After fixing the bug and re-running the mutation tests as well we get a code coverage and mutation score of 100%. In summary, mutation testing allows us to:

- Measure the effectiveness of our tests at a granular level.​
- Provide insights about gaps in our test suite and how to improve it.​
- Indirectly contribute to better code quality by making tests more comprehensive.​

However, as always, there are also some drawbacks. We'll explore those next.

### Don't aim for a 100% mutation score

- Why not aim for 100%? Tricky mutators

Cons

- Misleading Some mutations might be equivalent to the original program, aka equivalent mutants, leading to false positives.​
- Some mutations are doomed to always be killed, aka incompetent mutants, and are thus not contributing any valuable information.​
- Mutation testing can be time-consuming and computationally expensive due to the large number of mutants.​
- There is additional complexity of having to juggle yet another framework.

So, what do Ninja Turtles, X-Men and effective tests have in common? *Mutants*, and while they probably won't save the world, they might save you from shipping that next bug into production.

## Glossary

Mutation testing glossary

- Mutatants
- Mutation score
- Mutators
- Equivalent
