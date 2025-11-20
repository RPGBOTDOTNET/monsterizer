import type { Monster } from "../types";

export const languagesText = (monster: Monster): string => {
  const trimmedLanguages = monster.languages.trim();
  if (trimmedLanguages) {
    if (monster.cantSpeak) {
      return `Understands ${trimmedLanguages}, but can't speak.`;
    } else {
      return trimmedLanguages;
    }
  } else {
    return "--";
  }
};

export default languagesText;
