export const insertItemArray = (arr, index, newItem) => [
  ...arr.slice(0, index),

  newItem,

  ...arr.slice(index),
]
