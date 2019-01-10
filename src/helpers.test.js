import isEqual from './helpers';

it('isEqual should return FALSE when 2 objects are different', () => {
  const obj1 = {
    c: {
      x: {
        s: 5,
      },
    },
  };

  const obj2 = {
    c: {
      x: {
        s: 4,
      },
    },
  };
  const result = isEqual(obj1, obj2);

  expect(result).toBe(false);
});

it('isEqual should return TRUE when 2 objects are equal', () => {
  const obj1 = { here: { is: "an"}, object: 2};

const obj2 = { here: { is: "an" }, object: 2 };
  const result = isEqual(obj1, obj2);

  expect(result).toBe(true);
});

it('isEqual should return TRUE when 2 arrays are equal', () => {
  const arr1 = ['aa', ["s"]];

  const arr2 = ['aa', ["s"]];
  const result = isEqual(arr1, arr2);

  expect(result).toBe(true);
});

it('isEqual should return FALSE when 2 arrays are NOT equal', () => {
  const arr1 = ['a', ["s"]];

  const arr2 = ['aa', 5];
  const result = isEqual(arr1, arr2);

  expect(result).toBe(false);
});
