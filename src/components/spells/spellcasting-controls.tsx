import { useFormikContext } from "formik";
import { get, set } from "lodash";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { pactMagicLevel, spellcastingLevel } from "../../calculators";
import {
  PACT_MAGIC_SLOTS_BY_LEVEL,
  PACT_MAGIC_SLOT_LEVEL_BY_LEVEL,
  SPELL_SLOTS_BY_LEVEL,
  UUID,
} from "../../constants";
import {
  FormikDropdown,
  FormikInput,
  FormikNumberSpinner,
  FormikToggleInput,
  ReadOnlyInput,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import {
  AbilityScores,
  SpellcastingTypes,
  type MonsterizerFormData,
  type Spellcasting,
  type SpellcastingSpell,
} from "../../types";
import { mapStringArrayForDropdown } from "../../utils";
import { TacticsAndCrCalculations } from "../actions";
import { newEmptySpell, spellcastionActionOptions } from "./constants";

const abilityScoreOptions = Object.values(AbilityScores).map(
  mapStringArrayForDropdown,
);
const spellcastingTypeOptions = Object.values(SpellcastingTypes).map(
  mapStringArrayForDropdown,
);

const SpellListArrayControl = ({
  label,
  spellcastingArrayIndex,
  spellLevel,
}: {
  label: string;
  spellcastingArrayIndex: number;
  spellLevel: string;
}): ReactElement => {
  const { setFieldValue, setValues, values } =
    useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);

  const spellArrayFieldKey = `monster.spellcasting.${spellcastingArrayIndex}.spells.${spellLevel}`;
  const spellArray: SpellcastingSpell[] = useMemo(
    () => get(values, spellArrayFieldKey, [newEmptySpell()]),
    [],
  );

  const addSpell = useCallback(() => {
    spellArray.push(newEmptySpell());
    setFieldValue(spellArrayFieldKey, spellArray);
  }, [setFieldValue, spellArray, spellArrayFieldKey]);

  const removeSpell = useCallback(
    (index: number) => {
      spellArray.splice(index, 1);
      if (!spellArray.length) {
        spellArray.push(newEmptySpell());
      }
      setFieldValue(`{arrayKey}.${index}`, spellArray);
    },
    [setFieldValue, spellArray],
  );

  useEffect(() => {
    if (spellArray.length) {
      let needsReset = false;
      spellArray.forEach((spell) => {
        if (!spell[UUID]) {
          spell[UUID] = uuidv4();
          needsReset = true;
        }
      });
      if (needsReset) {
        set(values, spellArrayFieldKey, spellArray);
        setValues(values);
      }
    }
  }, [setValues, spellArray, spellArrayFieldKey, values]);

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend={label}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <ol style={{ margin: 0, padding: 0 }}>
        {spellArray.map((spell: SpellcastingSpell, index: number) => {
          return (
            <li
              key={(spell.uuid as string) || index}
              style={{ margin: "0", width: "100%" }}
            >
              <FormikInput
                id={`${spellArrayFieldKey}.${index}.name`}
                label="Spell Name"
              />
              <FormikDropdown
                id={`${spellArrayFieldKey}.${index}.castingTime`}
                options={spellcastionActionOptions}
                label="Casting Time"
                tooltip="This is only used for CR calculations"
              />
              <div
                className="grid flex-row justify-content-between align-items-end"
                style={{ margin: "0", width: "100%" }}
              >
                <FormikNumberSpinner
                  buttonLayout="horizontal"
                  id={`${spellArrayFieldKey}.${index}.damage`}
                  label="Damage"
                  min={0}
                  step={1}
                  tooltip="Average damage per target."
                />
                <FormikNumberSpinner
                  buttonLayout="horizontal"
                  id={`${spellArrayFieldKey}.${index}.targets`}
                  label="Targets"
                  min={0}
                  step={1}
                  tooltip="Expected number of targets when the spell is cast. Most area effect spells assume 2 targets."
                />
                <FormikToggleInput
                  id={`${spellArrayFieldKey}.${index}.castBeforeCombat`}
                  label="Cast Before Combat?"
                  offIcon="pi-times"
                  onIcon="pi-check"
                  tooltip="This is commonly used for long-duration buff spells like Mage Armor or Mind Blank which the spellcaster will nearly always have active."
                />
                <Button
                  icon="pi pi-plus"
                  onClick={addSpell}
                  style={{ height: "53px" }}
                  tooltip="Add another spell"
                  tooltipOptions={TOOLTIP_SETTINGS}
                  type="button"
                />
                <Button
                  icon="pi pi-trash"
                  onClick={() => removeSpell(index)}
                  style={{ height: "53px" }}
                  tooltip="Remove this spell"
                  tooltipOptions={TOOLTIP_SETTINGS}
                  type="button"
                />
              </div>
            </li>
          );
        })}
      </ol>
    </Fieldset>
  );
};

