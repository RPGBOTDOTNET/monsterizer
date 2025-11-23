import type { ReactElement } from "react";
import type { Monster } from "../../../types";
import ActionsRenderer from "../actions-renderer";
import BonusActionsRenderer from "../bonus-actions-renderer";
import DescriptionRenderer from "../description-renderer";
import InventoryRenderer from "../inventory-renderer";
import LairActionsRenderer from "../lair-actions-renderer";
import LegendaryActionsRenderer from "../legendary-actions-renderer";
import MonsterizerCallout from "../monsterizer-callout";
import ReactionsRenderer from "../reactions-renderer";
import SpecialTraitsRenderer from "../special-traits-renderer";
import StatBlockTableRenderer from "../stat-block-table-renderer";
import TacticsRenderer from "../tactics-renderer";

export const StatblockContentUpdated = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      <StatBlockTableRenderer monster={monster} showProficiencyBonus={true} />
      <SpecialTraitsRenderer monster={monster} showSpellcasting={false} />

      <ActionsRenderer
        monster={monster}
        showBonusActions={false}
        showSpellcasting={true}
      />
      <BonusActionsRenderer monster={monster} />
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
export default StatblockContentUpdated;
