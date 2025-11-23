import { pick } from "lodash";
import type { Monster } from "../../types";

/**
 * Parses data entered by a user and converts it to an object of the desired type, omitting unwanted property keys
 * and filling in missing keys with blank entries based on the example object.
 * @param dataToImport {string} String copy of data to import. Typically taken from user text input.
 * @param exampleObject {any} Example empty object of desired type. Will be used to fill in any missing properties.
 * @returns {typeof exampleObject}
 */
export const parseImportData = (
  dataToImport: string,
  exampleObject: Monster,
): typeof exampleObject => {
  try {
    const parsedData = JSON.parse(dataToImport);
    const keysToPick = Object.keys(exampleObject);
    const dataObject = pick(parsedData, keysToPick);
    return {
      ...exampleObject,
      ...dataObject,
      _monsterizerVersion: exampleObject._monsterizerVersion,
    };
  } catch {
    throw new Error(
      "Unable to parse import data. Please try re-entering the data. If this still does not work, please email RPGBOT@RPGBOT.net and include the data you're trying to import",
    );
  }
};

export default parseImportData;
