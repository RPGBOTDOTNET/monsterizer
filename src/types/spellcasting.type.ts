import type { AbilityScore } from "./ability-score.type";
import type { ActionType } from "./action.type";
import type { RestType } from "./rest.type";

export type InnateSpell = {
  castingTime: ActionType | "Other";
  damage?: number;
  name: string;
  recharge?: RestType; // Omit if usable at-will
  targets?: number;
  uses?: number; // Omit for at-will
  uuid?: string;
};

export type InnateSpellcasting = {
  spellAttack?: number; // Omit to auto-calculate based on stats // TODO: Audit monster SRD data to see if any of them need to override this
  extraDescription?: string; // Overrides default "without material components" text
  spellDc?: number; // Omit to auto-calculate based on stats // TODO: Audit monster SRD data to see if any of them need to override this
  spellcastingAbility: AbilityScore;
  spells: InnateSpell[];
};

export const SpellcastingTypes = {
  PactMagic: "Pact Magic",
  Spellcasting: "Spellcasting",
} as const;

export type SpellcastingType =
  (typeof SpellcastingTypes)[keyof typeof SpellcastingTypes];

export type SpellcastingSpell = {
  castBeforeCombat?: boolean;
  castingTime: ActionType | "Other";
  damage?: number;
  name: string;
  targets?: number;
  uuid?: string;
};

export type Spellcasting = {
  casterLevel: number; // Used to calculate spell slots. Will be totalled from each group of spellcasting of each type.
  class?: string; // Typically a spellcaster will use something like "cleric"
  extraText?: string; // Appended to first line of spellcasting
  knowsSpells: boolean;
  spells: {
    // Prepared or known
    cantrips?: SpellcastingSpell[]; // Not all spellcasters get cantrips. ex: paladins and rangers.
    "1"?: SpellcastingSpell[];
    "2"?: SpellcastingSpell[];
    "3"?: SpellcastingSpell[];
    "4"?: SpellcastingSpell[];
    "5"?: SpellcastingSpell[];
    "6"?: SpellcastingSpell[];
    "7"?: SpellcastingSpell[];
    "8"?: SpellcastingSpell[];
    "9"?: SpellcastingSpell[];
  };
  spellAttack?: number; // We'll provide a default
  spellDc?: number; // We'll provide a default
  spellcastingAbility: AbilityScore;
  type: SpellcastingType;
  uuid?: string;
};
