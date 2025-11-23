import type { ReactElement } from "react";
import { spellAttack, spellDc } from "../../calculators";
import { addSymbolToNumber } from "../../string-formatters";
import { RestTypes, type InnateSpell, type Monster } from "../../types";

type InnateSpellcastingRendererProps = {
  monster: Monster;
};

const spellSpellToName = (spell: InnateSpell): string => spell.name.trim();

export const InnateSpellcastingRendererClassic = ({
  monster,
}: InnateSpellcastingRendererProps): ReactElement => {
  const atWillSpells: InnateSpell[] = [];
  const dailySpells: { [count: number | string]: InnateSpell[] } = {};
  const shortRestSpells: { [count: number | string]: InnateSpell[] } = {};

  (monster.innateSpellcasting?.spells || []).forEach((spell: InnateSpell) => {
    if (!spell.recharge) {
      atWillSpells.push(spell);
    } else {
      const spellUses = spell.uses || 1;
      if (spell.recharge === RestTypes.Short) {
        if (shortRestSpells[spellUses]) {
          shortRestSpells[spellUses].push(spell);
        } else {
          shortRestSpells[spellUses] = [spell];
        }
      } else {
        if (dailySpells[spellUses]) {
          dailySpells[spellUses].push(spell);
        } else {
          dailySpells[spellUses] = [spell];
        }
      }
    }
  });

  return (
    <>
      <p>
        <strong>
          <em>Innate Spellcasting.</em>
        </strong>
        &nbsp;The&nbsp;
        {monster.nameShort || monster.name}'s innate spellcasting ability
        is&nbsp;
        {monster.innateSpellcasting?.spellcastingAbility} (spell save DC&nbsp;
        {monster.innateSpellcasting?.spellDc ||
          (monster.innateSpellcasting &&
            spellDc(monster, monster.innateSpellcasting.spellcastingAbility))}
        , spell attack&nbsp;
        {monster.innateSpellcasting &&
          addSymbolToNumber(
            monster.innateSpellcasting.spellAttack ||
              spellAttack(
                monster,
                monster.innateSpellcasting.spellcastingAbility,
              ),
          )}
        ). The {monster.nameShort || monster.name} can innately cast the
        following spells,&nbsp;
        {monster.innateSpellcasting?.extraDescription
          ? monster.innateSpellcasting?.extraDescription
          : "requiring no material components"}
        :
      </p>
      {!!atWillSpells.length && (
        <p>
          At will:&nbsp;
          {atWillSpells.map(spellSpellToName).filter(Boolean).sort().join(", ")}
        </p>
      )}
      {!!Object.keys(dailySpells).length &&
        Object.keys(dailySpells)
          .filter((key) => dailySpells[key].length)
          .sort()
          .map(
            (key: string): ReactElement => (
              <p key={key}>
                {key}/day each:&nbsp;
                {dailySpells[key]
                  .map(spellSpellToName)
                  .filter(Boolean)
                  .sort()
                  .join(", ")}
              </p>
            ),
          )}
      {!!Object.keys(shortRestSpells).length &&
        Object.keys(shortRestSpells)
          .sort()
          .map(
            (key: string): ReactElement => (
              <p key={key}>
                {key}/short rest each:&nbsp;
                {dailySpells[key]
                  .map(spellSpellToName)
                  .filter(Boolean)
                  .sort()
                  .join(", ")}
              </p>
            ),
          )}
    </>
  );
};

export default InnateSpellcastingRendererClassic;
