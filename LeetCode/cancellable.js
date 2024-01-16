function cancellable(fn, args, t) {
  let cancel = false;
  const results = [];

  const cancelFn = () => {
    cancel = true;
  };

  const executeFn = (time) => {
    if (cancel) return;

    const result = {
      time: time,
      returned: fn(...args),
    };

    results.push(result);

    setTimeout(() => {
      executeFn(time + t);
    }, t);
  };

  // Initial call
  executeFn(0);

  return cancelFn;
}

// Example usage:

const example1Fn = (x) => x * 2;
const example1Args = [4];
const example1T = 35;
const example1CancelTimeMs = 190;
const example1CancelFn = cancellable(example1Fn, example1Args, example1T);
setTimeout(example1CancelFn, example1CancelTimeMs);
console.log(example1CancelFn); // Output will be the cancel function

// Similarly, you can use cancellable function for other examples as well.
