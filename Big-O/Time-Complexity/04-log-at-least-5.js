function logAtLeast5(n) {
  for (let i = 0; i < Math.max(5, n); i++) {
    console.log(i);
  }
} // O(n) it will grow as n grows

logAtLeast5(3);

function logAtMost5(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
} // O(1) it wont grow acording to n past 5

logAtMost5(10);