## What is an algorithm
>A process or set of steps to acomplish a certain task.

### Problem Solving Aproches (Five step Protocol)
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
  - How have other people solved this problem?

## Recursion
> Recursive functions invoke the same function with a diferent unput until you reach your base case. The base case is where the recursion stops.
  - Two esential parts of a recursive function!
    - The base case, you have to kno it and program it well.
    - Diferent input each time you call the recursive function.

### Problem Solving Patterns
**1. Frequency Counters**
> Use this to compare two lists throug an { key:value } object
  - Uses objects or sets to collect values/frequesncies of values
  - Can often avoid the need for nested loops or **O(n^2)** operations with arrays or strings.

**2. Multiple Pointers**
> Very efficient for solving problems with minimal space complexity. **The input array must be sorted**
  - Create pointers or values that correspond to an index or position
  - Move towards the beginning, end or middle based on a cetain condition
  - Time complexity **O(N)**, Space complexity **O(1)**

**3. Sliding Window**
>This pattern creates a window (range) which can be either an array or a number from one position to another. Is very useful for tracking a subset of data in an array, string, etc.
  - Create the range
  - Increase, decrease or close the window depending on a certain condition and create a new window.
  - Time complexity **O(N)**

**4. Divide and Conquer**
> This pattern involves dividing a data set into smaller chuncks and then repeating a proccess with a subset of data. __This patter decreases time complexity a lot__
  - Take a set of data
  - Divide into smaller pieces
  - do something to each piece
  - Time complexity **O(log N)**

