import {
  damageFromActions,
  damageFromLairActions,
  damageFromSpecialTraits,
} from "..";
import { EMPTY_MONSTER } from "../../constants";
import { SPECIAL_TRAITS } from "../../monsters/monster-traits";
import type {
  Action,
  LairAction,
  LegendaryAction,
  Monster,
  SpecialTrait,
} from "../../types";
import { getMonsterByName } from "../../utils";
import {
  default as averageDPR,
  default as damageFromLegendaryActions,
} from "./average-dpr";

// TODO: Break up these tests

describe("damageFromActions", () => {
  test("Empty monster", () => {
    expect(damageFromActions(EMPTY_MONSTER.reactions as Array<Action>)).toBe(0);
  });

  test("1 reaction with damage", () => {
    const actions: Array<Action> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 1,
        reusable: 3,
      },
    ];
    expect(damageFromActions(actions)).toBe(1);
  });

  test("2 reactions with damage", () => {
    const actions: Array<Action> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 1,
        reusable: 3,
      },
      {
        averageDamage: 2,
        description: "",
        name: "",
        targets: 1,
        reusable: 3,
      },
    ];
    expect(damageFromActions(actions)).toBe(2);
  });

  test("1 reaction with 2 targets", () => {
    const actions: Array<Action> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 2,
        reusable: 3,
      },
    ];
    expect(damageFromActions(actions)).toBe(2);
  });

  test("1 reaction only usable once", () => {
    const actions: Array<Action> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 1,
        reusable: 1,
      },
    ];
    expect(damageFromActions(actions)).toBe(1 / 3);
  });
});

describe("damageFromLairActions", () => {
  test("Empty monster", () => {
    expect(
      damageFromLairActions(
        EMPTY_MONSTER.legendaryActions as Array<LairAction>,
      ),
    ).toBe(0);
  });

  test("1 action with damage", () => {
    const actions: Array<LairAction> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 1,
      },
    ];
    expect(damageFromLairActions(actions)).toBe(1);
  });

  test("2 actions with damage", () => {
    const actions: Array<LairAction> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 1,
      },
      {
        averageDamage: 2,
        description: "",
        name: "",
        targets: 1,
      },
    ];
    expect(damageFromLairActions(actions)).toBe(2);
  });

  test("1 action with 2 targets", () => {
    const actions: Array<LairAction> = [
      {
        averageDamage: 1,
        description: "",
        name: "",
        targets: 2,
      },
    ];
    expect(damageFromLairActions(actions)).toBe(2);
  });
});

describe("damageFromLegendaryActions", () => {
  test("Empty monster", () => {
    expect(damageFromLegendaryActions(EMPTY_MONSTER)).toBe(0);
  });

  test("1 1-damage 1-cost 1-target legendary action", () => {
    const testMonster: Monster = {
      ...EMPTY_MONSTER,
      legendaryActions: [
        {
          averageDamage: 1,
          cost: 1,
          description: "",
          name: "",
          targets: 1,
        },
      ],
    };
    expect(damageFromLegendaryActions(testMonster)).toBe(3);
  });

  test("1 1-damage 3-cost 1-target legendary action", () => {
    const testMonster: Monster = {
      ...EMPTY_MONSTER,
      legendaryActions: [
        {
          averageDamage: 1,
          cost: 1,
          description: "",
          name: "",
          targets: 1,
        },
      ],
    };
    expect(damageFromLegendaryActions(testMonster)).toBe(3);
  });

  test("1 1-damage 1-cost 1-target legendary action, and one 2-cost 5-damage legendary action", () => {
    const actions: Array<LegendaryAction> = [
      {
        averageDamage: 5,
        cost: 2,
        description: "",
        name: "",
        targets: 1,
      },
      {
        averageDamage: 1,
        cost: 1,
        description: "",
        name: "",
        targets: 1,
      },
    ];
    const testMonster: Monster = {
      ...EMPTY_MONSTER,
      legendaryActions: actions,
    };
    expect(damageFromLegendaryActions(testMonster)).toBe(6);
  });

  test("3 damage, 2 targets", () => {
    const actions: Array<LegendaryAction> = [
      {
        averageDamage: 3,
        cost: 1,
        description: "",
        name: "",
        targets: 2,
      },
    ];
    const testMonster: Monster = {
      ...EMPTY_MONSTER,
      legendaryActions: actions,
    };
    expect(damageFromLegendaryActions(testMonster)).toBe(18);
  });
});

describe("damageFromSpecialTraits", () => {
  test("Empty monster", () => {
    expect(
      damageFromSpecialTraits(
        EMPTY_MONSTER.specialTraits as Array<SpecialTrait>,
      ),
    ).toBe(0);
  });

  test("Trait with no damage effect", () => {
    expect(damageFromSpecialTraits([SPECIAL_TRAITS.INVISIBILITY()])).toEqual(0);
  });

  test("Trait with damage per round effect", () => {
    expect(
      damageFromSpecialTraits([SPECIAL_TRAITS.RAMPAGE("bite", 4)]),
    ).toEqual(2);
  });

  test("Trait with damage once effect", () => {
    expect(
      damageFromSpecialTraits([SPECIAL_TRAITS.SURPRISE_ATTACK(5, "")]),
    ).toEqual(5 / 3);
  });

  test("One DPR, one damage once", () => {
    expect(
      damageFromSpecialTraits([
        SPECIAL_TRAITS.RAMPAGE("bite", 4),
        SPECIAL_TRAITS.SURPRISE_ATTACK(5, ""),
      ]),
    ).toEqual(2 + 5 / 3);
  });
});

describe("averageDpr", () => {
  test("Empty monster", () => {
    expect(averageDPR(EMPTY_MONSTER)).toBe(0);
  });

  test("Gnoll", () => {
    expect(averageDPR(getMonsterByName("gnoll")!)).toBe(7);
  });
});
