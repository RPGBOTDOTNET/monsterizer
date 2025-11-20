import {
  EMPTY_CONDITION_MODEL,
  EMPTY_DAMAGE_MODEL,
  EMPTY_MONSTER,
} from "../constants";
import challengeRating from "./challenge-rating";
import defensiveCR from "./defensive-cr";
import offensiveCR from "./offensive-cr";

vi.mock("./defensive-cr", () => {
  const defensiveCR = vi.fn();
  return {
    __esModule: true,
    default: defensiveCR,
    offensiveCRBase: defensiveCR,
  };
});

vi.mock("./offensive-cr", () => {
  const offensiveCR = vi.fn();
  return {
    __esModule: true,
    default: offensiveCR,
    offensiveCRBase: offensiveCR,
  };
});

test("Invalid defensive CR", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "foo");
  vi.mocked(offensiveCR).mockImplementation(() => "0");
  expect(() => {
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL);
  }).toThrow();
});

test("Invalid offensive CR", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "0");
  vi.mocked(offensiveCR).mockImplementation(() => "foo");
  expect(() => {
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL);
  }).toThrow();
});

test("Defensive CR 0, Offensive CR 0", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "0");
  vi.mocked(offensiveCR).mockImplementation(() => "0");
  expect(
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("0");
});

test("Defensive CR 1/2, Offensive CR 1/2", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "1/2");
  vi.mocked(offensiveCR).mockImplementation(() => "1/2");
  expect(
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("1/2");
});

test("Defensive CR 1, Offensive CR 1/2", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "1");
  vi.mocked(offensiveCR).mockImplementation(() => "1/2");
  expect(
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("1");
});

test("Defensive CR 1, Offensive CR 1/4", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "1");
  vi.mocked(offensiveCR).mockImplementation(() => "1/4");
  expect(
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("1/2");
});

test("Defensive CR 10, Offensive CR 12", () => {
  vi.mocked(defensiveCR).mockImplementation(() => "10");
  vi.mocked(offensiveCR).mockImplementation(() => "12");
  expect(
    challengeRating(EMPTY_MONSTER, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("11");
});
