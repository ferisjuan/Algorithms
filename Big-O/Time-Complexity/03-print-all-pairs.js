function printAllPairs(n) {
  for (let i = 0; i < n; i++) { //O(n)
    for (let j = 0; j < n; j++) { // nested O(n)
      console.log(i, j);
    }    
  }
}

printAllPairs(3);
// O(n^2);