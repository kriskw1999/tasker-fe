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
