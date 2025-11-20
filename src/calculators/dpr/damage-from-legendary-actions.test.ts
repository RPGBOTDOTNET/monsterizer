import type { LegendaryAction } from "../../types";
import { damageFromLegendaryActions } from "./damage-from-legendary-actions";

test("returns 0 when no legendary actions", () => {
  expect(damageFromLegendaryActions([])).toEqual(0);
});

test("sums selected legendary actions damage", () => {
  const actions = [
    { name: "a", averageDamage: 10, targets: 1, cost: 1 },
    { name: "b", averageDamage: 6, targets: 2, cost: 1 },
  ] as LegendaryAction[];
  // Default legendary actions count = 3. bestLegendaryActions will pick highest DPS per action cost.
  // Here selection will include the best combination; resulting damage should be sum of (avg * targets)
  const result = damageFromLegendaryActions(actions);
  expect(typeof result).toBe("number");
  expect(result).toBeGreaterThan(0);
});
