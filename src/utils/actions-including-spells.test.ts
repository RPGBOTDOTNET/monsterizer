import { EMPTY_MONSTER, testWarlock } from "../constants";
import { ActionTypes, type Monster } from "../types";
import actionsIncludingSpells from "./actions-including-spells";
import getMonsterByName from "./get-monster-by-name";

describe("actionsIncludingSpells", () => {
  it("handles empty monster", () => {
    expect(actionsIncludingSpells(EMPTY_MONSTER, ActionTypes.Action)).toEqual(
      EMPTY_MONSTER.actions,
    );
    expect(
      actionsIncludingSpells(EMPTY_MONSTER, ActionTypes.BonusAction),
    ).toEqual(EMPTY_MONSTER.bonusActions);
    expect(actionsIncludingSpells(EMPTY_MONSTER, ActionTypes.Reaction)).toEqual(
      EMPTY_MONSTER.reactions,
    );
  });

  it("handles acolyte with spellcasting", () => {
    const monster = getMonsterByName("Acolyte") as Monster;

    expect(actionsIncludingSpells(monster, ActionTypes.Action).length).toEqual(
      7,
    );
    expect(actionsIncludingSpells(monster, ActionTypes.Action)).toEqual([
      ...monster.actions,
      {
        averageDamage: 0,
        description: "",
        name: "bless (spell cast at 1st level)",
        reusable: 2,
        targets: 0,
      },
      {
        averageDamage: 0,
        description: "",
        name: "cure wounds (spell cast at 1st level)",
        reusable: 2,
        targets: 0,
      },
      {
        averageDamage: 0,
        description: "",
        name: "sanctuary (spell cast at 1st level)",
        reusable: 2,
        targets: 0,
      },
      {
        averageDamage: 0,
        description: "",
        name: "light (cantrip)",
        reusable: 3,
        targets: 0,
      },
      {
        averageDamage: 4.5,
        description: "",
        name: "sacred flame (cantrip)",
        reusable: 3,
        targets: 1,
      },
      {
        averageDamage: 0,
        description: "",
        name: "thaumaturgy (cantrip)",
        reusable: 3,
        targets: 0,
      },
    ]);
    expect(actionsIncludingSpells(monster, ActionTypes.BonusAction)).toEqual(
      [],
    );
    expect(actionsIncludingSpells(monster, ActionTypes.Reaction)).toEqual([]);
  });

  it("handles drow with innate spellcasting", () => {
    const monster = getMonsterByName("Elf, Drow") as Monster;

    expect(actionsIncludingSpells(monster, ActionTypes.Action).length).toEqual(
      5,
    );
    expect(actionsIncludingSpells(monster, ActionTypes.Action)).toEqual([
      ...monster.actions,
      {
        averageDamage: 0,
        description: "",
        name: "dancing lights (innate spell)",
        reusable: 3,
        targets: 0,
      },
      {
        averageDamage: 0,
        description: "",
        name: "darkness (innate spell)",
        reusable: 1,
        targets: 0,
      },
      {
        averageDamage: 0,
        description: "",
        name: "faerie fire (innate spell)",
        reusable: 1,
        targets: 0,
      },
    ]);
    expect(actionsIncludingSpells(monster, ActionTypes.BonusAction)).toEqual(
      [],
    );
    expect(actionsIncludingSpells(monster, ActionTypes.Reaction)).toEqual([]);
  });

  it("handles test warlock with pact magic", () => {
    const monster = testWarlock;

    // expect(actionsIncludingSpells(monster, ActionTypes.Action).length).toEqual(
    //   5
    // );
    expect(actionsIncludingSpells(monster, ActionTypes.Action)).toEqual([
      {
        averageDamage: 13.5,
        description: "",
        name: "shatter (pact magic spell cast at 2nd level)",
        reusable: 2,
        targets: 2,
      },
      {
        averageDamage: 5.5,
        description: "",
        name: "eldritch blast (cantrip)",
        reusable: 3,
        targets: 1,
      },
    ]);
    expect(actionsIncludingSpells(monster, ActionTypes.BonusAction)).toEqual([
      {
        averageDamage: 0,
        description: "",
        name: "hex (pact magic spell cast at 2nd level)",
        reusable: 2,
        targets: 0,
      },
    ]);
    expect(actionsIncludingSpells(monster, ActionTypes.Reaction)).toEqual([
      {
        averageDamage: 16.5,
        description: "",
        name: "hellish rebuke (2nd level) (pact magic spell cast at 2nd level)",
        reusable: 2,
        targets: 1,
      },
    ]);
  });
});
