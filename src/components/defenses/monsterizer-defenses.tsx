import { useFormikContext } from "formik";
import { type ReactElement, useEffect } from "react";
import type { MonsterizerFormData } from "../../types";
import {
  conditionModelToMonsterStats,
  damageModelToMonsterStats,
} from "../../utils";
import CrCalculations from "../cr-calculations";
import { StyledH2 } from "../styled-elements";
import AcControls from "./ac-controls";
import ConditionResponseControls from "./condition-response-controls";
import DamageResponseControls from "./damage-response-controls";
import HitPointsControls from "./hit-points-controls";
import SavingThrowControls from "./saving-throws-controls";

export const MonsterizerDefenses = (): ReactElement => {
  const { setFieldValue, values } = useFormikContext<MonsterizerFormData>();

  useEffect(() => {
    const monsterWithConditionModel = conditionModelToMonsterStats(
      values.conditionModel,
      values.monster,
    );
    const monsterWithDamageModel = damageModelToMonsterStats(
      values.damageModel,
      monsterWithConditionModel,
    );
    setFieldValue("monster", monsterWithDamageModel);
  }, [values.conditionModel, values.damageModel]);

  try {
    return (
      <>
        <CrCalculations />
        <StyledH2>Defenses</StyledH2>
        <HitPointsControls />
        <AcControls />
        <SavingThrowControls />
        <DamageResponseControls />
        <ConditionResponseControls />
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default MonsterizerDefenses;
