import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Monster, SpecialTrait } from "../../types";
import InnateSpellcastingRendererClassic from "./innate-spellcasting-renderer-classic";
import SpellcastingRendererClassic from "./spellcasting-renderer-classic";
import { StatBlockSubHeader } from "./styled-elements";

type StatblockSpecialTraitsProps = {
  monster: Monster;
  showSpellcasting: boolean;
  showTraitsSectionlabel?: boolean;
};

type mapToRenderFunction = (key: number) => ReactElement;

export const SpecialTraitsRenderer = ({
  monster,
  showSpellcasting,
  showTraitsSectionlabel = false,
}: StatblockSpecialTraitsProps): ReactElement => {
  const traitComponents: {
    [name: string]: mapToRenderFunction;
  } = {};

  (monster.specialTraits || [])
    .filter((trait: SpecialTrait) => !trait.hideFromStatBlock)
    .forEach((trait: SpecialTrait) => {
      const markdownText = `***${trait.name.trim()}.*** ${(
        trait.description || trait.text(monster)
      ).trim()}`;
      traitComponents[trait.name] = (key: number): ReactElement => (
        <p>
          <Markdown key={key}>{markdownText}</Markdown>
        </p>
      );
    });

  if (showSpellcasting) {
    if (
      monster.innateSpellcasting &&
      monster.innateSpellcasting.spells &&
      monster.innateSpellcasting.spells.length
    ) {
      traitComponents["Innate Spellcasting"] = (key: number): ReactElement => (
        <InnateSpellcastingRendererClassic key={key} monster={monster} />
      );
    }
    if (monster.spellcasting && monster.spellcasting.length) {
      traitComponents["Spellcasting"] = (key: number): ReactElement => (
        <SpellcastingRendererClassic key={key} monster={monster} />
      );
    }
  }
  if (!Object.keys(traitComponents).length) {
    return <></>;
  }

  try {
    return (
      <>
        {showTraitsSectionlabel && (
          <StatBlockSubHeader>Traits</StatBlockSubHeader>
        )}
        {Object.keys(traitComponents)
          .sort()
          .map((key: string, index: number): ReactElement => {
            try {
              return traitComponents[key](index);
            } catch (e) {
              return <div key={key}>Error: {(e as Error).message}</div>;
            }
          })}
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default SpecialTraitsRenderer;
