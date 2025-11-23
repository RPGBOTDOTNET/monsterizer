import type { ReactElement } from "react";
import { abilityModifier, proficiencyBonus } from "../../calculators";
import { STATS_BY_CR_2014 } from "../../constants";
import {
  addSymbolToNumber,
  alignment,
  sensesLine,
  speedLine,
} from "../../string-formatters";
import { AbilityScores, type Monster } from "../../types";
import AcRenderer from "./ac-renderer";
import ConditionResponsesRenderer from "./condition-reponses-renderer";
import DamageResponsesRenderer from "./damage-responses-renderer";
import HitPointsRenderer from "./hit-points-renderer";
import LanguagesRenderer from "./languages-renderer";
import SavingThrowsRenderer from "./saving-throws-renderer";
import SkillsRenderer from "./skills-renderer";
import {
  AbilityScoreTable,
  StatBlockHeader,
  StyledHR,
  StyledTable,
} from "./styled-elements";

export const StatBlockTableRenderer = ({
  monster,
  showProficiencyBonus,
}: {
  monster: Monster;
  showProficiencyBonus: boolean;
}): ReactElement => {
  return (
    <div>
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
                abilityModifier(monster.abilityScores[AbilityScores.Strength]),
              )}
              )
            </td>
            <td>
              {monster.abilityScores[AbilityScores.Dexterity]} (
              {addSymbolToNumber(
                abilityModifier(monster.abilityScores[AbilityScores.Dexterity]),
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
                abilityModifier(monster.abilityScores[AbilityScores.Charisma]),
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
          <SkillsRenderer monster={monster} />
          <ConditionResponsesRenderer monster={monster} />
          <DamageResponsesRenderer monster={monster} />
          <tr>
            <td colSpan={2}>
              <strong>Senses</strong>&nbsp;
              <span>{sensesLine(monster)}</span>
            </td>
          </tr>
          <LanguagesRenderer monster={monster} />
          <tr>
            <td colSpan={showProficiencyBonus ? 1 : 2}>
              <strong>Challenge</strong>&nbsp;
              <span>
                {monster.challenge} (
                {STATS_BY_CR_2014[monster.challenge].experience}
                XP)
              </span>
              {showProficiencyBonus && (
                <>
                  &nbsp;<strong>Proficiency Bonus</strong> +
                  {proficiencyBonus(monster)}
                </>
              )}
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledHR />
    </div>
  );
};

export default StatBlockTableRenderer;
