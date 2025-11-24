import { flatten } from "lodash";
import { type ReactElement, useState } from "react";
import { spellAttack, spellDc } from "../../calculators";
import { addSymbolToNumber } from "../../string-formatters";
import type {
  AbilityScore,
  InnateSpell,
  Monster,
  Spellcasting,
  SpellcastingSpell,
} from "../../types";
import { castsSpellsBeforeCombat } from "../../utils";

const findSpellcastingAbility = (
  monster: Monster,
): AbilityScore | undefined => {
  if (
    monster.innateSpellcasting &&
    monster.innateSpellcasting.spellcastingAbility
  ) {
    return monster.innateSpellcasting.spellcastingAbility;
  }
  if (monster.spellcasting && monster.spellcasting.length) {
    const spellcastingBlockWithAbility = monster.spellcasting.find(
      (spellcastingBlock) => {
        return !!spellcastingBlock.spellcastingAbility;
      },
    );
    if (spellcastingBlockWithAbility) {
      return spellcastingBlockWithAbility.spellcastingAbility;
    }
  }
  return;
};

const mapSpellName = (spell: SpellcastingSpell) => {
  const trimmedName = spell.name.trim();
  return spell.castBeforeCombat ? `${trimmedName}*` : trimmedName;
};

type SpellcastingRendererProps = {
  monster: Monster;
};

export const SpellcastingRendererUpdated = ({
  monster,
}: SpellcastingRendererProps): ReactElement => {
  const [doesPreCast] = useState<boolean>(() =>
    castsSpellsBeforeCombat(monster),
  );

  if (!monster.innateSpellcasting && !monster.spellcasting) return <></>;

  const allAtWillSpells: string[] = [];
  const allLimitedUseSpells: SpellcastingSpell[] = [];

  if (monster.innateSpellcasting) {
    const atWillInnateSpells = (monster.innateSpellcasting.spells || [])
      .filter((spell: InnateSpell) => !spell.uses && spell.name)
      .map(mapSpellName);
    allAtWillSpells.push(...atWillInnateSpells);

    const remainingInnateSpells = (
      monster.innateSpellcasting.spells || []
    ).filter((spell: InnateSpell) => spell.uses && spell.name);
    allLimitedUseSpells.push(...remainingInnateSpells);
  }

  if (monster.spellcasting) {
    monster.spellcasting.forEach((spellcastingGroup: Spellcasting) => {
      if (spellcastingGroup.spells.cantrips) {
        const cantripNames = spellcastingGroup.spells.cantrips
          .map(mapSpellName)
          .filter(Boolean);
        allAtWillSpells.push(...cantripNames);
      }
      if (spellcastingGroup.spells.cantrips) {
        const mappedSpells = flatten([
          ...(spellcastingGroup.spells[1] || []),
          ...(spellcastingGroup.spells[2] || []),
          ...(spellcastingGroup.spells[3] || []),
          ...(spellcastingGroup.spells[4] || []),
          ...(spellcastingGroup.spells[5] || []),
          ...(spellcastingGroup.spells[6] || []),
          ...(spellcastingGroup.spells[7] || []),
          ...(spellcastingGroup.spells[8] || []),
          ...(spellcastingGroup.spells[9] || []),
        ]).filter((spell) => spell.name);
        allLimitedUseSpells.push(...mappedSpells);
      }
    });
  }

  allAtWillSpells.sort();
  allLimitedUseSpells.sort();

  const spellsByCount: { [count: number | string]: SpellcastingSpell[] } = {};
  allLimitedUseSpells.forEach((spell: InnateSpell) => {
    const spellUses = spell.uses || 1;
    if (spellsByCount[spellUses]) {
      spellsByCount[spellUses].push(spell);
    } else {
      spellsByCount[spellUses] = [spell];
    }
  });

  const spellAttackMod =
    monster.innateSpellcasting && monster.innateSpellcasting.spellcastingAbility
      ? spellAttack(monster, monster.innateSpellcasting?.spellcastingAbility)
      : 0;
  const spellsaveDc =
    monster.innateSpellcasting && monster.innateSpellcasting.spellcastingAbility
      ? spellDc(monster, monster.innateSpellcasting?.spellcastingAbility)
      : 0;

  if (!allAtWillSpells.length && !allLimitedUseSpells.length) {
    return <></>;
  }

  return (
    <>
      <p>
        <strong>
          <em>Spellcasting</em>
        </strong>
        . The {monster.nameShort || monster.name} casts one of the following
        spells, using&nbsp;
        {findSpellcastingAbility(monster) ||
          "(you need to set the innate spellcasting ability)"}
        &nbsp;as its spellcasting ability (spell attack modifier&nbsp;
        {addSymbolToNumber(spellAttackMod)}, spell save DC {spellsaveDc}):
      </p>
      {!!allAtWillSpells.length && (
        <p>At Will:&nbsp;{allAtWillSpells.filter(Boolean).join(", ")}.</p>
      )}
      {!!Object.keys(spellsByCount).length &&
        Object.keys(spellsByCount)
          .filter((key) => spellsByCount[key].length)
          .sort()
          .map(
            (key: string): ReactElement => (
              <p key={key}>
                {key}/day each:&nbsp;
                {spellsByCount[key]
                  .map(mapSpellName)
                  .filter(Boolean)
                  .sort()
                  .join(", ")}
              </p>
            ),
          )}

      {doesPreCast && (
        <p>
          * The {monster.nameShort || monster.name} casts these spells on itself
          before combat.
        </p>
      )}
    </>
  );
};

export default SpellcastingRendererUpdated;