const SpellcastingGroupControls = ({
  handleRemove,
  index,
  legend,
}: {
  handleRemove: (index: number) => void;
  index: number;
  legend: string;
}): ReactElement => {
  return (
    <Fieldset legend={`Spellcasting Group #${index + 1}: ${legend}`}>
      <FormikInput
        id={`monster.spellcasting.${index}.class`}
        label="Spellcasting Class"
        tooltip="Usually this will be a class available to players, but you can enter anything."
      />
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikDropdown
          floatLabel={false}
          id={`monster.spellcasting.${index}.spellcastingAbility`}
          label="Spellcasting Ability"
          options={abilityScoreOptions}
          required
        />
        <FormikDropdown
          floatLabel={false}
          id={`monster.spellcasting.${index}.type`}
          label="Spellcasting Type"
          options={spellcastingTypeOptions}
          required
        />
        <FormikNumberSpinner
          buttonLayout="horizontal"
          id={`monster.spellcasting.${index}.casterLevel`}
          label="Caster Level"
          max={20}
          min={1}
          step={1}
        />
        <FormikToggleInput
          id={`monster.spellcasting.${index}.knowsSpells`}
          label="Knows or Prepares Spells"
          offIcon="pi-book"
          offLabel="Prepares Spells"
          onIcon="pi-user"
          onLabel="Knows Spells Permanently"
        />
      </div>
      <SpellListArrayControl
        spellcastingArrayIndex={index}
        spellLevel="cantrips"
        label="Cantrips"
      />
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((spellLevel) => {
        return (
          <SpellListArrayControl
            key={spellLevel}
            label={`Level ${spellLevel}`}
            spellcastingArrayIndex={index}
            spellLevel={spellLevel}
          />
        );
      })}
      <Button
        icon="pi pi-trash"
        label="Remove This Spellcasting Group"
        onClick={() => handleRemove(index)}
        style={{ marginTop: "5px" }}
        type="button"
      />
    </Fieldset>
  );
};

