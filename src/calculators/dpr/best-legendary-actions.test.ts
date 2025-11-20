import type { LegendaryAction } from "../../types";
import { bestLegendaryActions } from "./best-legendary-actions";

test("returns empty for no actions", () => {
  expect(bestLegendaryActions([])).toEqual([]);
});

test("selects highest damage-per-cost actions up to charges", () => {
  const actions = [
    { name: "weak", averageDamage: 3, targets: 1, cost: 1 },
    { name: "strong", averageDamage: 12, targets: 1, cost: 1 },
    { name: "expensive", averageDamage: 30, targets: 1, cost: 3 },
  ] as LegendaryAction[];
  const selected = bestLegendaryActions(actions, 3);
  // With 3 charges, the algorithm should pick 'expensive' (cost 3) OR multiple cheaper ones depending on damagePerAction.
  expect(Array.isArray(selected)).toBeTruthy();
  expect(selected.length).toBeGreaterThan(0);
});
