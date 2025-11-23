import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import { attackOrDcEffectOnCR } from "../../calculators";
import { STATS_BY_CR_2014 } from "../../constants";
import {
  FormikNumberSpinner,
  FormikToggleInput,
  ReadOnlyInput,
} from "../../formik-prime";
import { addSymbolToNumber } from "../../string-formatters";
import type { MonsterizerFormData } from "../../types";

export const AttackAndDcControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { values } = useFormikContext<MonsterizerFormData>();

  return (
    <Fieldset
      legend="Attack Bonus and DCs"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <p>
        Most creatures use the same attack bonus and/or save DC for all of their
        actions. Raising or lowering these numbers makes creatures more or less
        dangerous, which raises or lowers their CR. Creatures will generally use
        an attack bonus appropriate to their CR, but sometimes you want to make
        your creature more accurate by raising their attack bonus or you want
        their special abilities to be less reliable by lowering their DC.
      </p>
      <p>
        First, decide if your creature relies primarily on attack rolls or on
        abilities which rely on a save DC to attack. The CR rules will use one
        or the other (not both) to adjust the creature's CR. If you're not sure
        which to use, determine which three Actions the creature is likely to
        use in the first three rounds of combat. If most of them use an attack
        roll, the creature primarily uses an attack bonus.
      </p>
      <p>
        If the creature has multiple attack bonuses or save DCs, use the highest
        from whichever group (attack bonuses if the creature relies primarily on
        attacks or save DCs if the creature relies primarily on save DCs). If
        you don't want to adjust the creatures attack bonus or save DC, use the
        recommended numbers listed below and leave these fields unchanged.
      </p>
      <p>
        The attack bonuses and save DCs won't be added to your actions'
        descriptions automatically, so you'll need to do that on your own. Be
        sure to use numbers which match the attack bonuses and DCs below, or
        your CR calculation will be inaccurate.
      </p>
      <FormikToggleInput
        id="monster.usesAttackBonus"
        label="The creature attacks primarily using..."
        // offIcon="pi-"
        offLabel="Save DCs"
        // onIcon="pi-"
        onLabel="Attacks"
      />
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikNumberSpinner
          buttonLayout="horizontal"
          disabled={!values.monster.usesAttackBonus}
          id="monster.attack"
          placeholder={STATS_BY_CR_2014[
            values.monster.challenge
          ].attack.toString()}
          label="Attack Bonus"
          step={1}
          tooltip="TOTAL attack bonus (ability + proficiency + whatever else)."
        />
        <ReadOnlyInput
          label="Recommended"
          tooltip="Recommended TOTAL attack bonus (ability + proficiency + whatever else) for a creature of this CR. A higher bonus will raise the creature's CR, while a lower bonus will reduce the CR."
          value={STATS_BY_CR_2014[values.monster.challenge].attack}
        />
        <FormikNumberSpinner
          buttonLayout="horizontal"
          disabled={values.monster.usesAttackBonus}
          id="monster.saveDc"
          label="Save DC"
          min={0}
          placeholder={STATS_BY_CR_2014[
            values.monster.challenge
          ].saveDc.toString()}
          step={1}
          tooltip="Highest save DC for creature's offensive abilities, including spells, etc."
        />
        <ReadOnlyInput
          label="Recommended"
          tooltip="Recommended save DC for a creature of this CR. A higher DC will raise the creature's CR, while a lower DC will reduce the CR."
          value={STATS_BY_CR_2014[values.monster.challenge].saveDc}
        />
        <ReadOnlyInput
          label="CR Effect"
          tooltip="The effect on the creature's offensive CR."
          value={addSymbolToNumber(attackOrDcEffectOnCR(values.monster))}
        />
      </div>
    </Fieldset>
  );
};

export default AttackAndDcControls;
