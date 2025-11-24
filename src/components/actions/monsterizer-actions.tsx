import { useFormikContext } from "formik";
import { isNumber } from "lodash";
import Markdown from "markdown-to-jsx";
import { toWords } from "number-to-words";
import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import {
  ToggleButton,
  type ToggleButtonChangeEvent,
} from "primereact/togglebutton";
import { type ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  EMPTY_ACTION,
  EMPTY_LAIR_ACTION,
  EMPTY_LEGENDARY_ACTION,
  EMPTY_REACTION,
  STATS_BY_CR_2014,
  UUID,
} from "../../constants";
import {
  type DiceExpression,
  averageDiceOutcome,
  parseDiceNotation,
} from "../../dice";
import {
  FormikDropdown,
  FormikInput,
  FormikNumberSpinner,
  FormikTextarea,
  FormikToggleInput,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import { addSymbolToNumber } from "../../string-formatters";
import {
  type Action,
  type ActionBase,
  type ActionType,
  ActionTypes,
  type AttackType,
  AttackTypes,
  HumanFriendlyDamageTypes,
  type LairAction,
  type LegendaryAction,
  type MonsterizerFormData,
} from "../../types";
import CrCalculations from "../cr-calculations";
import MarkdownTooltip from "../markdown-tooltip";
import { StyledH2 } from "../styled-elements";
import AttackAndDcControls from "./attack-and-dc-controls";
import TacticsAndCrCalculations from "./tactics-and-cr-calculations";

const damageTypeOptions = Object.values(HumanFriendlyDamageTypes)
  .sort()
  .map((type) => {
    return {
      label: type,
      value: type,
    };
  });

const reachAndOrRange = (
  type: AttackType,
  range: string,
  reach: number,
): string => {
  if (type === AttackTypes.EitherSpell || type === AttackTypes.EitherWeapon) {
    if (range && reach) {
      return `reach ${reach} ft. or range ${range} ft.`;
    } else {
      return "(you must set both range and reach for this type of attack)";
    }
  } else if (
    type === AttackTypes.MeleeSpell ||
    type === AttackTypes.MeleeWeapon
  ) {
    if (reach) {
      return `reach ${reach} ft.`;
    } else {
      return "(you must set reach for this type of attack)";
    }
  } else if (
    type === AttackTypes.RangedSpell ||
    type === AttackTypes.RangedWeapon
  ) {
    if (range) {
      return `range ${range} ft.`;
    } else {
      return "(you must set range for this type of attack)";
    }
  } else {
    return "(attack type not set)";
  }
};

const reduceDiceExpressionsToTotal = (
  runningTotal: number,
  expression: DiceExpression,
): number => {
  return runningTotal + averageDiceOutcome(expression);
};

type ActionBlockProps = {
  action: Action | LairAction | LegendaryAction;
  index: number;
  type: ActionType;
};

const ActionBlock = ({
  action,
  index,
  type,
}: ActionBlockProps): ReactElement => {
  const { setFieldValue, values } = useFormikContext<MonsterizerFormData>();
  const [useFancyMode, setUseFancyMode] = useState<boolean>(
    type === ActionTypes.Action && !!action.attackType,
  );

  let actionArrayName: string;
  if (type === ActionTypes.Action) {
    actionArrayName = "actions";
  } else if (type === ActionTypes.BonusAction) {
    actionArrayName = "bonusActions";
  } else if (type === ActionTypes.Lair) {
    actionArrayName = "lairActions";
  } else if (type === ActionTypes.Legendary) {
    actionArrayName = "legendaryActions";
  } else if (type === ActionTypes.Reaction) {
    actionArrayName = "reactions";
  } else {
    throw new Error("That's not a valid type of action.");
  }
  const idStub = `monster.${actionArrayName}[${index}]`;
  const legendaryActionCost =
    type === ActionTypes.Legendary && (action as LegendaryAction).cost > 1
      ? ` (Costs ${(action as LegendaryAction).cost} action${
          (action as LegendaryAction).cost > 1 ? "s" : "s"
        })`
      : "";

  const removeAction = (): void => {
    let oldArray: Array<ActionBase> = [];
    if (type === ActionTypes.Action) {
      oldArray = [...(values.monster.actions || [])];
    } else if (type === ActionTypes.BonusAction) {
      oldArray = [...(values.monster.bonusActions || [])];
    } else if (type === ActionTypes.Lair) {
      oldArray = [...(values.monster.lairActions || [])];
    } else if (type === ActionTypes.Legendary) {
      oldArray = [...(values.monster.legendaryActions || [])];
    } else if (type === ActionTypes.Reaction) {
      oldArray = [...(values.monster.reactions || [])];
    } else {
      throw new Error("That's not a valid type of action.");
    }

    oldArray.splice(index, 1);
    setFieldValue(`monster.${actionArrayName}`, oldArray);
  };

  const updateFromFancyMode = (
    patchedAction: Action | LairAction | LegendaryAction,
  ): void => {
    const attackModifier = addSymbolToNumber(
      isNumber(patchedAction.attackModifier)
        ? (patchedAction.attackModifier as number)
        : STATS_BY_CR_2014[values.monster.challenge].attack,
    );
    const damageExpression = patchedAction.damageExpression || "?";
    const damageType = patchedAction.damageType || "?";
    const description = patchedAction.attackType
      ? `${patchedAction.attackType} Attack`
      : "?";
    const reach = patchedAction.reach || 5;
    const targets = toWords(patchedAction.targets);
    const targetsPluralizer =
      patchedAction.targets && patchedAction.targets > 1 ? "s" : "";

    const damageOnHitExpressions = patchedAction.damageExpression
      ? parseDiceNotation(patchedAction.damageExpression)
      : [];
    const calculatedAverageDamage = damageOnHitExpressions.reduce(
      reduceDiceExpressionsToTotal,
      0,
    );
    patchedAction.averageDamage = Math.floor(calculatedAverageDamage);
    const omitDiceExpression =
      calculatedAverageDamage.toString() ===
      (patchedAction.damageExpression || "").trim();
    const damageExpressionToPrint = omitDiceExpression
      ? damageExpression
      : `${patchedAction.averageDamage} (${damageExpression})`;

    patchedAction.description =
      `*${description}:* ${attackModifier} to hit, ${reachAndOrRange(
        patchedAction.attackType as AttackType,
        patchedAction.range || "",
        reach,
      )}, ${targets} target${targetsPluralizer}. ` +
      `*Hit:* ${damageExpressionToPrint} ${damageType.toLocaleLowerCase()} damage.`;

    setFieldValue(idStub, patchedAction);
  };

  try {
    return (
      <Fieldset>
        {type === ActionTypes.Action && (
          <div className="p-field">
            <div>
              <label
                className="p-d-block"
                htmlFor={`fancy-mode-toggle-${type}-${index}`}
              >
                Use Attack Mode?
              </label>
            </div>
            <ToggleButton
              checked={useFancyMode}
              id={`fancy-mode-toggle-${type}-${index}`}
              onChange={(e: ToggleButtonChangeEvent) => {
                setUseFancyMode(e.value);
              }}
              offIcon={`pi ${PrimeIcons.TIMES}`}
              onIcon={`pi ${PrimeIcons.CHECK}`}
              style={{ height: "53px" }}
              tooltipOptions={TOOLTIP_SETTINGS}
              tooltip="Fancy inputs for quickly creating basic attack actions. WARNING: Using this will overwrite existing values."
            />
          </div>
        )}
        {useFancyMode && (
          <>
            <FormikInput
              id={`${idStub}.name`}
              label="Name"
              onChange={(e) => {
                if (useFancyMode) {
                  // Need to do things this way to prevent race condition in state update logic
                  const patchAction: ActionBase = {
                    ...action,
                    name: e.target.value,
                  };
                  updateFromFancyMode(patchAction);
                }
              }}
              required={true}
            />
            <div
              className="grid flex-row justify-content-between align-items-end"
              style={{ margin: "0", width: "100%" }}
            >
              <FormikDropdown
                id={`${idStub}.attackType`}
                label="Attack Type"
                onChange={(e) => {
                  // Need to do things this way to prevent race condition in state update logic
                  const patchAction: ActionBase = {
                    ...action,
                    attackType: e.target.value,
                  };
                  updateFromFancyMode(patchAction);
                }}
                options={[
                  {
                    label: AttackTypes.EitherWeapon,
                    value: AttackTypes.EitherWeapon,
                  },
                  {
                    label: AttackTypes.MeleeSpell,
                    value: AttackTypes.MeleeSpell,
                  },
                  {
                    label: AttackTypes.MeleeWeapon,
                    value: AttackTypes.MeleeWeapon,
                  },
                  {
                    label: AttackTypes.RangedSpell,
                    value: AttackTypes.RangedSpell,
                  },
                  {
                    label: AttackTypes.RangedWeapon,
                    value: AttackTypes.RangedWeapon,
                  },
                ]}
                required={true}
                style={{ width: "200px" }}
              />
              <FormikDropdown
                floatLabel={false}
                id={`${idStub}.damageType`}
                label="Damage Type"
                onChange={(e) => {
                  // Need to do things this way to prevent race condition in state update logic
                  const patchAction: ActionBase = {
                    ...action,
                    damageType: e.value,
                  };
                  updateFromFancyMode(patchAction);
                }}
                options={damageTypeOptions}
                required={true}
                style={{ width: "200px" }}
              />
              <FormikInput
                disabled={
                  action.attackType === AttackTypes.MeleeWeapon ||
                  action.attackType === AttackTypes.MeleeSpell
                }
                floatLabel={false}
                id={`${idStub}.range`}
                label="Range"
                onChange={(e) => {
                  // Need to do things this way to prevent race condition in state update logic
                  const patchAction: ActionBase = {
                    ...action,
                    range: e.target.value,
                  };
                  updateFromFancyMode(patchAction);
                }}
                placeholder="10/20"
              />
              <FormikNumberSpinner
                buttonLayout="horizontal"
                disabled={
                  action.attackType === AttackTypes.RangedSpell ||
                  action.attackType === AttackTypes.RangedWeapon
                }
                floatLabel={false}
                id={`${idStub}.reach`}
                label="Reach"
                min={0}
                onChange={(e) => {
                  // Need to do things this way to prevent race condition in state update logic
                  const patchAction: ActionBase = {
                    ...action,
                    reach: e.value || 0,
                  };
                  updateFromFancyMode(patchAction);
                }}
                placeholder="5"
                step={5}
              />
            </div>
            <FormikInput
              floatLabel={false}
              id={`${idStub}.damageExpression`}
              label="Damage"
              onChange={(e) => {
                // Need to do things this way to prevent race condition in state update logic
                const patchAction: ActionBase = {
                  ...action,
                  damageExpression: e.target.value || "0",
                };
                updateFromFancyMode(patchAction);
              }}
              required={true}
              style={{ flexGrow: 1 }}
              tooltip="This field support dice notation"
            />
          </>
        )}
        {!useFancyMode && (
          <>
            <FormikInput id={`${idStub}.name`} label="Name" required={true} />
            <FormikTextarea
              id={`${idStub}.description`}
              label="Description"
              required={true}
              tooltip='Enter the full readable text which will appear in the stat block, including damage, etc.. For Bonus Actions, start the description with "As a bonus action,"'
            />
          </>
        )}
        <div
          className="grid flex-row justify-content-between align-items-end"
          style={{ margin: "0", width: "100%" }}
        >
          <FormikNumberSpinner
            id={`${idStub}.averageDamage`}
            label="Avg. Damage"
            min={0}
            onChange={(e) => {
              if (useFancyMode) {
                // Need to do things this way to prevent race condition in state update logic
                const patchAction: ActionBase = {
                  ...action,
                  averageDamage: e.value || 0,
                };
                updateFromFancyMode(patchAction);
              }
            }}
            required={true}
            step={1}
            tooltip="Average damage dealt to each target of the Action. If some damage allows a saving throw, assume that the target fails."
          />
          <FormikNumberSpinner
            id={`${idStub}.targets`}
            label="Targets"
            min={0}
            onChange={(e) => {
              if (useFancyMode) {
                // Need to do things this way to prevent race condition in state update logic
                const patchAction: ActionBase = {
                  ...action,
                  targets: e.value || 0,
                };
                updateFromFancyMode(patchAction);
              }
            }}
            required={true}
            step={1}
            tooltip="The number of targets expected to be damaged by the Action. The official rules use 2 for all AOEs, but you might also use the Targets in Areas of Effect in chapter 8 of the DMG."
          />
          {type === ActionTypes.Action && (
            <FormikNumberSpinner
              id={`${idStub}.reusable`}
              label="Reusable"
              max={3}
              min={0}
              required={true}
              step={1}
              tooltip="The expected number of times the creature can use this action within the first three rounds of combat."
            />
          )}
          {type === ActionTypes.Legendary && (
            <FormikNumberSpinner
              id={`${idStub}.cost`}
              label="Cost"
              max={3}
              min={1}
              required={true}
              step={1}
              tooltip="The number of Legendary Action uses to use this Action."
            />
          )}
          <Button
            icon="pi pi-trash"
            onClick={removeAction}
            style={{ width: "auto" }}
            tooltip="Remove this action"
            tooltipOptions={TOOLTIP_SETTINGS}
            type="button"
          />
        </div>
        {type === ActionTypes.Action && (
          <FormikToggleInput
            id={`${idStub}.hideFromStatBlock`}
            offIcon="pi-eye"
            offLabel="Show"
            onIcon="pi-eye-slash"
            onLabel="Hide"
            label="Hide this action from stat block?"
            tooltip="If the creature has a source of damage (such as spellcasting) which it can use as an action, checking this box allows you to account for that capability without adding Action entries to the stat block unnecessarily."
          />
        )}
        {!(action as Action).hideFromStatBlock && action.name && (
          <p>
            <strong>
              {action.name}
              {legendaryActionCost}.
            </strong>
            &nbsp;
            <Markdown>{action.description}</Markdown>
          </p>
        )}
      </Fieldset>
    );
  } catch (e) {
    return <p>Error: {(e as Error).message}</p>;
  }
};

export const MonsterizerActions = (): ReactElement => {
  const { setValues, values } = useFormikContext<MonsterizerFormData>();

  const [actionsFieldsetCollapsed, setActionsFieldsetCollapsed] =
    useState<boolean>(false);
  const [bonusActionsFieldsetCollapsed, setBonusActionsFieldsetCollapsed] =
    useState<boolean>(true);
  const [lairActionsFieldsetCollapsed, setLairActionsFieldsetCollapsed] =
    useState<boolean>(true);
  const [
    legendaryActionsFieldsetCollapsed,
    setLegendaryActionsFieldsetCollapsed,
  ] = useState<boolean>(true);
  const [reactionsFieldsetCollapsed, setReactionsFieldsetCollapsed] =
    useState<boolean>(true);

  const pushEmptyAction = (
    actionArrayKey:
      | "actions"
      | "bonusActions"
      | "lairActions"
      | "legendaryActions"
      | "reactions",
    emptyAction: Action | LairAction | LegendaryAction,
  ) => {
    let newArray = new Array<Action | LairAction | LegendaryAction>();
    if (actionArrayKey === "actions") {
      newArray = newArray.concat(values.monster.actions);
    } else if (actionArrayKey === "bonusActions") {
      newArray = newArray.concat(values.monster.bonusActions || []);
    } else if (actionArrayKey === "lairActions") {
      newArray = newArray.concat(values.monster.lairActions || []);
    } else if (actionArrayKey === "legendaryActions") {
      newArray = newArray.concat(values.monster.legendaryActions || []);
    } else if (actionArrayKey === "reactions") {
      newArray = newArray.concat(values.monster.reactions || []);
    } else {
      throw new Error("Invalid action type.");
    }
    newArray.push(emptyAction);
    // TODO: Use setFieldValue
    setValues({
      ...values,
      monster: {
        ...values.monster,
        [actionArrayKey]: newArray,
      },
    });
  };

  // Apply uuid to any items that don't already have it, then re-assign formik values
  if (values.monster.actions && values.monster.actions.length) {
    let needsReset = false;
    [
      values.monster.actions,
      values.monster.bonusActions || [],
      values.monster.lairActions || [],
      values.monster.legendaryActions || [],
      values.monster.reactions || [],
    ].forEach((actionArray) => {
      actionArray.forEach((action) => {
        if (!action[UUID]) {
          action[UUID] = uuidv4();
          needsReset = true;
        }
      });
    });
    if (needsReset) {
      setValues(values);
    }
  }

  try {
    return (
      <>
        <CrCalculations />
        <StyledH2>Actions</StyledH2>
        <AttackAndDcControls />
        <Fieldset
          legend="Actions"
          toggleable
          collapsed={actionsFieldsetCollapsed}
          onToggle={(e) => setActionsFieldsetCollapsed(e.value)}
        >
          <MarkdownTooltip />
          {values.monster.actions.map((action: Action, index: number) => (
            <ActionBlock
              action={action}
              key={action.uuid as string}
              index={index}
              type={ActionTypes.Action}
            />
          ))}
          <Button
            icon="pi pi-plus"
            label="Add an Action"
            onClick={() => {
              pushEmptyAction("actions", EMPTY_ACTION);
            }}
            type="button"
          />
        </Fieldset>
        <Fieldset
          legend="Bonus Actions"
          toggleable
          collapsed={bonusActionsFieldsetCollapsed}
          onToggle={(e) => setBonusActionsFieldsetCollapsed(e.value)}
        >
          <MarkdownTooltip />
          {values.monster.bonusActions &&
            !!values.monster.bonusActions.length &&
            values.monster.bonusActions.map(
              (bonusAction: Action, index: number) => (
                <ActionBlock
                  action={bonusAction}
                  key={bonusAction.uuid as string}
                  index={index}
                  type={ActionTypes.BonusAction}
                />
              ),
            )}
          <Button
            icon="pi pi-plus"
            label="Add a Bonus Action"
            onClick={() => {
              pushEmptyAction("bonusActions", EMPTY_ACTION);
            }}
            type="button"
          />
        </Fieldset>
        <Fieldset
          legend="Reactions"
          toggleable
          collapsed={reactionsFieldsetCollapsed}
          onToggle={(e) => setReactionsFieldsetCollapsed(e.value)}
        >
          <MarkdownTooltip />
          {values.monster.reactions.map((action: Action, index: number) => (
            <ActionBlock
              action={action}
              key={action.uuid as string}
              index={index}
              type={ActionTypes.Reaction}
            />
          ))}
          <Button
            icon="pi pi-plus"
            label="Add a Reaction"
            onClick={() => {
              pushEmptyAction("reactions", EMPTY_REACTION);
            }}
            type="button"
          />
        </Fieldset>
        <Fieldset
          legend="Lair Actions"
          toggleable
          collapsed={lairActionsFieldsetCollapsed}
          onToggle={(e) => setLairActionsFieldsetCollapsed(e.value)}
        >
          <MarkdownTooltip />
          {(values.monster.lairActions &&
            !!values.monster.lairActions.length &&
            values.monster.lairActions.map(
              (lairAction: LairAction, index: number) => (
                <ActionBlock
                  action={lairAction}
                  key={lairAction.uuid as string}
                  index={index}
                  type={ActionTypes.Lair}
                />
              ),
            )) || <></>}
          <Button
            icon="pi pi-plus"
            label="Add a Lair Action"
            onClick={() => {
              pushEmptyAction("lairActions", EMPTY_LAIR_ACTION);
            }}
            type="button"
          />
        </Fieldset>
        <Fieldset
          legend="Legendary Actions"
          toggleable
          collapsed={legendaryActionsFieldsetCollapsed}
          onToggle={(e) => setLegendaryActionsFieldsetCollapsed(e.value)}
        >
          <FormikNumberSpinner
            buttonLayout="horizontal"
            id="monster.legendaryActionsCount"
            label="How Many Legendary Actions?"
            min={0}
            placeholder="3"
            step={1}
          />
          <MarkdownTooltip />
          {(values.monster.legendaryActions || []).map(
            (legendaryAction: LegendaryAction, index: number) => (
              <ActionBlock
                action={legendaryAction}
                key={legendaryAction.uuid as string}
                index={index}
                type={ActionTypes.Legendary}
              />
            ),
          )}
          <Button
            icon="pi pi-plus"
            label="Add a Legendary Action"
            onClick={() => {
              pushEmptyAction("legendaryActions", EMPTY_LEGENDARY_ACTION);
            }}
            type="button"
          />
        </Fieldset>
        <TacticsAndCrCalculations monster={values.monster} />
      </>
    );
  } catch (e) {
    return <p>{(e as Error).message}</p>;
  }
};

export default MonsterizerActions;
