## What is an algorithm
>A process or set of steps to acomplish a certain task.

### Problem Solving Aproches (that might work)
> Many of theese strategies are taken from the book **How to solve it** by __George Polya__

1. Understand the problem
>Ask yourself these questions:
  - Can I recreate the problem with my own words?
  - What are the inputs that go into the problem?
  - What are the outputs that should come from the solution to the problem?
  - Can the outputs be determined from the inputs? Do I have the enough information to solve the problem?
  - How should I label the important pieces of data that are part of the problem?
 
2. Explore concrete examples
  - Come up with examples that help you understand the problem
    - Examples provide sanity checks that the solution eventually works as intended
  - Start with simple examples and progress to more complex examples
  - Explore examples with empty inputs
  - Explore examples with invalid inputs

3. Break it down
  - Take the steps you need to take to solve the problem and write them down explicitly
  - Write the skeleton of your function:

  ```js 
      function charCount(str){
        // make this
        // do that
        // return result
      }
  ```

4. Solve/simplify
  - If blocked bi the problem try to solve a simpler part of it or a simpler problem

5. Look back and refactor
Make yourself these questrions
  - Can you check the result?
  - Can you derive the result diferently?
  - Can you understand it at glance?
  - Can you use the result or method for some other problem?
  - can you improve the performance of your solution?
  - can you think of other ways of refactor?
