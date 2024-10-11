# Objectives

The goal of the assessment is NOT to just get the task done.  This is a free form assessment where:

- the task is openbook, open internet, open collaboration (we expect you to ask for help or search the web)
- software development is both subjective and objective. The code here is barebones and is supposed to be as such.  We expect the candidate to code with their own standards in mind and communicate them to us along the way to properly build out a code base
- stressing the fact that this is a collaborative session, intended to mirror a normal day to day

## Programming Goals

- Build out an backend that can handle the following business use cases:
  - An API endpoint does a form of a fizzbuzz task: Given an integer n, iterate between 1 to n and return a string where:  
    - i == "FizzBuzz" if i is divisible by 3 and 5.
    - i == "Fizz" if i is divisible by 3.
    - i == "Buzz" if i is divisible by 5.
    - i == i (as a string) if none of the above conditions are true.
    - Examples:
      - Example 1, Input: n = 3, Output: `"12Fizz"`
      - Example 2, Input: n = 5, Output: `"12Fizz4Buzz"`
      - Example 3, Input: n = 15, Output: `"12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz"`
  - An API endpoint that requires no input and returns the fizzbuzz output but with a random result:
    - Uses a random number between 1 and 50 as the input for fizzbuzz
  - An API endpoint that returns a random number:
    - Should be able to support numbers 0 through 65535

## Notes

- Use the unit tests in the `tests` folder to test out the code
- Run the server first (via `npm run dev` and you can then subsquently test with `npm run test`)
