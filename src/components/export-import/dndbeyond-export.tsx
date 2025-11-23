import copy from "copy-to-clipboard";
import { useFormikContext } from "formik";
import Markdown from "markdown-to-jsx";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import {
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useState,
} from "react";
import { hitPoints, skillModifier } from "../../calculators";
import { MONSTERIZER_VERSION } from "../../constants";
import { ReadOnlyInput, TOOLTIP_SETTINGS } from "../../formik-prime";
import { alignment, languagesText } from "../../string-formatters";
import { type Monster, type MonsterizerFormData, Skills } from "../../types";
import {
  ActionsRendererContent,
  LairActionsRendererContent,
  LegendaryActionsRendererContent,
  ReactionsRendererContent,
  SpecialTraitsRenderer,
} from "../stat-block";

const dropdownTooltip =
  "This one is a dropdown menu so you will need to enter the value directly";

const damageResponseToDnDBeyondAdjustments = (monster: Monster): string => {
  const immunities = monster.damageImmunities.map(
    (immunity) => `Immunity - ${immunity}`,
  );
  const resistances = monster.damageResistances.map(
    (resistance) => `Resistance - ${resistance}`,
  );
  const vulnerabilities = monster.damageVulnerabilities.map(
    (vulnerability) => `Vulnerability - ${vulnerability}`,
  );

  return [...immunities, ...resistances, ...vulnerabilities].join(", ");
};

const savingThrowsToString = (monster: Monster): string => {
  const proficient = [];
  if (monster.savingThrows.Strength?.proficient) {
    proficient.push("STR");
  }
  if (monster.savingThrows.Dexterity?.proficient) {
    proficient.push("DEX");
  }
  if (monster.savingThrows.Constitution?.proficient) {
    proficient.push("CON");
  }
  if (monster.savingThrows.Intelligence?.proficient) {
    proficient.push("INT");
  }
  if (monster.savingThrows.Wisdom?.proficient) {
    proficient.push("WIS");
  }
  if (monster.savingThrows.Charisma?.proficient) {
    proficient.push("CHA");
  }
  return proficient.join(", ") || "None";
};

type CopyButtonWithHiddenTextCopyButtonWithHiddenTextProps = {
  content: string | ReactNode;
  disabled?: boolean;
  id: string;
  isHtml?: boolean;
  label: string;
  style?: CSSProperties;
};

const CopyButtonWithHiddenText = ({
  content,
  disabled = false,
  id,
  isHtml = false,
  label,
  style,
}: CopyButtonWithHiddenTextCopyButtonWithHiddenTextProps): ReactElement => {
  const [copySuccessful, setCopySuccessful] = useState<boolean>(false);

  return (
    <div style={style}>
      <Button
        disabled={!content || disabled}
        icon={copySuccessful ? "pi pi-check" : "pi pi-copy"}
        label={label}
        onClick={() => {
          const element = document.getElementById(`dndbeyond-export-${id}`);
          const value = isHtml
            ? (element!.innerHTML as string)
            : element!.innerText;
          copy(value, {
            format: isHtml ? "text/html" : "text/plain",
          });
          setCopySuccessful(true);
          const timeout = setTimeout(() => {
            setCopySuccessful(false);
            clearTimeout(timeout);
          }, 3000);
        }}
        style={{ width: "auto" }}
      />
      <div id={`dndbeyond-export-${id}`} style={{ display: "none" }}>
        {content}
      </div>
    </div>
  );
};

