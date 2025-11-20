import MONSTER_SRD from "../monsters/monsterSRD";
import getMonsterByName from "./get-monster-by-name";

it("Does not find non-existent monster", () => {
  const found = getMonsterByName("Something non-existent");
  expect(found).toBeUndefined();
});

it("Finds whatever is the first thing in the SRD data", () => {
  const found = getMonsterByName(MONSTER_SRD[0].name);
  expect(found!).toEqual(MONSTER_SRD[0]);
});

it("Finds gnoll, which broke once for some reason and now can't be trusted", () => {
  const found = getMonsterByName("gnoll");
  expect(found!.name).toEqual("Gnoll");
});
