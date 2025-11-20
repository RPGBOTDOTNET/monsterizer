import type { Monster } from "../types";
import { speedLine } from "./speed-line";

test("formats land only speed", () => {
  const m = { speed: { land: 30 } } as unknown as Monster;
  expect(speedLine(m)).toEqual("30 ft.");
});

test("formats multiple movement types", () => {
  const m = {
    speed: { land: 30, fly: 60, hover: true, swim: 30 },
  } as unknown as Monster;
  expect(speedLine(m)).toContain("30 ft.");
  expect(speedLine(m)).toContain("Fly 60 ft.");
  expect(speedLine(m)).toContain("(Hover)");
  expect(speedLine(m)).toContain("Swim 30 ft.");
});
