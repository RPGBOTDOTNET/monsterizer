import { EMPTY_MONSTER } from "../constants";
import offensiveCRBase from "./offensive-cr-base";

test("Empty monster", () => {
  expect(offensiveCRBase(EMPTY_MONSTER)).toEqual("0");
});
