import type { ReactElement } from "react";
import {
  abilityModifier,
  hitPoints,
  proficiencyBonus,
  savingThrowModifier,
} from "../../../calculators";
import { STATS_BY_CR_2014 } from "../../../constants";
import {
  addSymbolToNumber,
  alignment,
  hitPointsLine,
  sensesLine,
  speedLine,
} from "../../../string-formatters";
import { AbilityScores, type Monster } from "../../../types";
import ActionsRenderer from "../actions-renderer";
import BonusActionsRenderer from "../bonus-actions-renderer";
import ConditionResponsesRenderer from "../condition-reponses-renderer";
import DamageResponsesRenderer from "../damage-responses-renderer";
import DescriptionRenderer from "../description-renderer";
import InventoryRenderer from "../inventory-renderer";
import LairActionsRenderer from "../lair-actions-renderer";
import LanguagesRenderer from "../languages-renderer";
import LegendaryActionsRenderer from "../legendary-actions-renderer";
import MonsterizerCallout from "../monsterizer-callout";
import ReactionsRenderer from "../reactions-renderer";
import SkillsRenderer from "../skills-renderer";
import SpecialTraitsRenderer from "../special-traits-renderer";
import { StatBlockHeader, StyledHR, StyledTable } from "../styled-elements";
import TacticsRenderer from "../tactics-renderer";

export const StatblockContent2024 = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      <StatBlockHeader style={{ marginBottom: "0" }}>
        {monster.name.trim()}
      </StatBlockHeader>

      <p style={{ marginTop: "0" }}>
        <em>
          {monster.size} {monster.creatureType}
          {monster.creatureSubtype
            ? " (" + monster.creatureSubtype + ")"
            : ""}, {alignment(monster)}
        </em>
      </p>
      <StyledHR />

      <StyledTable>
        <tbody>
          <tr>
            <td>
              <strong>AC</strong>&nbsp;
              <span>
                {monster.ac}&nbsp;
                {monster.acNotes ? `(${monster.acNotes})` : ""}
              </span>
            </td>
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
          <tr>
            <td colSpan={2}>
              <strong>HP</strong>&nbsp;
              <span>{Math.floor(hitPoints(monster))}</span>&nbsp;
              <span>({hitPointsLine(monster)})</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Speed</strong>&nbsp;
              <span>{speedLine(monster)}</span>
            </td>
          </tr>
        </tbody>
      </StyledTable>

      <table style={{ textAlign: "center", width: "100%" }}>
        <tr>
          <th colSpan={2} />
          <th>MOD</th>
          <th>SAVE</th>
          <th colSpan={2} />
          <th>MOD</th>
          <th>SAVE</th>
        </tr>
        <tr>
          <th>STR</th>
          <td>{monster.abilityScores[AbilityScores.Strength]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(monster.abilityScores[AbilityScores.Strength]),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Strength),
            )}
          </td>
          <th>INT</th>
          <td>{monster.abilityScores[AbilityScores.Intelligence]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(
                monster.abilityScores[AbilityScores.Intelligence],
              ),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Intelligence),
            )}
          </td>
        </tr>
        <tr>
          <th>DEX</th>
          <td>{monster.abilityScores[AbilityScores.Dexterity]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(monster.abilityScores[AbilityScores.Dexterity]),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Dexterity),
            )}
          </td>
          <th>WIS</th>
          <td>{monster.abilityScores[AbilityScores.Wisdom]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(monster.abilityScores[AbilityScores.Wisdom]),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Wisdom),
            )}
          </td>
        </tr>
        <tr>
          <th>CON</th>
          <td>{monster.abilityScores[AbilityScores.Constitution]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(
                monster.abilityScores[AbilityScores.Constitution],
              ),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Constitution),
            )}
          </td>
          <th>CHA</th>
          <td>{monster.abilityScores[AbilityScores.Charisma]}</td>
          <td>
            {addSymbolToNumber(
              abilityModifier(monster.abilityScores[AbilityScores.Charisma]),
            )}
          </td>
          <td>
            {addSymbolToNumber(
              savingThrowModifier(monster, AbilityScores.Charisma),
            )}
          </td>
        </tr>
      </table>

      <StyledTable>
        <tbody>
          <SkillsRenderer monster={monster} />
          <ConditionResponsesRenderer monster={monster} />
          <DamageResponsesRenderer monster={monster} />
          <tr>
            <td>
              <strong>Senses</strong>&nbsp;
              <span>{sensesLine(monster)}</span>
            </td>
          </tr>
          <LanguagesRenderer monster={monster} />
          <tr>
            <td>
              <strong>CR</strong>&nbsp;
              <span>
                {monster.challenge} (
                {STATS_BY_CR_2014[monster.challenge].experience}
                XP; PB +{proficiencyBonus(monster)})
              </span>
            </td>
          </tr>
        </tbody>
      </StyledTable>

      <SpecialTraitsRenderer
        monster={monster}
        showSpellcasting={false}
        showTraitsSectionlabel={true}
      />

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
export default StatblockContent2024;
