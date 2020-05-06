# Big O notation
## Time complexity
Count the number of *simple operations* in the algorithm

Simple operations of are +=:2, >=:1, =:1, ++:2, *:1 this is O(1)

For loops are *O(n)*

Nested are multyiplied: n*n= O(n2)

[Test performance online] (https://rithmschool.github.io/function-timer-demo/ )

## Space Complexity
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the length of the string)
- Reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)