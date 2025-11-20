import { type Monster } from "../types";

export const alignment = (monsterStats: Monster): string => {
  if (!monsterStats.alignment.lawChaos && !monsterStats.alignment.goodEvil) {
    return "Any Alignment";
  } else if (
    monsterStats.alignment.lawChaos === "Unaligned" &&
    monsterStats.alignment.goodEvil === "Unaligned"
  ) {
    return "Unaligned";
  } else {
    return `${monsterStats.alignment.lawChaos} ${monsterStats.alignment.goodEvil}`;
  }
};
export default alignment;
