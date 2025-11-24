import type { ReactElement } from "react";
import { abilityModifier } from "../../../calculators";
import {
  addSymbolToNumber,
  alignment,
  speedLine,
} from "../../../string-formatters";
import { AbilityScores, type Monster } from "../../../types";
import AcRenderer from "../ac-renderer";
import ActionsRenderer from "../actions-renderer";
import BonusActionsRenderer from "../bonus-actions-renderer";
import DescriptionRenderer from "../description-renderer";
import HitPointsRenderer from "../hit-points-renderer";
import InventoryRenderer from "../inventory-renderer";
import LairActionsRenderer from "../lair-actions-renderer";
import LanguagesRenderer from "../languages-renderer";
import LegendaryActionsRenderer from "../legendary-actions-renderer";
import MonsterizerCallout from "../monsterizer-callout";
import ReactionsRenderer from "../reactions-renderer";
import SavingThrowsRenderer from "../saving-throws-renderer";
import SpecialTraitsRenderer from "../special-traits-renderer";
import {
  AbilityScoreTable,
  StatBlockHeader,
  StyledHR,
  StyledTable,
} from "../styled-elements";
import TacticsRenderer from "../tactics-renderer";

export const StatblockContentBlackFlag = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      <div>
        <StatBlockHeader style={{ marginBottom: "0" }}>
          {monster.name.trim()}
        </StatBlockHeader>

        <p>CR {monster.challenge}</p>
        <p style={{ marginTop: "0" }}>
          <em>
            {monster.size} {monster.creatureType}
            {monster.creatureSubtype
              ? " (" + monster.creatureSubtype + ")"
              : ""}
            , {alignment(monster)}
          </em>
        </p>
        <StyledHR />

        <StyledTable>
          <tbody>
            <tr>
              <td>
                <AcRenderer monster={monster} />
              </td>
            </tr>
            <tr>
              <td>
                <HitPointsRenderer monster={monster} />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Speed</strong>&nbsp;
                <span>{speedLine(monster)}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Perception</strong>&nbsp;
                <span>
                  {10 +
                    abilityModifier(
                      monster.abilityScores[AbilityScores.Wisdom],
                    )}
                </span>
              </td>
              <td>
                <strong>Stealth</strong>&nbsp;
                <span>
                  {10 +
                    abilityModifier(
                      monster.abilityScores[AbilityScores.Dexterity],
                    )}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Initiative</strong>&nbsp;
                <span>
                  {addSymbolToNumber(
                    abilityModifier(
                      monster.abilityScores[AbilityScores.Dexterity],
                    ),
                  )}
                </span>
              </td>
            </tr>
          </tbody>
        </StyledTable>

        <StyledHR />
        <AbilityScoreTable style={{ textAlign: "center", width: "100%" }}>
          <thead>
            <tr>
              <th>STR</th>
              <th>DEX</th>
              <th>CON</th>
              <th>INT</th>
              <th>WIS</th>
              <th>CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {monster.abilityScores[AbilityScores.Strength]} (
                {addSymbolToNumber(
                  abilityModifier(
                    monster.abilityScores[AbilityScores.Strength],
                  ),
                )}
                )
              </td>
              <td>
                {monster.abilityScores[AbilityScores.Dexterity]} (
                {addSymbolToNumber(
                  abilityModifier(
                    monster.abilityScores[AbilityScores.Dexterity],
                  ),
                )}
                )
              </td>
              <td>
                {monster.abilityScores[AbilityScores.Constitution]}
                &nbsp; (
                {addSymbolToNumber(
                  abilityModifier(
                    monster.abilityScores[AbilityScores.Constitution],
                  ),
                )}
                )
              </td>
              <td>
                {monster.abilityScores[AbilityScores.Intelligence]}
                &nbsp; (
                {addSymbolToNumber(
                  abilityModifier(
                    monster.abilityScores[AbilityScores.Intelligence],
                  ),
                )}
                )
              </td>
              <td>
                {monster.abilityScores[AbilityScores.Wisdom]} (
                {addSymbolToNumber(
                  abilityModifier(monster.abilityScores[AbilityScores.Wisdom]),
                )}
                )
              </td>
              <td>
                {monster.abilityScores[AbilityScores.Charisma]} (
                {addSymbolToNumber(
                  abilityModifier(
                    monster.abilityScores[AbilityScores.Charisma],
                  ),
                )}
                )
              </td>
            </tr>
          </tbody>
        </AbilityScoreTable>

        <StyledHR />
        <StyledTable>
          <tbody>
            <SavingThrowsRenderer monster={monster} />

            {((monster.conditionVulnerabilities &&
              monster.conditionVulnerabilities.length > 0) ||
              (monster.damageVulnerabilities && monster.damageVulnerabilities)
                .length) && (
              <tr>
                <td>
                  <strong>Vulnerable</strong>&nbsp;
                  <span>
                    {[
                      ...(monster.conditionVulnerabilities || []),
                      ...(monster.damageVulnerabilities || []),
                    ]
                      .map((a) => a.toLocaleLowerCase())
                      .sort()
                      .join(", ")}
                  </span>
                </td>
              </tr>
            )}
            {monster.conditionResistances &&
              monster.conditionResistances.length > 0 && (
                <tr>
                  <td>
                    <strong>Resistant</strong>&nbsp;
                    <span>
                      {[
                        ...(monster.conditionResistances || []),
                        ...(monster.damageResistances || []),
                      ]
                        .map((a) => a.toLocaleLowerCase())
                        .sort()
                        .join(", ")}
                    </span>
                  </td>
                </tr>
              )}
            {monster.conditionImmunities &&
              monster.conditionImmunities.length > 0 && (
                <tr>
                  <td>
                    <strong>Immune</strong>&nbsp;
                    <span>
                      {[
                        ...(monster.conditionImmunities || []),
                        ...(monster.damageImmunities || []),
                      ]
                        .map((a) => a.toLocaleLowerCase())
                        .sort()
                        .join(", ")}
                    </span>
                  </td>
                </tr>
              )}
            {monster.senses && (
              <tr>
                <td colSpan={2}>
                  <strong>Senses</strong>&nbsp;
                  <span>{monster.senses.trim()}</span>
                </td>
              </tr>
            )}
            <LanguagesRenderer monster={monster} />
          </tbody>
        </StyledTable>
        <StyledHR />
      </div>
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
export default StatblockContentBlackFlag;
