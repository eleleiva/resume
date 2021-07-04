import { toCamelCase } from './string';

function isObject(object) {
  return (
    object === Object(object) &&
    !Array.isArray(object) &&
    typeof o !== 'function'
  );
}

function keysToCamelCase(object) {
  if (isObject(object)) {
    const objectCopy = {};

    Object.keys(object).forEach((key) => {
      objectCopy[toCamelCase(key)] = keysToCamelCase(object[key]);
    });

    return objectCopy;
  }

  if (Array.isArray(object)) {
    return object.map((item) => keysToCamelCase(item));
  }

  return object;
}

export { keysToCamelCase, isObject };
