/**
 * Get an item from an array by its id
 * @param id The id of the item to get
 * @param array The array to search in
 */
export const getById = <T extends { id: number }>(
  id: number,
  array: T[]
): T | undefined => {
  return array.find((item) => item.id === id);
};

/**
 * Checks if an element with given id is in a collection and replaces it with the new one if found, or adds the new one if not found
 * @param collection
 * @param item
 */
export const addToCollectionOrReplaceById = <T extends { id: number }>(
  collection: T[],
  item: T
) => {
  const foundIndex = collection.findIndex((i) => i.id === item.id);

  if (foundIndex !== -1) {
    collection.splice(foundIndex, 1, item);
  } else {
    collection.push(item);
  }
};
