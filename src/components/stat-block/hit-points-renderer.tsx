import type { ReactElement } from "react";
import { hitPoints } from "../../calculators";
import { hitPointsLine } from "../../string-formatters";
import type { Monster } from "../../types";

type StatBlockHitPointsProps = {
  monster: Monster;
};

export const HitPointsRenderer = ({
  monster,
}: StatBlockHitPointsProps): ReactElement => {
  return (
    <>
      <strong>Hit Points</strong>&nbsp;
      <span>{Math.floor(hitPoints(monster))}</span>&nbsp;
      <span>({hitPointsLine(monster)})</span>
    </>
  );
};

export default HitPointsRenderer;
