/**
 * Roll dice of arbitrary size.
 * @param count {number} The number of dice to roll.
 * @param size {number} The number of sides on the dice.
 * @param modifier {number} Any flat modifier to add to the result.
 * @returns {number} Randomized value
 */
export const xdy = (
  count: number,
  size: number,
  modifier: number = 0,
): number => {
  if (!count || count < 1) {
    throw new Error("Invalid number of dice.");
  }
  if (!size || size < 2) {
    throw new Error("Invalid die size.");
  }
  let result = modifier;

  for (let i = 0; i < count; i++) {
    result += Math.floor(Math.random() * size) + 1;
  }

  return result;
};

export const xd2 = (count: number, modifier: number = 0) =>
  xdy(count, 2, modifier);
export const d2 = (modifier: number = 0) => xdy(1, 2, modifier);

export const xd3 = (count: number, modifier: number = 0) =>
  xdy(count, 3, modifier);
export const d3 = (modifier: number = 0) => xdy(1, 3, modifier);

export const xd4 = (count: number, modifier: number = 0) =>
  xdy(count, 4, modifier);
export const d4 = (modifier: number = 0) => xdy(1, 4, modifier);

export const xd6 = (count: number, modifier: number = 0) =>
  xdy(count, 6, modifier);
export const d6 = (modifier: number = 0) => xdy(1, 6, modifier);

export const xd8 = (count: number, modifier: number = 0) =>
  xdy(count, 8, modifier);
export const d8 = (modifier: number = 0) => xdy(1, 8, modifier);

export const xd10 = (count: number, modifier: number = 0) =>
  xdy(count, 10, modifier);
export const d10 = (modifier: number = 0) => xdy(1, 10, modifier);

export const xd12 = (count: number, modifier: number = 0) =>
  xdy(count, 12, modifier);
export const d12 = (modifier: number = 0) => xdy(1, 12, modifier);

export const xd20 = (count: number, modifier: number = 0) =>
  xdy(count, 20, modifier);
export const d20 = (modifier: number = 0) => xdy(1, 20, modifier);

export const xd100 = (count: number, modifier: number = 0) =>
  xdy(count, 100, modifier);
export const d100 = (modifier: number = 0) => xdy(1, 100, modifier);

export const roll = (rollExpression: string) => {
  const expressions = rollExpression.split(", ");
  const returnVal = [];

  for (let i = 0; i < expressions.length; i++) {
    const checkInt = parseInt(expressions[i], 10);
    const checkIntLength = (checkInt + "").length;

    if (checkInt && expressions[i].substring(checkIntLength, 1) === "d") {
      let rollNote: string = "";
      let rollMultiplier: number = 1;
      if (expressions[i].indexOf("*") !== -1) {
        //There is a multiplier
        rollMultiplier = parseInt(
          expressions[i].substring(expressions[i].indexOf("*") + 1),
          10,
        );
        if (expressions[i].indexOf(" ") !== -1) {
          //There is also a note
          rollNote = expressions[i].substring(expressions[i].indexOf("*") + 1);
          rollNote = expressions[i]
            .substring(expressions[i].indexOf("*") + 1)
            .substring(rollNote.indexOf(" "));
        }
      } else if (expressions[i].indexOf(" ") !== -1) {
        //No multiplier, but still a note
        rollNote = expressions[i].substring(expressions[i].indexOf(" "));
      }
      const rollData = expressions[i].split(" ")[0].split(/d|\+/);
      if (rollData.length < 2) {
        return null;
      }

      const count = parseInt(rollData[0], 10);
      const dieSize = parseInt(rollData[1], 10);
      returnVal[i] = 0;
      if (rollData.length > 2) {
        //start with the mod (if applicable), then add rolls
        returnVal[i] = parseInt(rollData[2], 10);
      }

      returnVal[i] = xdy(count, dieSize, 0) * rollMultiplier;
      if (rollNote) {
        returnVal[i] +=
          " " + rollNote.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
    } else {
      returnVal[i] = expressions[i];
    }
  }

  return returnVal.join(", ");
};

export const diceAverage = (dieSize: number): number => dieSize / 2 + 0.5;
