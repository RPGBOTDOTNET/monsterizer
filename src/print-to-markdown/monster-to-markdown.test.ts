import { EMPTY_MONSTER } from "../constants";
import type { Monster } from "../types";
import actionsToMarkdown from "./actions-to-markdown";
import extrasToMarkdown from "./extras-to-markdown";
import monsterToMarkdown from "./monster-to-markdown";
import specialTraitsToMarkdown from "./special-traits-to-markdown";
import statsTableToMarkdown from "./stats-table-to-markdown";

vi.mock("./actions-to-markdown", () => {
  const actionsToMarkdown = vi.fn().mockImplementation((): string => "3");
  return {
    __esModule: true,
    default: actionsToMarkdown,
    actionsToMarkdown: actionsToMarkdown,
  };
});

vi.mock("./extras-to-markdown", () => {
  const extrasToMarkdown = vi.fn().mockImplementation((): string => "4");
  return {
    __esModule: true,
    default: extrasToMarkdown,
    extrasToMarkdown: extrasToMarkdown,
  };
});

vi.mock("./special-traits-to-markdown", () => {
  const specialTraitsToMarkdown = vi.fn().mockImplementation((): string => "2");
  return {
    __esModule: true,
    default: specialTraitsToMarkdown,
    specialTraitsToMarkdown: specialTraitsToMarkdown,
  };
});

vi.mock("./stats-table-to-markdown", () => {
  const statsTableToMarkdown = vi.fn().mockImplementation((): string => "1");
  return {
    __esModule: true,
    default: statsTableToMarkdown,
    statsTableToMarkdown: statsTableToMarkdown,
  };
});

const testMonster: Monster = {
  ...EMPTY_MONSTER,
  name: "foo",
};

describe("monsterToClassicStatBlockMarkdown", () => {
  test("Calls things in the right order", () => {
    expect(monsterToMarkdown(testMonster)).toEqual(`## ${testMonster.name}
1
2
3
4`);
  });

  test("Passes correct parameters to functions", () => {
    monsterToMarkdown(testMonster);

    expect(actionsToMarkdown).toHaveBeenCalledWith(testMonster);
    expect(extrasToMarkdown).toHaveBeenCalledWith(testMonster);
    expect(specialTraitsToMarkdown).toHaveBeenCalledWith(
      testMonster.specialTraits,
    );
    expect(statsTableToMarkdown).toHaveBeenCalledWith(testMonster);
  });
});
