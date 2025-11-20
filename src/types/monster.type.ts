import { AbilityScores } from "./ability-score.type";
import type { Action, LairAction, LegendaryAction } from "./action.type";
import type { Condition } from "./condition.type";
import type { DamageType } from "./damage.type";
import type { ThingProficiency } from "./proficiency.type";
import type { CreatureSize } from "./size.type";
import type { Skills } from "./skill.type";
import type { InnateSpellcasting, Spellcasting } from "./spellcasting.type";

type SpecialTraitEffect = {
  // Modifiers to "effective" numbers, such as "effective AC"
  ac?: number;
  attack?: number;
  damageOnce?: number;
  damagePerRound?: number;
  hp?: number;
};

export type SpecialTrait = {
  description?: string;
  effect: SpecialTraitEffect;
  hideFromStatBlock?: boolean;
  name: string;
  text: (monster: Monster) => string;
  tooltip?: string;
  uuid?: string;
};

export type Monster = {
  _monsterizerVersion?: string;
  _ruleset: "2014" | "2024" | "Black Flag";
  abilityScores: {
    [AbilityScores.Strength]: number;
    [AbilityScores.Dexterity]: number;
    [AbilityScores.Constitution]: number;
    [AbilityScores.Intelligence]: number;
    [AbilityScores.Wisdom]: number;
    [AbilityScores.Charisma]: number;
  };
  ac: number;
  acNotes?: string;
  actions: Action[];
  alignment: {
    lawChaos: string;
    goodEvil: string;
  };
  attack?: number;
  bonusActions?: Action[]; // TODO: Correct all SRD bonus actions
  cantSpeak?: boolean;
  challenge: string; // Needs to be a string for fractional CRs
  conditionImmunities?: Array<Condition | string>;
  conditionResistances?: Array<Condition | string>;
  conditionVulnerabilities?: Array<Condition | string>;
  creatureType: string; // TODO: CreatureType enum
  creatureSubtype: string;
  damageImmunities: Array<DamageType | string>; // TODO: Make optional. Affects damage model.
  damageResistances: Array<DamageType | string>; // TODO: Make optional. Affects damage model.
  damageVulnerabilities: Array<DamageType | string>; // TODO: Make optional. Affects damage model.
  description: string;
  group?: string;
  hitDice: {
    count: number;
    size: string; // TODO: enum of dice
    modifier: number; // TODO: make optional
  };
  innateSpellcasting?: InnateSpellcasting;
  inventory?: string;
  lairActions?: LairAction[];
  languages: string;
  legendaryActions?: LegendaryAction[];
  legendaryActionsCount?: number;
  name: string;
  nameShort?: string; // Used in stat blocks instead of long names like "Phil, Lord of Ancient Nonsene"
  reactions: Action[]; // TODO: Make optional
  saveDc?: number;
  savingThrows: {
    // Make these optional to reduce file sizes
    [AbilityScores.Strength]?: ThingProficiency;
    [AbilityScores.Dexterity]?: ThingProficiency;
    [AbilityScores.Constitution]?: ThingProficiency;
    [AbilityScores.Intelligence]?: ThingProficiency;
    [AbilityScores.Wisdom]?: ThingProficiency;
    [AbilityScores.Charisma]?: ThingProficiency;
  };
  senses: string;
  skills: {
    // TODO: convert to a Record<Skill, ThingProficiency>
    // Make these optional to reduce file sizes
    //Str
    [Skills.Athletics]?: ThingProficiency;
    //Dex
    [Skills.Acrobatics]?: ThingProficiency;
    [Skills.SleightOfHand]?: ThingProficiency;
    [Skills.Stealth]?: ThingProficiency;
    //Int
    [Skills.Arcana]?: ThingProficiency;
    [Skills.History]?: ThingProficiency;
    [Skills.Investigation]?: ThingProficiency;
    [Skills.Nature]?: ThingProficiency;
    [Skills.Religion]?: ThingProficiency;
    //Wis
    [Skills.AnimalHandling]?: ThingProficiency;
    [Skills.Insight]?: ThingProficiency;
    [Skills.Medicine]?: ThingProficiency;
    [Skills.Perception]?: ThingProficiency;
    [Skills.Survival]?: ThingProficiency;
    //Cha
    [Skills.Deception]?: ThingProficiency;
    [Skills.Intimidation]?: ThingProficiency;
    [Skills.Performance]?: ThingProficiency;
    [Skills.Persuasion]?: ThingProficiency;
  };
  specialTraits?: SpecialTrait[];
  spellcasting?: Spellcasting[];
  speed: {
    burrow?: number;
    climb?: number;
    hover?: boolean;
    fly?: number;
    flyingRangedAttack?: boolean;
    land?: number;
    swim?: number;
  };
  size: CreatureSize;
  tactics?: string;
  usesAttackBonus: boolean;
};
