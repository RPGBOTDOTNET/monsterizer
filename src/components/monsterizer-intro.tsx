import type { ReactElement } from "react";
import { StyledH2, StyledH3 } from "./styled-elements";

export const MonsterizerIntro = (): ReactElement => {
  return (
    <>
      <StyledH2>Welcome to the Monsterizer</StyledH2>
      <p>
        The Monsterizer is a full-featured monster builder tool to help you
        build and balance monsters for 5th edition Dungeons and Dragons. Start
        from one of over 300 monsters and NPCs in the SRD, or start fresh and
        build your monster from scratch.
      </p>
      <p>
        The monsters created here will follow the CR rules (see "Legal Stuff",
        below) established in 5e, allowing you to confidently build exciting new
        monsters in a matter of minutes.
      </p>
      <StyledH3>Legal Stuff</StyledH3>
      <p>
        All of the monsters and rules content in this tool are taken from the
        official SRD. I cannot (and will not) include other official monsters
        because it would violate Wizards of the Coast's intellectual property
        rights.
      </p>
      <p>
        This work includes material taken from the System Reference Document 5.1
        ("SRD 5.1") by Wizards of the Coast LLC and available at&nbsp;
        <a
          href="https://dnd.wizards.com/resources/systems-reference-document"
          target="_blank"
        >
          https://dnd.wizards.com/resources/systems-reference-document
        </a>
        . The SRD 5.1 is licensed under the Creative Commons Attribution 4.0
        International License available at&nbsp;
        <a
          href="https://creativecommons.org/licenses/by/4.0/legalcode"
          target="_blank"
        >
          https://creativecommons.org/licenses/by/4.0/legalcode
        </a>
        .
      </p>
      <StyledH3>How Calculating CR Works</StyledH3>
      <p>
        The rules used to calculate CR are based in large part upon the rules
        presented in the Dungeon Master's Guide, but I've made necessary
        modifications to address portions of those rules which don't handle
        certain use cases. For a better understanding of how CR is calculated, I
        encourage you to acquire a copy of the Dungeon Master's Guide from your
        Friendly Local Game Store.
      </p>
      <p>
        Even with automation, CR can still be a bit "fuzzy". Things like
        condition resistances/immunities and "crowd control" effects like fear
        and paralysis often don't have a numerical impact on CR. Creatures with
        special abilities may be more or less challenging than the math
        indicates, so even with the Monsterizer you may not be able to perfectly
        estimate your monster's CR. Consider the calculated CR to be the minimum
        CR for most creatures, and expect the creature to be more difficult than
        expected if you add abilities more complex than simple attack/damage
        actions.
      </p>

      <StyledH3>Change Log</StyledH3>
      {/* Don't forget to increment version in src/dnd5/monsterizer/constants.ts */}
      <ul>
        <li>
          1.2.0 - February 13th, 2025 - New stat block formats for the 2024 DnD
          rules and for Black Flag Roleplaying. Bug fixes, performance
          improvements.
          <ul>
            <li>
              Please note that we don't have monster creation rules for Black
              Flag, so the CR calculated by the Monsterizer&nbsp;
              <em>may not be accurate</em>.
            </li>
          </ul>
        </li>
        <li>1.1.2 - August 20th, 2024 - Bug fixes</li>
        <li>1.1.1 - February 28th, 2023 - Bug fixes</li>
        <li>
          1.1.0 - February 28th, 2023 - Major updates:
          <ul>
            <li>Adapative dark mode</li>
            <li>Assistive mode for creating attack actions</li>
            <li>
              Better SRD data set (fixed errors like typos, inconsistent
              formatting, etc.)
            </li>
            <li>Better support for spellcasting in updated stat block</li>
            <li>DPR calculations now include spellcasting</li>
            <li>Export to DnDBeyond using a series of buttons</li>
            <li>Export to the Game Master 5e app</li>
            <li>Export to Roll20 using the Roll20 APIs (Extremely in Beta)</li>
            <li>New stat block style options</li>
          </ul>
        </li>
        <li>
          1.0.18 - August 8th, 2022 - Bug fixes, allow changing Legendary
          Actions count
        </li>
        <li>
          1.0.17 - July 27th, 2022 - Separate inputs for bonus actions and bug
          fixes
        </li>
        <li>1.0.16 - June 10th, 2022 - Bug fixes</li>
        <li>1.0.15 - February 1st, 2022 - Bug fixes</li>
        <li>
          1.0.14 - December 31st, 2021 - Import monsters from
          previously-exported data
        </li>
        <li>
          1.0.13 - November 6th, 2021 - Export to Markdown, including special
          markdown for NaturalCrit.com's Homebrewery
        </li>
        <li>
          1.0.12 - November 5th, 2021 - Switch between classic/updated stat
          block format
        </li>
        <li>
          1.0.11 - October 22nd, 2021 - Support Markdown in multi-line text
          fields
        </li>
        <li>1.0.10 - October 14th, 2021 - Made everything prettier</li>
        <li>1.0.9 - October 13th, 2021 - Bug fixes</li>
        <li>1.0.8 - October 12th, 2021 - Bug fixes</li>
        <li>
          1.0.7 - October 9th, 2021 - Added new "Tactics and CR Calculatiom"
          section to Actions page to describe the actions used to calculate the
          creature's offensive CR. Also add a new "Tactics" field so that you
          can describe your creature's preferred combat tactics in the stat
          block.
        </li>
        <li>
          1.0.6 - October 7th, 2021 - Improved CR feedback information for
          Defenses (Actions soon!)
        </li>
        <li>1.0.5 - October 4th, 2021 - Bug fixes</li>
        <li>1.0.4 - October 3rd, 2021 - Bug fixes</li>
        <li>1.0.3 - October 3rd, 2021 - Better layout for mobile devices</li>
        <li>
          1.0.2 - October 3rd, 2021 - New "Save as PNG" button and stat block
          style controls. Cosmetic improvements and bug fixes.
        </li>
        <li>1.0.1 - October 2nd, 2021 - Fixed a bunch of bugs</li>
        <li>1.0.0 - October 1st, 2021 - Initial launch</li>
      </ul>

      <StyledH3>Future Updates</StyledH3>
      <p>
        The Monsterizer has room to improve. I have plans to add additional
        features in the future, but I need to know what people care about most
        so that I know what to focus on. If you want to see any of the features
        below, or if you have other ideas for improvements, please email me
        at&nbsp;
        <a
          href="mailto:RPGBOT@RPGBOT.net"
          style={{ color: "inherit" }}
          target="_blank"
        >
          RPGBOT@RPGBOT.net
        </a>
        .
      </p>

      <ul>
        <li style={{ textDecoration: "line-through" }}>
          Adaptive color scheme (dark/light mode)
        </li>
        <li>Add class levels to monsters</li>
        <li>Add templates (shadow dragon, etc.) to monsters</li>
        <li style={{ textDecoration: "line-through" }}>
          Auto-calculate CR from spellcasting
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Better Action inputs. Help formatting atttack entries.
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Better CR feedback as you work on the monster
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Better mobile support. It's very rough, currently.
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Export to DnDBeyond (I'm not exactly sure how that will work yet)
        </li>
        <li style={{ textDecoration: "line-through" }}>Export to DMBinder</li>
        <li>
          Export to Virtual Tabletops (Currently requested: Fantasy Grounds,
          0&nbsp;
          <span style={{ textDecoration: "line-through" }}>Foundry</span>,
          <span style={{ textDecoration: "line-through" }}>Roll20</span>)
        </li>
        <li>Export to "Gamemaster 5e" app</li>
        <li style={{ textDecoration: "line-through" }}>
          Export to Homebrewery
        </li>
        <li>Export to Johnn Four's Campaign Logger</li>
        <li style={{ textDecoration: "line-through" }}>
          Import data (effectively allowing you to save and share monsterizer
          data)
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Improvements to reflect new stat block format used in the Wild Beyond
          the Witchlight and future supplements.
        </li>
        <li>Random monsters</li>
        <li>
          Stat block format for pets/summons (similar to Beastmaster's Beast of
          the X)
        </li>
        <li>Support for CR 31+</li>
        <li style={{ textDecoration: "line-through" }}>
          Style selector for stat block so that you can make it look fancy for
          screenshots
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Support "markdown" syntax in description field so that you can write
          fancy descriptions with nice formatting
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Tactics advice generated from offensive CR calculations to (mostly)
          guarantee that your monster is as scary as intended
        </li>
      </ul>
    </>
  );
};

export default MonsterizerIntro;
