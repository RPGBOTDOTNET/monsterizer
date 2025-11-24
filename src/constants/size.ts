import type { CreatureSize } from "../types";

export const HIT_DICE_BY_CREATURE_SIZE: Record<CreatureSize, string> = {
  Tiny: "d4",
  Small: "d6",
  Medium: "d8",
  Large: "d10",
  Huge: "d12",
  Gargantuan: "d20",
};
