import { EMPTY_MONSTER } from "../constants";
import effectiveAC from "./effective-ac";

const TEST_MODELS = [
  {
    title: "AC 10",
    expectation: 10,
    model: {
      ...EMPTY_MONSTER,
      ac: 10,
    },
  },
  {
    title: "AC 11, 2 saving throw proficiencies",
    expectation: 11,
    model: {
      ...EMPTY_MONSTER,
      ac: 11,
      savingThrows: {
        ...EMPTY_MONSTER.savingThrows,
        strength: {
          proficient: 1,
        },
        dexterity: {
          proficient: 1,
        },
      },
    },
  },
  {
    title: "AC 11, 4 saving throw proficiencies",
    expectation: 13,
    model: {
      ...EMPTY_MONSTER,
      ac: 11,
      savingThrows: {
        ...EMPTY_MONSTER.savingThrows,

        strength: {
          proficient: 1,
        },
        dexterity: {
          proficient: 1,
        },
        constitution: {
          proficient: 1,
        },
        intelligence: {
          proficient: 1,
        },
      },
    },
  },
  {
    title: "CR 0, AC 10, 10 ft. fly speed with ranged attack",
    expectation: 12,
    model: {
      ...EMPTY_MONSTER,
      ac: 10,
      challenge: "0",
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
        flyingRangedAttack: true,
      },
    },
  },
];

test.each(TEST_MODELS)("%j", ({ model, expectation }) => {
  expect(effectiveAC(model)).toEqual(expectation);
});
