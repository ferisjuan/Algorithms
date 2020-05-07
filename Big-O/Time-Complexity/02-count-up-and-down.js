function countUpAndDown(n) {
  console.log("Going up");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }

  console.log("At the top! \nGoing down!");
  for (let j = n; j >= 0; j--) {
  console.log(j);
  }
  console.log("Way back, See U!");
}

countUpAndDown(5);

// O(n)