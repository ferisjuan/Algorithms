# Big O notation
* Use Big O Notation To analyze the performance of an algorithm.
* Big O gives a high understanding or time or space complexity of an algorithm
* Big O doesn't care about presition, only general trends _Linear_, _quadratic_, _constant_, _etc._

## Time complexity
- Count the number of *simple operations* in the algorithm
- Simple operations of are +=:2, >=:1, =:1, ++:2, *:1 this is O(1)
- For loops are **O(N)**
- Nested are multyiplied: **O(N)*O(N)= O(N^2)**
- Test performance online (https://rithmschool.github.io/function-timer-demo/ )

### Big O  of Objects
- Objects are unordered key value pairs
- Use objects when you don't need order
- Fast access / insertion and removal
  - Insertion **O(1)**
  - Removal** **O(1)**
  - Searching **O(N)**
  - Access **O(1)**
  - Object.keys **O(N)**
  - [object].hasOwnProperty **O(1)**

## Big O of Arrays
- Odered lists
- Use only when in need of order
  - Searching **O(N)**
  - Access **O(1)**
  - Insertion **Depends on where you do it**
  - Removal** **Depends on where you do it**
  - push **O(1)**
  - pop **O(1)**
  - shift **O(N)**
  - unshift **O(N)**
  - concat **O(N)**
  - slice **O(N)**
  - splice **O(N)**
  - sort **O(N * logN)**
  - forEach/map/filter/reduce/etc. **O(N)**


## Space Complexity
- Most primitives (booleans, numbers, undefined, null) are constant space **O(1)**
- Strings require **O(N)** space (where n is the length of the string)
- Reference types are generally **O(N)** where n is the length (for arrays) or the number of keys (for objects)
