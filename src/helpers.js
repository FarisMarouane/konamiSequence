export default function isEqual(obj1, obj2) {
  function inner() {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    // Test if they have same keys
    for (let i = 0; i < keys1.length; i++) {
      if (!keys2.includes(keys1[i])) {
        return false;
      }
    }
    for (let i = 0; i < keys1.length; i++) {
      // Check if value at key is not an object
      if (
        typeof obj1[keys1[i]] === 'object' &&
        typeof obj2[keys2[i]] === 'object'
      ) {
        return isEqual(obj1[keys1[i]], obj2[keys2[i]]);
      } else {
        if (obj1[keys1[i]] !== obj2[keys2[i]]) {
          return false;
        }
      }
    }
  }
  if (inner() === undefined) {
    return true;
  }

  return inner();
}
