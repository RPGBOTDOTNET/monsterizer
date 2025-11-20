import { expect, test, vi } from "vitest";
import type { DamageModel, Monster } from "../types";

vi.mock("../constants", () => ({
  STATS_BY_CR_2014: {
    baseDefensive: { ac: 10 },
  },
}));

vi.mock("./defensive-cr-base", () => ({
  default: () => "baseDefensive",
}));

vi.mock("./effective-ac", () => ({
  default: () => 14,
}));

test("calculates AC effect on CR from effective AC and recommended AC", async () => {
  const { acEffectOnCr } = await import("./ac-effect-on-cr");
  const result = acEffectOnCr(
    {} as unknown as Monster,
    {} as unknown as DamageModel,
  );
  // (14 - 10) / 2 => 2
  expect(result).toBe(2);
});
