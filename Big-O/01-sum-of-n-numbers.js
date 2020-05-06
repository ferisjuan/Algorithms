function addUpToV1(n) {
  let total = 0;
  for (let index = 0; index <= n; index++) {
    total += index
  }
  return total;
}

function addUpToV2(n) {
  return n * (n + 1) / 2;
}

function performance(cb, n) {
  let t1 = Date.now();
  cb(n);
  let t2 = Date.now();
  console.log(`Time elapsed: ${Number.parseFloat((t2 - t1) / 1000).toPrecision(20)} seconds.`);
}

performance(addUpToV1, 1000000000);
performance(addUpToV2, 1000000000);


// Big O
/* 
Instead of registering time marks, count the number of simple operations!

Simple operations of addUpToV1 are 5n+2: (+=:2, >=:1, =:1, ++:2 ) operations and asignments
Simple operations of addUpToV2 are 3 ( * + /) only 3 calculations happening!

https://rithmschool.github.io/function-timer-demo/ Test performance online
*/
