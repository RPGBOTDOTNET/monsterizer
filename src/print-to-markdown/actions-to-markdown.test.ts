import { EMPTY_MONSTER } from "../constants";
import { type Action, ActionTypes, type Monster } from "../types";
import { getMonsterByName } from "../utils";
import actionsToMarkdown, {
  actionsGroupToMarkdown,
  legendaryActionsToMarkdown,
  spellcastingToDescriptionMarkdown,
} from "./actions-to-markdown";

vi.mock("./functions", () => {
  const formatStatblockParagraph = vi
    .fn()
    .mockImplementation((name: string | undefined): string => {
      return name as string;
    });
  return {
    __esModule: true,
    formatStatblockParagraph: formatStatblockParagraph,
  };
});

describe("actionsGroupToMarkdown", () => {
  it("handles undefined actions array", () => {
    expect(actionsGroupToMarkdown(ActionTypes.Action, undefined)).toEqual("");
  });

  it("handles empty actions array", () => {
    expect(actionsGroupToMarkdown(ActionTypes.Action, [])).toEqual("");
  });

  it("handles actions array with one item", () => {
    const testActions: Action[] = [
      {
        averageDamage: 1,
        description: "Does the thing",
        name: "Foo",
        reusable: 1,
        targets: 1,
      },
    ];
    expect(actionsGroupToMarkdown(ActionTypes.Action, testActions))
      .toEqual(`### Actions
***Foo***. Does the thing`);
  });

  it("handles actions array with multiple items", () => {
    const testActions: Action[] = [
      {
        averageDamage: 1,
        description: "Does the thing",
        name: "Foo",
        reusable: 1,
        targets: 1,
      },
      {
        averageDamage: 1,
        description: "Does the thing",
        name: "Bar",
        reusable: 1,
        targets: 1,
      },
      {
        averageDamage: 1,
        description: "Does the thing",
        name: "Baz",
        reusable: 1,
        targets: 1,
      },
    ];
    expect(actionsGroupToMarkdown(ActionTypes.Action, testActions))
      .toEqual(`### Actions
***Foo***. Does the thing

***Bar***. Does the thing

***Baz***. Does the thing`);
  });
});

describe("legendaryActionsToMarkdown", () => {
  it("handles an empty monster", () => {
    expect(legendaryActionsToMarkdown(EMPTY_MONSTER)).toEqual("");
  });
});

describe("spellcastingToDescriptionMarkdown", () => {
  it("handles an empty monster", () => {
    expect(spellcastingToDescriptionMarkdown(EMPTY_MONSTER)).toEqual("");
  });

  it("handles acolyte", () => {
    const monster = getMonsterByName("acolyte") as Monster;
    expect(spellcastingToDescriptionMarkdown(monster)).toEqual(`
The Acolyte casts one of the following spells, using
(you need to set the innate spellcasting ability)
as its spellcasting ability (spell attack modifier
+0, spell save DC 0)):

At Will: light, sacred flame, thaumaturgy.

1/day each:  bless, cure wounds, sanctuary
`);
  });

  it("handles gnoll", () => {
    const monster = getMonsterByName("gnoll") as Monster;
    expect(spellcastingToDescriptionMarkdown(monster)).toEqual(``);
  });
});

describe("actionsToMarkdown", () => {
  it("handles an empty monster", () => {
    expect(actionsToMarkdown(EMPTY_MONSTER)).toEqual("");
  });

  it("handles acolyte", () => {
    const monster = getMonsterByName("acolyte") as Monster;
    expect(actionsToMarkdown(monster)).toEqual(`### Actions
***Club***. *2 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4) bludgeoning damage.

***Spellcasting***. 
The Acolyte casts one of the following spells, using
(you need to set the innate spellcasting ability)
as its spellcasting ability (spell attack modifier
+0, spell save DC 0)):

At Will: light, sacred flame, thaumaturgy.

1/day each:  bless, cure wounds, sanctuary
`);
  });

  it("handles gnoll", () => {
    const monster = getMonsterByName("gnoll") as Monster;
    expect(actionsToMarkdown(monster)).toEqual(`### Actions
***Bite***. *Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage.

***Spear***. *Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.

***Longbow***. *Ranged Weapon Attack:* +3 to hit, range 150/600 ft., one target. *Hit:* 5 (1d8 + 1) piercing damage.`);
  });

  it("handles knight", () => {
    const monster = getMonsterByName("knight") as Monster;
    expect(actionsToMarkdown(monster)).toEqual(`### Actions
***Multiattack***. The knight makes two melee attacks.

***Greatsword***. *10 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage.

***Heavy Crossbow***. *Ranged Weapon Attack:* +2 to hit, range 100/400 ft., one target. *Hit:* 5 (1d10) piercing damage.

***Leadership (Recharges after a Short or Long Rest)***. For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.
### Reactions
***Parry***. The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.`);
  });
});
