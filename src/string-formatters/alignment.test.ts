import type { Monster } from "../types";
import alignment from "./alignment";

test("returns 'Any Alignment' when both fields are falsy", () => {
  const m = { alignment: { lawChaos: "", goodEvil: "" } } as unknown as Monster;
  expect(alignment(m)).toBe("Any Alignment");
});

test("returns 'Unaligned' when both are 'Unaligned'", () => {
  const m = {
    alignment: {
      lawChaos: "Unaligned",
      goodEvil: "Unaligned",
    },
  } as unknown as Monster;
  expect(alignment(m)).toBe("Unaligned");
});

test("formats two-word alignment", () => {
  const m = {
    alignment: { lawChaos: "Chaotic", goodEvil: "Evil" },
  } as unknown as Monster;
  expect(alignment(m)).toBe("Chaotic Evil");
});
