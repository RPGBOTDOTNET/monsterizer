import { useFormikContext } from "formik";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { spellAttack, spellDc } from "../../calculators";
import { STATS_BY_CR_2014, UUID } from "../../constants";
import {
  FormikDropdown,
  FormikNumberSpinner,
  ReadOnlyInput,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import {
  AbilityScores,
  ActionTypes,
  type InnateSpell,
  type MonsterizerFormData,
} from "../../types";
import { mapStringArrayForDropdown } from "../../utils";

import InnateSpellControl from "./innate-spell-control";

const abilityScoreOptions = Object.values(AbilityScores).map(
  mapStringArrayForDropdown,
);

export const InnateSpellcastingControls = (): ReactElement => {
  const { setValues, values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(
    !values.monster.innateSpellcasting?.spellcastingAbility,
  );

  const recommendedSpellAttack =
    values.monster.innateSpellcasting &&
    values.monster.innateSpellcasting.spellcastingAbility
      ? spellAttack(
          values.monster,
          values.monster.innateSpellcasting.spellcastingAbility,
        )
      : 0;
  const recommendedSpellDc = 8 + recommendedSpellAttack;

  const addEmptySpell = () => {
    const existingSpells =
      values.monster.innateSpellcasting &&
      values.monster.innateSpellcasting.spells
        ? values.monster.innateSpellcasting.spells
        : [];
    const newSpells: InnateSpell[] = [
      ...existingSpells,
      {
        castingTime: ActionTypes.Action,
        name: "",
        [UUID]: uuidv4(),
      },
    ];
    setValues({
      ...values,
      monster: {
        ...values.monster,
        innateSpellcasting: {
          ...values.monster.innateSpellcasting!,
          spells: newSpells,
        },
      },
    });
  };

  // Apply uuid to any items that don't already have it, then re-assign formik values
  if (
    values.monster.innateSpellcasting &&
    values.monster.innateSpellcasting.spells &&
    values.monster.innateSpellcasting.spells.length
  ) {
    let needsReset = false;
    values.monster.innateSpellcasting.spells.forEach((spell) => {
      if (!spell[UUID]) {
        spell[UUID] = uuidv4();
        needsReset = true;
      }
    });
    if (needsReset) {
      setValues(values);
    }
  }

  return (
    <Fieldset
      legend="Innate Spellcasting"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <p>
        <strong>Note About CR</strong>: Currently the Monsterizer DOES NOT use
        innate spellcasting to calculate a creature's CR (that feature is
        planned for the future). If you expect the creature to cast damage
        spells, I recommend picking their three most-damaging spells and add
        them to the Actions section. I also recommending turning on the "hide
        from stat block" option for those Actions so that they don't appear in
        the final stat block.
      </p>
      <FormikDropdown
        id="monster.innateSpellcasting.spellcastingAbility"
        label="Spellcasting Ability"
        options={abilityScoreOptions}
      />
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikNumberSpinner
          buttonLayout="horizontal"
          disabled={
            !values.monster.innateSpellcasting ||
            !values.monster.innateSpellcasting.spellcastingAbility
          }
          id="monster.innateSpellcasting.spellAttack"
          label="Spell Atk."
          placeholder={
            values.monster.innateSpellcasting &&
            values.monster.innateSpellcasting.spellcastingAbility
              ? spellAttack(
                  values.monster,
                  values.monster.innateSpellcasting?.spellcastingAbility,
                ).toString()
              : ""
          }
          step={1}
        />
        <ReadOnlyInput
          label="Rec. (Stats)"
          tooltip="The attack bonus which this creature will have based on its spellcasting ability."
          value={recommendedSpellAttack}
        />
        <ReadOnlyInput
          label="Rec. (CR)"
          tooltip="A creature of this creature's intended CR typically has this attack bonus."
          value={STATS_BY_CR_2014[values.monster.challenge].attack}
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikNumberSpinner
          buttonLayout="horizontal"
          disabled={
            !values.monster.innateSpellcasting ||
            !values.monster.innateSpellcasting.spellcastingAbility
          }
          id="monster.innateSpellcasting.saveDc"
          label="Spell Save DC"
          min={5}
          placeholder={
            values.monster.innateSpellcasting &&
            values.monster.innateSpellcasting.spellcastingAbility
              ? spellDc(
                  values.monster,
                  values.monster.innateSpellcasting?.spellcastingAbility,
                ).toString()
              : ""
          }
          step={1}
        />
        <ReadOnlyInput
          label="Rec. (Stats)"
          tooltip="The spell save DC which this creature will have based on its spellcasting ability."
          value={recommendedSpellDc}
        />
        <ReadOnlyInput
          label="Rec. (CR)"
          tooltip="A creature of this creature's intended CR typically has this save DC."
          value={STATS_BY_CR_2014[values.monster.challenge].saveDc}
        />
      </div>
      {(values.monster.innateSpellcasting &&
        (values.monster.innateSpellcasting.spells || []).map(
          (spell: InnateSpell, index: number): ReactElement => (
            <InnateSpellControl
              key={(spell.uuid as string) || index}
              index={index}
            />
          ),
        )) || <></>}
      <Button
        disabled={!values.monster.innateSpellcasting?.spellcastingAbility}
        icon="pi pi-plus"
        label="Add a Spell"
        onClick={addEmptySpell}
        style={{ marginTop: "10px" }}
        tooltipOptions={TOOLTIP_SETTINGS}
        type="button"
      />
    </Fieldset>
  );
};

export default InnateSpellcastingControls;
