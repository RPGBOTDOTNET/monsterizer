import type { ReactElement } from "react";
import type { Monster } from "../../../types";
import ActionsRenderer from "../actions-renderer";
import DescriptionRenderer from "../description-renderer";
import InventoryRenderer from "../inventory-renderer";
import LairActionsRenderer from "../lair-actions-renderer";
import LegendaryActionsRenderer from "../legendary-actions-renderer";
import MonsterizerCallout from "../monsterizer-callout";
import ReactionsRenderer from "../reactions-renderer";
import SpecialTraitsRenderer from "../special-traits-renderer";
import StatBlockTableRenderer from "../stat-block-table-renderer";
import TacticsRenderer from "../tactics-renderer";

export const StatblockContentClassic = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      <StatBlockTableRenderer monster={monster} showProficiencyBonus={false} />
      <SpecialTraitsRenderer monster={monster} showSpellcasting={true} />

      <ActionsRenderer
        monster={monster}
        showBonusActions={true}
        showSpellcasting={false}
      />
      <ReactionsRenderer monster={monster} />
      <LegendaryActionsRenderer monster={monster} />
      <LairActionsRenderer monster={monster} />
      <DescriptionRenderer monster={monster} />
      <TacticsRenderer monster={monster} />
      <InventoryRenderer monster={monster} />
      <MonsterizerCallout />
    </>
  );
};
export default StatblockContentClassic;
