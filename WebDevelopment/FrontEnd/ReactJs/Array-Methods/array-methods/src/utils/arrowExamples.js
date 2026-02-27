// Arrow Function Examples

export const square = (x) => x * x;

export const double = (x) => x * 2;

export const add = (a, b) => a + b;

export const createUser = (name) => ({
  username: name,
  createdAt: new Date().getFullYear(),
});
