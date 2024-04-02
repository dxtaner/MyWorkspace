class TimeLimitedCache {
  constructor() {
    this.cache = {};
  }

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const currentTime = new Date().getTime();

    // Check if the key already exists and is not expired
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
      this.cache[key] = {
        value: value,
        expirationTime: currentTime + duration,
      };
      return true;
    }

    // Set the value with expiration time
    this.cache[key] = {
      value: value,
      expirationTime: currentTime + duration,
    };

    return false;
  }

  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const currentTime = new Date().getTime();

    // Check if the key exists and is not expired
    if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
      return this.cache[key].value;
    }

    return -1; // Key not found or expired
  }

  /**
   * @return {number} count of non-expired keys
   */
  count() {
    const currentTime = new Date().getTime();
    let count = 0;

    // Count non-expired keys
    for (const key in this.cache) {
      if (this.cache[key].expirationTime > currentTime) {
        count++;
      }
    }

    return count;
  }
}

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 100)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
