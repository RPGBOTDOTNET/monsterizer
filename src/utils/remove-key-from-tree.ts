import _ from "lodash";

/**
 * Recursively walks a tree and removes all instances of the specified key.
 * Useful for stripping uuids before presenting objects to users.
 * @param obj {Object} Any object.
 * @param keyToRemove {String} The string key to be removed.
 */
export const removeKeyFromTree = <T>(obj: T, keyToRemove: string): T => {
  const newT = _.cloneDeep(obj) as unknown as Record<string, unknown>;
  Object.keys(obj as unknown as object).forEach((key) => {
    if (key === keyToRemove) {
      /* tslint:disable-next-line */
      delete newT[key];
    } else if (
      newT[key] &&
      typeof newT[key] === "object" &&
      Object.keys(newT[key] as unknown as Record<string, unknown>).length
    ) {
      newT[key] = removeKeyFromTree(newT[key], keyToRemove);
    }
  });
  return newT as unknown as T;
};

export default removeKeyFromTree;
