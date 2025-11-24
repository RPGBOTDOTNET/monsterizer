import { flatten, get, lowerFirst, upperFirst } from "lodash";
import { toOrdinal } from "number-to-words";
import { useState, type ReactElement } from "react";
import {
  pactMagicLevel,
  spellAttack,
  spellcastingLevel,
  spellDc,
} from "../../calculators";
import {
  PACT_MAGIC_SLOT_LEVEL_BY_LEVEL,
  PACT_MAGIC_SLOTS_BY_LEVEL,
  SPELL_SLOTS_BY_LEVEL,
} from "../../constants";
import { addSymbolToNumber } from "../../string-formatters";
import {
  SpellcastingTypes,
  type Monster,
  type Spellcasting,
  type SpellcastingSpell,
} from "../../types";

const creatureCastsSpellsBeforeCombat = (
  spellcastingGroup: Spellcasting,
): boolean => {
  const allSpells = flatten(Object.values(spellcastingGroup.spells));
  return Boolean(
    allSpells.find((spell: SpellcastingSpell) => spell.castBeforeCombat),
  );
};

type PactMagicSectionProps = {
  hasMultipleCastingTypes: boolean;
  monster: Monster;
  pactLevels: number;
  pactSlotLevel: number;
  pactSlots: number;
  spellcastingGroup: Spellcasting;
};

const PactMagicSection = ({
  hasMultipleCastingTypes,
  monster,
  pactLevels,
  pactSlotLevel,
  pactSlots,
  spellcastingGroup,
}: PactMagicSectionProps): ReactElement => {
  const [castsSpellsBeforeCombat] = useState<boolean>(() =>
    creatureCastsSpellsBeforeCombat(spellcastingGroup),
  ); // Use a state hook because the calculation is expensive

  const monsterName = (monster.nameShort || monster.name).trim();
  const ordinalPactLevels = toOrdinal(pactLevels);
  const ordinalSlotLevel = toOrdinal(pactSlotLevel);
  const finalSpellAttack = addSymbolToNumber(
    spellcastingGroup.spellAttack ||
      spellAttack(monster, spellcastingGroup.spellcastingAbility),
  );
  const finalSpellDc =
    spellcastingGroup.spellDc ||
    spellDc(monster, spellcastingGroup.spellcastingAbility);

  const mappedCantrips = (spellcastingGroup.spells.cantrips || [])
    .map((spell: SpellcastingSpell) => spell.name.trim())
    .sort()
    .join(", ");
  const mappedSpells = flatten([
    ...(spellcastingGroup.spells[1] || []),
    ...(spellcastingGroup.spells[2] || []),
    ...(spellcastingGroup.spells[3] || []),
    ...(spellcastingGroup.spells[4] || []),
    ...(spellcastingGroup.spells[5] || []),
  ])
    .map((spell: SpellcastingSpell) => spell.name.trim())
    .sort()
    .join(", ");

  const spellLevelsString =
    pactSlotLevel > 1 ? `1st-${ordinalSlotLevel}` : "1st";

  return (
    <div>
      <p>
        <strong>
          <em>
            {hasMultipleCastingTypes
              ? `${upperFirst(spellcastingGroup.class)} `
              : ""}
            Spellcasting
          </em>
        </strong>
        . The {monsterName} is an&nbsp;
        {ordinalPactLevels}-level spellcaster. Its spellcasting ability is&nbsp;
        {spellcastingGroup.spellcastingAbility} (spell save DC {finalSpellDc}
        ,&nbsp;
        {finalSpellAttack} to hit with spell attacks). The {monsterName}&nbsp;
        {spellcastingGroup.knowsSpells
          ? `knows the following ${lowerFirst(spellcastingGroup.class)} spells`
          : `has the following ${lowerFirst(
              spellcastingGroup.class,
            )} spells prepared`}
        . {spellcastingGroup.extraText || ""}
      </p>
      <p>Cantrips (at will): {mappedCantrips}</p>
      <p>
        {spellLevelsString} level ({pactSlots} {ordinalSlotLevel}-level
        slots):&nbsp;
        {mappedSpells}
      </p>

      {castsSpellsBeforeCombat && (
        <p>*The {monsterName} casts these spells on itself before combat.</p>
      )}
    </div>
  );
};

type SpellcastingSectionProps = {
  hasMultipleCastingTypes: boolean;
  monster: Monster;
  spellcastingGroup: Spellcasting;
  spellcastingLevel: number;
  spellSlots: number[];
};

const SpellcastingSectionLevelSubsection = ({
  level,
  slots,
  spells,
}: {
  level: number;
  slots: number;
  spells: SpellcastingSpell[];
}): ReactElement => {
  const ordinalLevel = toOrdinal(level);
  const mappedSpells = spells
    .map(
      (spell: SpellcastingSpell) =>
        `${spell.name.trim()}${spell.castBeforeCombat ? "*" : ""}`,
    )
    .filter(Boolean)
    .sort()
    .join(", ");

  if (!mappedSpells) {
    return <></>;
  }

  return (
    <p>
      {ordinalLevel}-level ({slots} slots): {mappedSpells}
    </p>
  );
};

