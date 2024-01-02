function expect(value) {
  return {
    toBe(expected) {
      if (value === expected) return true;
      throw new Error("Not Equal");
    },
    notToBe(notExpected) {
      if (value !== notExpected) return true;
      throw new Error("Equal");
    },
  };
}
