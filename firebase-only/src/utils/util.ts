export const Utils = {
  flattenValuesOfObject(obj: Object) {
    const values: any[] = [];

    const stack = [...Object.values(obj)];
    while (stack.length) {
      const value = stack.pop();

      // primitive values
      if (typeof value !== 'object') {
        values.push(value);
        continue;
      }

      // array
      const hasLength = value.length !== undefined;
      const hasIterator = typeof value[Symbol.iterator] === 'function';
      if (hasLength && hasIterator) {
        stack.push(...value);
        continue;
      }

      // object
      stack.push(...Object.values(value));
    }
    return values;
  },

  checkArrayShallowly(array: any[], array2: any[]) {
    if (array.length !== array2.length) return false;
    if (array === array2) return true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array2[i]) return false;
    }

    return true;
  },

  fromFirestoreDate(date: { seconds: number; nanoseconds: number }): Date {
    const time = date.seconds * 1000 + date.nanoseconds / 1_000_000;
    return new Date(time);
  },
};