export const DndbeyondExport = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Export to DndBeyond"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        DnDBeyond does not make this easy, and there's nothing I can do about,
        unfortunately. The buttons below are organized to match the layout of
        the homebrew monster form so that you can quickly click a button, get
        the content you need, paste it into the appropriate field, and repeat
        until you've gone through the whole form. This is tedious and unpleasant
        and I'm sorry about that, but it's a lot better than copying it all
        manually.
      </p>
      <p>
        Any disabled button indicates a field which doesn't have a value to copy
      </p>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <CopyButtonWithHiddenText
          content={values.monster.name}
          id="monster-name"
          label="MONSTER NAME"
          style={{ width: "160px" }}
        />
        <CopyButtonWithHiddenText
          content={`Monsterizer v${MONSTERIZER_VERSION}`}
          id="monster-version"
          label="MONSTER VERSION"
          style={{ width: "160px" }}
        />
        <ReadOnlyInput
          label="MONSTER TYPE"
          tooltip={dropdownTooltip}
          value={values.monster.creatureType}
          style={{ width: "160px" }}
        />
        <CopyButtonWithHiddenText
          content={values.monster.creatureSubtype}
          id="monster-subtypes"
          label="MONSTER SUB-TYPES"
          style={{ width: "160px" }}
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <ReadOnlyInput
          label="MONSTER SIZE"
          style={{ width: "160px" }}
          tooltip={dropdownTooltip}
          value={values.monster.size}
        />
        <ReadOnlyInput
          label="SWARM MONSTER TYPE"
          style={{ width: "160px" }}
          tooltip="Ignore this unless you're making a swarm."
          value={values.monster.size}
        />
        <ReadOnlyInput
          label="ALIGNMENT"
          style={{ width: "160px" }}
          tooltip={dropdownTooltip}
          value={alignment(values.monster)}
        />
        <ReadOnlyInput
          label="MONSTER SIZE"
          style={{ width: "160px" }}
          tooltip={dropdownTooltip}
          value={values.monster.size}
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <CopyButtonWithHiddenText
          content={
            <SpecialTraitsRenderer
              monster={values.monster}
              showSpellcasting={false}
            />
          }
          disabled={
            !values.monster.specialTraits ||
            !values.monster.specialTraits.length
          }
          id="monster-special-traits"
          isHtml={true}
          label="SPECIAL TRAITS DESCRIPTION"
          style={{ width: "330px" }}
        />
        <hr />
        <CopyButtonWithHiddenText
          content={
            <ActionsRendererContent
              monster={values.monster}
              showBonusActions={false}
              showSpellcasting={true}
            />
          }
          id="monster-actions"
          isHtml={true}
          label="ACTION DESCRIPTION"
          style={{ width: "330px" }}
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <CopyButtonWithHiddenText
          content={<ReactionsRendererContent monster={values.monster} />}
          disabled={
            !values.monster.reactions || !values.monster.reactions.length
          }
          id="monster-reactions"
          isHtml={true}
          label="REACTIONS DESCRIPTION"
          style={{ width: "330px" }}
        />
        <CopyButtonWithHiddenText
          content={<Markdown>{values.monster.description.trim()}</Markdown>}
          disabled={!values.monster.description.trim()}
          id="monster-characteristics"
          isHtml={true}
          label="MONSTER CHARACTERISTICS DESCRIPTION"
          style={{ width: "330px" }}
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <CopyButtonWithHiddenText
          content={<LegendaryActionsRendererContent monster={values.monster} />}
          disabled={
            !values.monster.legendaryActions ||
            !values.monster.legendaryActions.length
          }
          id="monster-legendary-actions"
          isHtml={true}
          label="LEGENDARY ACTIONS DESCRIPTION"
          style={{ width: "330px" }}
        />
        <Button
          disabled={true}
          label="MYTHIC ACTIONS DESCRIPTION"
          tooltip="Can't do this one. Mythic mechanics aren't in the SRD."
          tooltipOptions={TOOLTIP_SETTINGS}
          style={{ width: "330px" }}
        />
      </div>
      <CopyButtonWithHiddenText
        content={<LairActionsRendererContent monster={values.monster} />}
        disabled={
          !values.monster.legendaryActions ||
          !values.monster.legendaryActions.length
        }
        id="monster-legendary-actions"
        isHtml={true}
        label="LAIR AND LAIR ACTIONS DESCRIPTION"
      />
      <hr />
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <CopyButtonWithHiddenText
          content={values.monster.ac}
          id="monster-ac"
          label="ARMOR CLASS"
        />
        <CopyButtonWithHiddenText
          content={values.monster.acNotes || ""}
          id="monster-ac-type"
          label="ARMOR CLASS TYPE"
        />
        <CopyButtonWithHiddenText
          content={10 + skillModifier(values.monster, Skills.Perception)}
          id="monster-passive-perception"
          label="PASSIVE PERCEPTION"
        />
        <CopyButtonWithHiddenText
          content={values.monster.hitDice.count}
          id="monster-hit-dice"
          label="HIT POINTS DIE COUNT"
        />
        <ReadOnlyInput
          label="MONSTER TYPE"
          tooltip={dropdownTooltip}
          value={values.monster.hitDice.size}
        />
        <CopyButtonWithHiddenText
          content={values.monster.hitDice.modifier}
          id="monster-hp-mod"
          label="HIT POINTS MODIFIER"
        />
        <CopyButtonWithHiddenText
          content={Math.floor(hitPoints(values.monster))}
          id="monster-hp"
          label="AVERAGE HIT POINTS"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Strength}
          id="monster-str-score"
          label="STR SCORE"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Dexterity}
          id="monster-dex-score"
          label="DEX SCORE"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Constitution}
          id="monster-con-score"
          label="CON SCORE"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Intelligence}
          id="monster-int-score"
          label="INT SCORE"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Wisdom}
          id="monster-wis-score"
          label="WIS SCORE"
        />
        <CopyButtonWithHiddenText
          content={values.monster.abilityScores.Charisma}
          id="monster-cha-score"
          label="CHA SCORE"
        />
        <ReadOnlyInput
          label="SAVING THROW PROFICIENCIES"
          tooltip='DnDBeyond uses a "tag" input here so you need to manually enter the values'
          style={{ width: "300px" }}
          value={savingThrowsToString(values.monster)}
        />
        <CopyButtonWithHiddenText
          content={damageResponseToDnDBeyondAdjustments(values.monster)}
          id="monster-damage-adjustments"
          label="DAMAGE ADJUSTMENTS"
        />
        <CopyButtonWithHiddenText
          content={
            values.monster.conditionImmunities
              ? values.monster.conditionImmunities.join(", ")
              : ""
          }
          id="monster-condition-immunities"
          label="CONDITION IMMUNITIES"
        />
        <Button
          disabled={true}
          label="MONSTER ENVIRONMENTS"
          tooltip="We currently don't have a field for this one."
          tooltipOptions={TOOLTIP_SETTINGS}
        />
      </div>
      <CopyButtonWithHiddenText
        content={languagesText(values.monster)}
        id="monster-languages"
        isHtml={true}
        label="LANGUAGE NOTE OVERRIDE"
        style={{ width: "330px" }}
      />
      <p>
        You made it to the bottom! Unfortunately, languages, senses, skills, and
        movement all needed to be added <em>after</em> you initially save your
        monster and you need to do those parts manually.
      </p>
    </Fieldset>
  );
};