export const SpellcastingControls = (): ReactElement => {
  const { setFieldValue, setValues, values } =
    useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(
    !(values.monster.spellcasting && values.monster.spellcasting.length),
  );

  const addNewSpellcasting = useCallback(() => {
    const existingSpellcasting: Spellcasting[] =
      values.monster.spellcasting || [];

    const newSpellcastingGroup: Required<Spellcasting> = {
      casterLevel: 1,
      class: "",
      extraText: "",
      knowsSpells: false,
      spellAttack: 0,
      spellDc: 0,
      spells: {
        cantrips: [newEmptySpell()],
        1: [newEmptySpell()],
        2: [newEmptySpell()],
        3: [newEmptySpell()],
        4: [newEmptySpell()],
        5: [newEmptySpell()],
        6: [newEmptySpell()],
        7: [newEmptySpell()],
        8: [newEmptySpell()],
        9: [newEmptySpell()],
      },
      spellcastingAbility: AbilityScores.Strength,
      uuid: uuidv4(),
      type: SpellcastingTypes.Spellcasting,
    };
    existingSpellcasting.push(newSpellcastingGroup);
    setFieldValue("monster.spellcasting", [...existingSpellcasting]);
  }, [setFieldValue, values.monster.spellcasting]);

  const removeSpellcastingGroup = useCallback(
    (index: number) => {
      values.monster.spellcasting?.splice(index, 1);
      setFieldValue("values.monster.spellcasting", values.monster.spellcasting);
    },
    [setFieldValue, values.monster.spellcasting],
  );

  const pactLevels = pactMagicLevel(values.monster);
  const cappedPactLevels = Math.min(20, pactLevels);
  const spellLevels = spellcastingLevel(values.monster);
  const cappedSpellLevels = Math.min(20, spellLevels);

  // Apply uuid to any items that don't already have it, then re-assign formik values
  useEffect(() => {
    if (values.monster.spellcasting && values.monster.spellcasting.length) {
      let needsReset = false;
      values.monster.spellcasting.forEach((spellcastingGroup) => {
        if (!spellcastingGroup[UUID]) {
          spellcastingGroup[UUID] = uuidv4();
          Object.values(spellcastingGroup.spells).forEach((spellsArray) => {
            spellsArray.forEach((spell) => {
              spell.uuid = spell.uuid || uuidv4();
            });
          });
          needsReset = true;
        }
      });
      if (needsReset) {
        setValues(values);
      }
    }
  }, [setValues, values.monster.spellcasting]);

  try {
    return (
      <>
        <Fieldset
          collapsed={fieldsetCollapsed}
          legend="Spellcasting"
          onToggle={(e) => setFieldsetCollapsed(e.value)}
          toggleable
        >
          <p>
            While most creatures that cast spells only cast spells from one
            source, this section allows you to create creatures with multiple
            types of spellcasting, such as a character with both cleric and
            warlock spellcasting.
          </p>
          <p>
            The creature's spell slots will be automatically calculated from the
            values of each spellcasting/pact magic group.
          </p>
          <p>
            <strong>Note About CR</strong>: Currently the Monsterizer DOES NOT
            use spellcasting to calculate a creature's CR (that feature is
            planned for the future). If you expect the creature to cast damage
            spells, I recommend picking their three most-damaging spells and add
            them to the Actions section. I also recommending turning on the
            "hide from stat block" option for those Actions so that they don't
            appear in the final stat block.
          </p>
          <div
            className="grid flex-row justify-content-between align-items-end"
            style={{ margin: "0", width: "100%" }}
          >
            <ReadOnlyInput label="Pact Levels" value={pactLevels} />
            <ReadOnlyInput
              label="Pact Spell Slots"
              value={PACT_MAGIC_SLOTS_BY_LEVEL[cappedPactLevels]}
            />
            <ReadOnlyInput
              label="Pact Slot Level"
              value={PACT_MAGIC_SLOT_LEVEL_BY_LEVEL[cappedPactLevels]}
            />
            <ReadOnlyInput label="Spellcasting Levels" value={spellLevels} />
            <div className="p-field">
              <div>
                <label className="p-d-block">Spellcasting Slots</label>
              </div>
              <InputText
                readOnly={true}
                style={{ width: "13em" }}
                tooltip="Automatically calculated based on the creature's spellcasting levels."
                tooltipOptions={TOOLTIP_SETTINGS}
                value={SPELL_SLOTS_BY_LEVEL[cappedSpellLevels]
                  .slice(1)
                  .join(", ")}
              />
            </div>
          </div>
          <Button
            icon="pi pi-plus"
            label="Add New Spellcasting or Pact Magic Group"
            onClick={addNewSpellcasting}
            style={{ marginTop: "5px" }}
            type="button"
          />
        </Fieldset>
        {values.monster.spellcasting &&
          values.monster.spellcasting.map(
            (spellcastingGroup: Spellcasting, index: number) => {
              return (
                <SpellcastingGroupControls
                  key={spellcastingGroup.uuid as string}
                  handleRemove={removeSpellcastingGroup}
                  index={index}
                  legend={spellcastingGroup.class || ""}
                />
              );
            },
          )}
        <TacticsAndCrCalculations monster={values.monster} />
      </>
    );
  } catch (e) {
    return <p>{(e as Error).message}</p>;
  }
};

export default SpellcastingControls;
