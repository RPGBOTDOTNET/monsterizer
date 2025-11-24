import averageDiceOutcome from "./average-dice-outcome";

test("No flat values, positive", () => {
  expect(
    averageDiceOutcome({
      count: 1,
      positivity: 1,
      size: 6,
    }),
  ).toEqual(3.5);
});

test("No flat values, negative", () => {
  expect(
    averageDiceOutcome({
      count: 1,
      positivity: -1,
      size: 8,
    }),
  ).toEqual(-4.5);
});

test("Flat values, positive", () => {
  expect(
    averageDiceOutcome({
      count: 1,
      flatValue: 2,
      positivity: 1,
      size: 4,
    }),
  ).toEqual(4.5);
});

test("Flat values, negative", () => {
  expect(
    averageDiceOutcome({
      count: 1,
      flatValue: 1,
      positivity: -1,
      size: 10,
    }),
  ).toEqual(-4.5);
});

test("Omit flat values", () => {
  expect(
    averageDiceOutcome(
      {
        count: 1,
        flatValue: 1,
        positivity: 1,
        size: 10,
      },
      true,
    ),
  ).toEqual(5.5);
  expect(
    averageDiceOutcome(
      {
        count: 1,
        flatValue: 3,
        positivity: -1,
        size: 12,
      },
      true,
    ),
  ).toEqual(-6.5);
});
