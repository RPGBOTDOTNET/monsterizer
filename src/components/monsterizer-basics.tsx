import { useFormikContext } from "formik";
import { get } from "lodash";
import { Fieldset } from "primereact/fieldset";
import { InputNumber } from "primereact/inputnumber";
import { type ReactElement, useCallback, useState } from "react";
import { abilityModifier } from "../calculators";
import {
  CHALLENGE_RATINGS,
  CREATURE_TYPES,
  EMPTY_MONSTER,
  STATS_BY_CR_2014,
} from "../constants";
import {
  FormikDropdown,
  FormikInput,
  FormikNumberInput,
  FormikNumberSpinner,
  FormikToggleInput,
  ReadOnlyInput,
} from "../formik-prime";
import {
  AbilityScores,
  type Monster,
  type MonsterizerFormData,
  type SpecialTrait,
} from "../types";
import { mapStringArrayForDropdown, monsterStatsToDamageModel } from "../utils";
import monsterStatsToConditionModel from "../utils/monster-stats-to-condition-model";
import BaseMonsterDropdown from "./base-monster-dropdown";
import SkillsControls from "./skills-controls";
import { StyledH2 } from "./styled-elements";

const ALIGNMENT_AXES = {
  LAW_CHAOS: [
    "Lawful",
    "Neutral",
    "Chaotic",
    "Unaligned",
    "Any",
    "Any Non-Lawful",
    "Any Non-Neutral",
    "Any Non-Chaotic",
  ],
  GOOD_EVIL: [
    "Good",
    "Neutral",
    "Evil",
    "Unaligned",
    "Any",
    "Any Non-Good",
    "Any Non-Neutral",
    "Any Non-Evil",
  ],
};

const alignmentGoodEvilOptions = ALIGNMENT_AXES.GOOD_EVIL.map(
  mapStringArrayForDropdown,
);
const alignmentLawChaosOptions = ALIGNMENT_AXES.LAW_CHAOS.map(
  mapStringArrayForDropdown,
);
const creatureTypeOptions = CREATURE_TYPES.map(mapStringArrayForDropdown);
const crOptions = CHALLENGE_RATINGS.map(mapStringArrayForDropdown);