const SPELL_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SpellcastingSection = ({
  hasMultipleCastingTypes,
  monster,
  spellcastingGroup,
  spellcastingLevel,
  spellSlots,
}: SpellcastingSectionProps): ReactElement => {
  const [castsSpellsBeforeCombat] = useState<boolean>(() =>
    creatureCastsSpellsBeforeCombat(spellcastingGroup),
  ); // Use a state hook because the calculation is expensive

  const monsterName = monster.nameShort || monster.name;
  const ordinalSpellcasterLevels = toOrdinal(spellcastingLevel);
  const finalSpellAttack = addSymbolToNumber(
    spellcastingGroup.spellAttack ||
      spellAttack(monster, spellcastingGroup.spellcastingAbility),
  );
  const finalSpellDc =
    spellcastingGroup.spellDc ||
    spellDc(monster, spellcastingGroup.spellcastingAbility);

  const mappedCantrips = (spellcastingGroup.spells.cantrips || [])
    .map((spell: SpellcastingSpell) => spell.name)
    .sort()
    .join(", ");

  return (
    <div>
      <p>
        <strong>
          {hasMultipleCastingTypes
            ? `${upperFirst(spellcastingGroup.class)} `
            : ""}
          Spellcasting
        </strong>
        . The {monsterName} is an&nbsp;
        {ordinalSpellcasterLevels}-level spellcaster. Its spellcasting ability
        is {spellcastingGroup.spellcastingAbility} (spell save DC {finalSpellDc}
        , {finalSpellAttack} to hit with spell attacks). The {monsterName}&nbsp;
        {spellcastingGroup.knowsSpells
          ? `knows the following ${lowerFirst(spellcastingGroup.class)} spells`
          : `has the following ${lowerFirst(
              spellcastingGroup.class,
            )} spells prepared`}
        . {spellcastingGroup.extraText || ""}
      </p>
      {!!mappedCantrips.length && <p>Cantrips (at will): {mappedCantrips}</p>}
      {SPELL_LEVELS.map((spellLevel: number): ReactElement => {
        const spells = get(spellcastingGroup, `spells.${spellLevel}`, []);
        return (
          <SpellcastingSectionLevelSubsection
            key={spellLevel}
            level={spellLevel}
            slots={spellSlots[spellLevel]}
            spells={spells}
          />
        );
      })}
      {castsSpellsBeforeCombat && (
        <p>*The {monsterName} casts these spells on itself before combat.</p>
      )}
    </div>
  );
};

type SpellcastingRendererProps = {
  monster: Monster;
};

export const SpellcastingRendererClassic = ({
  monster,
}: SpellcastingRendererProps): ReactElement => {
  const pactLevels = pactMagicLevel(monster);
  const cappedPactLevels = Math.min(20, pactLevels);
  const pactSlotLevel = PACT_MAGIC_SLOT_LEVEL_BY_LEVEL[cappedPactLevels];
  const pactSlots = PACT_MAGIC_SLOTS_BY_LEVEL[cappedPactLevels];

  const spellLevels = spellcastingLevel(monster);
  const cappedSpellLevels = Math.min(20, spellLevels);
  const spellSlots = SPELL_SLOTS_BY_LEVEL[cappedSpellLevels];

  const hasMultipleCastingTypes = Boolean(
    monster.spellcasting && monster.spellcasting.length > 1,
  );

  return (
    <>
      {hasMultipleCastingTypes && (
        <p>
          <strong>Spellcasting.</strong> The {monster.nameShort || monster.name}
          &nbsp; has spellcasting of multiple types.
        </p>
      )}
      {monster.spellcasting?.length &&
        monster.spellcasting
          .sort((groupA: Spellcasting, groupB: Spellcasting) =>
            // Attempt to sort by class name, which is the best idea I've come up with so far
            (groupA.class || "").localeCompare(groupB.class || ""),
          )
          .map(
            (spellcastingGroup: Spellcasting, index: number): ReactElement => {
              if (spellcastingGroup.type === SpellcastingTypes.PactMagic) {
                return (
                  <PactMagicSection
                    hasMultipleCastingTypes={hasMultipleCastingTypes}
                    key={(spellcastingGroup.uuid as string) || index}
                    monster={monster}
                    pactLevels={pactLevels}
                    pactSlots={pactSlots}
                    pactSlotLevel={pactSlotLevel}
                    spellcastingGroup={spellcastingGroup}
                  />
                );
              } else {
                return (
                  <SpellcastingSection
                    hasMultipleCastingTypes={hasMultipleCastingTypes}
                    key={(spellcastingGroup.uuid as string) || index}
                    monster={monster}
                    spellcastingGroup={spellcastingGroup}
                    spellcastingLevel={spellLevels}
                    spellSlots={spellSlots}
                  />
                );
              }
            },
          )}
    </>
  );
};

export default SpellcastingRendererClassic;
