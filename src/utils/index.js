const insertInArray = (originalArray, position, element) => [
  ...originalArray.slice(0, position),
  element,
  ...originalArray.slice(position + 1),
];

export { insertInArray };
