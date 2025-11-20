import { EMPTY_MONSTER } from "../constants";
import type { Monster } from "../types";
import speedsEffectonAC from "./speeds-effect-on-ac";

type TestModel = {
  title: string;
  expectation: number;
  model: Monster;
};

const TEST_MODELS: TestModel[] = [
  {
    title: "No flight speed",
    expectation: 0,
    model: EMPTY_MONSTER,
  },
  {
    title: "CR 0 fly speed but can't attack",
    expectation: 0,
    model: {
      ...EMPTY_MONSTER,
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
      },
    },
  },
  {
    title: "CR 0 fly speed but explicitly can't attack",
    expectation: 0,
    model: {
      ...EMPTY_MONSTER,
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
        flyingRangedAttack: false,
      },
    },
  },
  {
    title: "CR 0 fly speed and can attack at range",
    expectation: 2,
    model: {
      ...EMPTY_MONSTER,
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
        flyingRangedAttack: true,
      },
    },
  },
  {
    title: "CR 1/2 fly speed and can attack at range",
    expectation: 2,
    model: {
      ...EMPTY_MONSTER,
      challenge: "1/2",
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
        flyingRangedAttack: true,
      },
    },
  },
  {
    title: "CR 12 fly speed and can attack at range",
    expectation: 0,
    model: {
      ...EMPTY_MONSTER,
      challenge: "12",
      speed: {
        ...EMPTY_MONSTER.speed,
        fly: 10,
        flyingRangedAttack: true,
      },
    },
  },
];

test.each(TEST_MODELS)("%j", ({ model, expectation }) => {
  expect(speedsEffectonAC(model as Monster)).toEqual(expectation);
});