export const MonsterizerBasics = (): ReactElement => {
  const { values, setValues } = useFormikContext<MonsterizerFormData>();

  // Fieldsets
  const [baseCreatureFieldsetCollapsed, setBaseCreatureFieldsetCollapsed] =
    useState<boolean>(false);
  const [basicTraitsFieldsetCollapsed, setBasicTraitsFieldsetCollapsed] =
    useState<boolean>(false);
  const [abilityScoresFieldsetCollapsed, setAbilityScoresFieldsetCollapsed] =
    useState<boolean>(false);
  const [speedFieldsetCollapsed, setSpeedFieldsetCollapsed] =
    useState<boolean>(false);
  const [languagesFieldsetCollapsed, setLanguagesFieldsetCollapsed] =
    useState<boolean>(false);

  const handleBaseMonsterChange = useCallback(
    (newMonster: Monster) => {
      const patchedTraits: Array<SpecialTrait> = (
        newMonster.specialTraits || []
      ).map((trait: SpecialTrait) => {
        return {
          ...trait,
          description: trait.text(newMonster),
        };
      });
      const patchedNewMonster: Monster = {
        ...EMPTY_MONSTER,
        ...newMonster,
        specialTraits: patchedTraits,
      };
      // TODO: Use setFieldValue
      setValues({
        conditionModel: monsterStatsToConditionModel(patchedNewMonster),
        damageModel: monsterStatsToDamageModel(patchedNewMonster),
        monster: {
          ...patchedNewMonster,
        },
      });
    },
    [setValues],
  );

  try {
    return (
      <>
        <StyledH2>Basics</StyledH2>
        <Fieldset
          legend="Base Creature"
          toggleable
          collapsed={baseCreatureFieldsetCollapsed}
          onToggle={(e) => setBaseCreatureFieldsetCollapsed(e.value)}
        >
          <BaseMonsterDropdown onChange={handleBaseMonsterChange} />
        </Fieldset>
        <Fieldset
          legend="Basic Traits"
          toggleable
          collapsed={basicTraitsFieldsetCollapsed}
          onToggle={(e) => setBasicTraitsFieldsetCollapsed(e.value)}
        >
          <FormikInput id="monster.name" label="Name" required={true} />
          <FormikInput
            id="monster.nameShort"
            label="Short Name"
            required={true}
            tooltip={`Used in some special traits as an abbreviation of the creature's name. Example: "Air Elemental" might use "elemental".`}
          />
          <FormikDropdown
            id="monster.creatureType"
            label="Creature Type"
            options={creatureTypeOptions}
            required={true}
            tooltip="A creature's type has no effect on its own. However, other effects like spells may work differently depending on the creature's type."
          />
          <FormikInput id="monster.creatureSubtype" label="Creature Subtypes" />
          <FormikInput
            id="monster.group"
            label="Creature Group"
            tooltip='"Dragons, Chromatic", "Devils", etc.'
          />
          <FormikDropdown
            id="monster.alignment.lawChaos"
            label="Alignment (Law/Chaos)"
            options={alignmentLawChaosOptions}
          />
          <FormikDropdown
            id="monster.alignment.goodEvil"
            label="Alignment (Good/Evil)"
            options={alignmentGoodEvilOptions}
          />
          <FormikDropdown
            id="monster.challenge"
            label="Target CR"
            options={crOptions}
            required={true}
            tooltip="This will set things like Proficiency Bonus and will affect some other calculations, and might not match the calculated CR. YOU MUST SET THIS MANUALLY."
          />
          <FormikInput
            id="monster.senses"
            label="Senses"
            tooltip="Darkvision, tremorsense, etc."
          />
          <span className="p-float-label" style={{ marginTop: "10px" }}>
            <InputNumber
              readOnly={true}
              tooltip="Proficiency bonus is determined by Challenge Rating."
              value={
                STATS_BY_CR_2014[values.monster.challenge].proficiencyBonus
              }
            />
            <label>Proficiency Bonus</label>
          </span>
        </Fieldset>
        <Fieldset
          legend="Ability Scores"
          toggleable
          collapsed={abilityScoresFieldsetCollapsed}
          onToggle={(e) => setAbilityScoresFieldsetCollapsed(e.value)}
        >
          {/* TODO: https://primereact.org/theming/#primeflex */}
          <div
            className="grid flex flex-row justify-content-between align-items-end"
            style={{ margin: "0", width: "100%" }}
          >
            {Object.keys(AbilityScores).map((key: string) => {
              return (
                <div key={`monster.abilityScores.${key}`}>
                  <FormikNumberSpinner
                    buttonLayout="vertical"
                    id={`monster.abilityScores.${key}`}
                    label={key}
                    max={99}
                    min={0}
                    required={true}
                    step={1}
                  />
                  <ReadOnlyInput
                    label="Modifier"
                    value={abilityModifier(
                      get(values, `monster.abilityScores.${key}`, -5),
                    )}
                  />
                </div>
              );
            })}
          </div>
        </Fieldset>
        <Fieldset
          legend="Speed and Movement"
          toggleable
          collapsed={speedFieldsetCollapsed}
          onToggle={(e) => setSpeedFieldsetCollapsed(e.value)}
        >
          <FormikNumberInput
            id="monster.speed.land"
            label="Land Speed"
            min={0}
            step={5}
          />
          <FormikNumberInput
            id="monster.speed.burrow"
            label="Burrow Speed"
            min={0}
            step={5}
          />
          <FormikNumberInput
            id="monster.speed.climb"
            label="Climb Speed"
            min={0}
            step={5}
          />
          <FormikNumberInput
            id="monster.speed.fly"
            label="Fly Speed"
            min={0}
            step={5}
          />
          <FormikToggleInput
            id="monster.speed.hover"
            offIcon="pi-times"
            onIcon="pi-check"
            label="Can the Creature Hover?"
          />
          <FormikToggleInput
            id="monster..seed.flyingRangedAttack"
            label="Can the Creature Attack at Range While Flying?"
            offIcon="pi-times"
            onIcon="pi-check"
            tooltip="Affects Offensive CR at low levels"
          />
          <FormikNumberInput
            id="monster.speed.swim"
            label="Swim Speed"
            min={0}
            step={5}
          />
        </Fieldset>
        <SkillsControls />
        <Fieldset
          legend="Languages and Communication"
          toggleable
          collapsed={languagesFieldsetCollapsed}
          onToggle={(e) => setLanguagesFieldsetCollapsed(e.value)}
        >
          <FormikInput
            id="monster.languages"
            label="Languages"
            tooltip="Enter any languages or other forms of communication (telepathy, spores, sign language, etc.) which the creature knows."
          />
          <FormikToggleInput
            id="monster.cantSpeak"
            label="Can the Creature Speak?"
            offLabel="Can Speak"
            onLabel="Can't Speak"
            tooltip="Does not affect CR, but a creature that can't speak often can't perform Verbal components to cast spells."
          />
        </Fieldset>
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default MonsterizerBasics;
