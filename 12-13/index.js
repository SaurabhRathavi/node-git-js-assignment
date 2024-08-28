//12---Create a debounce and throttle function and also list use cases.

const getData = () => {
  console.log("api calling....");
};

const myDebounceFunction = (fun, delay) => {
  let timer;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
    }, delay);
  };
};

const optimiseFunction = myDebounceFunction(getData, 100);

//13---Create a Simple Memoization function.

function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
function memo(fun, key) {
  const cache = {};
  return (...args) => {
    const key = args[0];
    if (cache[key]) return cache[key];
    else {
      return (cache[key] = fun(key));
    }
  };
}
