import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { InputTextarea } from "primereact/inputtextarea";
import { type ReactElement, useState } from "react";
import {
  abilityModifier,
  hitPoints,
  pactMagicLevel,
  proficiencyBonus,
  savingThrowModifier,
  skillModifier,
  spellcastingLevel,
} from "../../calculators";
import { MONSTERIZER_VERSION } from "../../constants";
import {
  addSymbolToNumber,
  hitPointsLine,
  sensesLine,
  speedLine,
} from "../../string-formatters";
import {
  AbilityScores,
  type CreatureSize,
  type MonsterizerFormData,
  type Skill,
  Skills,
} from "../../types";
import { CopyToClipboardButton } from "../copy-to-clipboard-button";
import { AlignRight } from "../styled-elements";

const sizeToTokenSize: Record<CreatureSize, string> = {
  Tiny: "1",
  Small: "1",
  Medium: "1",
  Large: "2",
  Huge: "3",
  Gargantuan: "4",
};

const EMPTY_ROLL20_CREATURE = {
  ac: "",
  acrobatics_bonus: "",
  acrobatics_roll:
    "@{wtype}&{template:simple} {{rname=^{acrobatics-u}}} {{mod=@{acrobatics_bonus}}} {{r1=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  animal_handling_bonus: "",
  animal_handling_roll:
    "@{wtype}&{template:simple} {{rname=^{animal_handling-u}}} {{mod=@{animal_handling_bonus}}} {{r1=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  appliedUpdates:
    "upgrade_to_4_2_1,fix_npc_missing_attack_display_flag_attribute,fix_npc_version_number,fix_npcs_in_modules_saves_and_ability_mods,fix_spell_attacks,fix_npc_in_modules_triggering_popup,fix_npc_actions_to_support_translation,fix_pc_skill_and_saving_rolls,fix_pc_saving_rolls,fix_pc_skill_and_saving_rolls_with_expertise,fix_pc_skill_and_saving_rolls_with_reliable_talent,fix_npc_attacks,fix_npc_attacks_with_auto_damage_roll,enable_powerful_build_on_existing_characters,fix_pc_global_critical_damage_rolls,fix_npc_actions_with_damage,fix_pc_global_critical_stacked_damage_rolls,fix_npc_charname_output,fix_pc_skill_rolls_tooltips,fix_pc_global_statical_critical_damage,fix_spell_school_ouput,fix_advantage_query",
  arcana_bonus: "",
  arcana_roll:
    "@{wtype}&{template:simple} {{rname=^{arcana-u}}} {{mod=@{arcana_bonus}}} {{r1=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  armorwarningflag: "hide",
  athletics_bonus: "",
  athletics_roll:
    "@{wtype}&{template:simple} {{rname=^{athletics-u}}} {{mod=@{athletics_bonus}}} {{r1=[[@{d20}+1[strength]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+1[strength]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  caster_level: "",
  charisma: "",
  charisma_base: "",
  charisma_flag: "",
  charisma_mod: "",
  charisma_save_bonus: "",
  charisma_save_roll:
    "@{wtype}&{template:simple} {{rname=^{charisma-save-u}}} {{mod=@{charisma_save_bonus}}} {{r1=[[@{d20}+@{charisma_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{charisma_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  charname_output: "{{charname=@{npc_name}}}",
  constitution: "",
  constitution_base: "",
  constitution_flag: "",
  constitution_mod: "",
  constitution_save_bonus: "",
  constitution_save_roll:
    "@{wtype}&{template:simple} {{rname=^{constitution-save-u}}} {{mod=@{constitution_save_bonus}}} {{r1=[[@{d20}+@{constitution_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{constitution_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  customacwarningflag: "hide",
  death_save_bonus: "",
  death_save_roll:
    "@{wtype}&{template:simple} {{rname=^{death-save-u}}} {{mod=@{death_save_bonus}}} {{r1=[[@{d20}+@{death_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{death_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  deception_bonus: "",
  deception_roll:
    "@{wtype}&{template:simple} {{rname=^{deception-u}}} {{mod=@{deception_bonus}}} {{r1=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  dexterity: "",
  dexterity_base: "",
  dexterity_flag: "",
  dexterity_mod: "",
  dexterity_save_bonus: "",
  dexterity_save_roll:
    "@{wtype}&{template:simple} {{rname=^{dexterity-save-u}}} {{mod=@{dexterity_save_bonus}}} {{r1=[[@{d20}+@{dexterity_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{dexterity_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  drop_category: "",
  drop_content: "",
  drop_data: "",
  drop_name: "",
  encumberance: " ",
  global_damage_mod_crit: "",
  global_damage_mod_roll: "",
  global_damage_mod_type: "",
  globalmagicmod: "0",
  history_bonus: "",
  history_roll:
    "@{wtype}&{template:simple} {{rname=^{history-u}}} {{mod=@{history_bonus}}} {{r1=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  hitdieroll: "",
  honor_save_bonus: "0",
  honor_save_roll:
    "@{wtype}&{template:simple} {{rname=^{honor-save-u}}} {{mod=@{honor_save_bonus}}} {{r1=[[@{d20}+@{honor_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{honor_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  hp: "",
  initiative_bonus: "",
  insight_bonus: "",
  insight_roll:
    "@{wtype}&{template:simple} {{rname=^{insight-u}}} {{mod=@{insight_bonus}}} {{r1=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  intelligence: "",
  intelligence_base: "",
  intelligence_flag: "0",
  intelligence_mod: "",
  intelligence_save_bonus: "",
  intelligence_save_roll:
    "@{wtype}&{template:simple} {{rname=^{intelligence-save-u}}} {{mod=@{intelligence_save_bonus}}} {{r1=[[@{d20}+@{intelligence_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{intelligence_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  intimidation_bonus: "",
  intimidation_roll:
    "@{wtype}&{template:simple} {{rname=^{intimidation-u}}} {{mod=@{intimidation_bonus}}} {{r1=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  invalidXP: "0",
  investigation_bonus: "",
  investigation_roll:
    "@{wtype}&{template:simple} {{rname=^{investigation-u}}} {{mod=@{investigation_bonus}}} {{r1=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  jack: "1",
  jack_attr: "",
  jack_bonus: "",
  l1mancer_status: "completed",
  medicine_bonus: "",
  medicine_roll:
    "@{wtype}&{template:simple} {{rname=^{medicine-u}}} {{mod=@{medicine_bonus}}} {{r1=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  nature_bonus: "",
  nature_roll:
    "@{wtype}&{template:simple} {{rname=^{nature-u}}} {{mod=@{nature_bonus}}} {{r1=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  npc: "1",
  npc_ac: "",
  npc_acrobatics: "",
  npc_acrobatics_base: "",
  npc_acrobatics_flag: "0",
  npc_actype: "",
  npc_animal_handling: "",
  npc_animal_handling_base: "",
  npc_animal_handling_flag: "0",
  npc_arcana: "",
  npc_arcana_base: "",
  npc_arcana_flag: "0",
  npc_athletics: "",
  npc_athletics_base: "",
  npc_athletics_flag: "0",
  npc_cha_negative: "",
  npc_cha_save: "",
  npc_cha_save_base: "",
  npc_cha_save_flag: "0",
  npc_challenge: "1/4",
  npc_con_negative: "0",
  npc_con_save: "",
  npc_con_save_base: "",
  npc_con_save_flag: "0",
  npc_condition_immunities: "",
  npc_deception: "",
  npc_deception_base: "",
  npc_deception_flag: "0",
  npc_dex_negative: "",
  npc_dex_save: "",
  npc_dex_save_base: "",
  npc_dex_save_flag: "0",
  npc_history: "",
  npc_history_base: "",
  npc_history_flag: "0",
  npc_hpformula: "",
  npc_immunities: "",
  npc_insight: "",
  npc_insight_base: "",
  npc_insight_flag: "0",
  npc_int_negative: "0",
  npc_int_save: "",
  npc_int_save_base: "",
  npc_int_save_flag: "0",
  npc_intimidation: "",
  npc_intimidation_base: "",
  npc_intimidation_flag: "0",
  npc_investigation: "",
  npc_investigation_base: "",
  npc_investigation_flag: "0",
  npc_languages: "",
  npc_legendary_actions: "0",
  npc_legendary_actions_desc: "",
  npc_medicine: "",
  npc_medicine_base: "",
  npc_medicine_flag: "0",
  npc_mythic_actions: "0",
  npc_mythic_actions_desc: "",
  npc_name: "",
  npc_nature: "",
  npc_nature_base: "",
  npc_nature_flag: "0",
  "npc_options-flag": "0",
  npc_perception: "",
  npc_perception_base: "",
  npc_perception_flag: "0",
  npc_performance: "",
  npc_performance_base: "",
  npc_performance_flag: "0",
  npc_persuasion: "",
  npc_persuasion_base: "",
  npc_persuasion_flag: "0",
  npc_religion: "",
  npc_religion_base: "",
  npc_religion_flag: "0",
  npc_resistances: "",
  npc_saving_flag: "0",
  npc_senses: "",
  npc_skills_flag: "",
  npc_sleight_of_hand: "",
  npc_sleight_of_hand_base: "",
  npc_sleight_of_hand_flag: "0",
  npc_speed: "",
  npc_stealth: "",
  npc_stealth_base: "",
  npc_stealth_flag: "0",
  npc_str_negative: "0",
  npc_str_save: "",
  npc_str_save_base: "",
  npc_str_save_flag: "0",
  npc_survival: "",
  npc_survival_base: "",
  npc_survival_flag: "0",
  npc_type: "",
  npc_vulnerabilities: "",
  npc_wis_negative: "1",
  npc_wis_save: "0",
  npc_wis_save_base: "+0",
  npc_wis_save_flag: "0",
  npc_xp: "",
  npcreactionsflag: "0",
  npcspellcastingflag: "0",
  passive_wisdom: "",
  pb: "",
  pb_custom: "",
  pb_type: "",
  pbd_safe: "",
  perception_bonus: "",
  perception_roll:
    "@{wtype}&{template:simple} {{rname=^{perception-u}}} {{mod=@{perception_bonus}}} {{r1=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  performance_bonus: "",
  performance_roll:
    "@{wtype}&{template:simple} {{rname=^{performance-u}}} {{mod=@{performance_bonus}}} {{r1=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  persuasion_bonus: "",
  persuasion_roll:
    "@{wtype}&{template:simple} {{rname=^{persuasion-u}}} {{mod=@{persuasion_bonus}}} {{r1=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-3[charisma]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  queryadvantage:
    "{{query=1}} ?{Advantage?|Normal Roll,&#123&#123normal=1&#125&#125 &#123&#123r2=[[0d20|Advantage,&#123&#123advantage=1&#125&#125 &#123&#123r2=[[@{d20}|Disadvantage,&#123&#123disadvantage=1&#125&#125 &#123&#123r2=[[@{d20}}",
  religion_bonus: "",
  religion_roll:
    "@{wtype}&{template:simple} {{rname=^{religion-u}}} {{mod=@{religion_bonus}}} {{r1=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-4[intelligence]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  sanity_save_bonus: "",
  sanity_save_roll:
    "@{wtype}&{template:simple} {{rname=^{sanity-save-u}}} {{mod=@{sanity_save_bonus}}} {{r1=[[@{d20}+@{sanity_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{sanity_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  showleveler: "0",
  sleight_of_hand_bonus: "",
  sleight_of_hand_roll:
    "@{wtype}&{template:simple} {{rname=^{sleight_of_hand-u}}} {{mod=@{sleight_of_hand_bonus}}} {{r1=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  spell_attack_bonus: "0",
  spell_dc_mod: "0",
  spell_save_dc: "0",
  spellcasting_ability: "0*",
  stealth_bonus: "-2",
  stealth_roll:
    "@{wtype}&{template:simple} {{rname=^{stealth-u}}} {{mod=@{stealth_bonus}}} {{r1=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[dexterity]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  strength: "",
  strength_base: "",
  strength_flag: "0",
  strength_mod: "",
  strength_save_bonus: "",
  strength_save_roll:
    "@{wtype}&{template:simple} {{rname=^{strength-save-u}}} {{mod=@{strength_save_bonus}}} {{r1=[[@{d20}+@{strength_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{strength_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  survival_bonus: "",
  survival_roll:
    "@{wtype}&{template:simple} {{rname=^{survival-u}}} {{mod=@{survival_bonus}}} {{r1=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+-2[wisdom]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}",
  token_size: "",
  ui_flags: "",
  version: `Monsterizer v${MONSTERIZER_VERSION}`,
  weighttotal: "",
  wisdom: "",
  wisdom_base: "",
  wisdom_flag: "0",
  wisdom_mod: "",
  wisdom_save_bonus: "",
  wisdom_save_roll:
    "@{wtype}&{template:simple} {{rname=^{wisdom-save-u}}} {{mod=@{wisdom_save_bonus}}} {{r1=[[@{d20}+@{wisdom_save_bonus}@{pbd_safe}]]}} {{always=1}} {{r2=[[@{d20}+@{wisdom_save_bonus}@{pbd_safe}]]}} {{global=@{global_save_mod}}} @{charname_output}",
  wtype: "/w gm ",
};

type Roll20CreatureProps = typeof EMPTY_ROLL20_CREATURE;

const roll20ExportArea: string = "roll20-exportArea";
export const Roll20Export = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  const getSkillMod = (skill: Skill): string =>
    addSymbolToNumber(skillModifier(values.monster, skill));
  const getSkillFlag = (): "1" | "0" => {
    const anySkill = Object.values(values.monster.skills).find((skill) => {
      return skill.proficient || skill.additionalBonus;
    });
    return anySkill ? "1" : "0";
  };

  const monster: Roll20CreatureProps = {
    ...EMPTY_ROLL20_CREATURE,
    ac: values.monster.ac.toLocaleString(),
    acrobatics_bonus: proficiencyBonus(values.monster).toString(),
    animal_handling_bonus: proficiencyBonus(values.monster).toString(),
    arcana_bonus: proficiencyBonus(values.monster).toString(),
    armorwarningflag: values.monster.acNotes || "",
    athletics_bonus: proficiencyBonus(values.monster).toString(),
    caster_level: (
      spellcastingLevel(values.monster) ||
      pactMagicLevel(values.monster) ||
      0
    ).toString(),
    charisma: values.monster.abilityScores.Charisma.toString(),
    charisma_base: values.monster.abilityScores.Charisma.toString(),
    charisma_mod: abilityModifier(
      values.monster.abilityScores.Charisma,
    ).toString(),
    charisma_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Charisma,
    ).toString(),
    constitution: values.monster.abilityScores.Constitution.toString(),
    constitution_base: values.monster.abilityScores.Constitution.toString(),
    constitution_mod: abilityModifier(
      values.monster.abilityScores.Constitution,
    ).toString(),
    constitution_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Constitution,
    ).toString(),
    deception_bonus: proficiencyBonus(values.monster).toString(),
    dexterity: values.monster.abilityScores.Dexterity.toString(),
    dexterity_base: values.monster.abilityScores.Dexterity.toString(),
    dexterity_mod: abilityModifier(
      values.monster.abilityScores.Dexterity,
    ).toString(),
    dexterity_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Dexterity,
    ).toString(),
    history_bonus: proficiencyBonus(values.monster).toString(),
    hitdieroll: "", // TODO: I don't know what this does
    hp: hitPoints(values.monster).toString(),
    initiative_bonus: abilityModifier(
      values.monster.abilityScores.Dexterity,
    ).toString(),
    insight_bonus: proficiencyBonus(values.monster).toString(),
    intelligence: values.monster.abilityScores.Intelligence.toString(),
    intelligence_base: values.monster.abilityScores.Intelligence.toString(),
    intelligence_mod: abilityModifier(
      values.monster.abilityScores.Intelligence,
    ).toString(),
    intelligence_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Intelligence,
    ).toString(),
    intimidation_bonus: proficiencyBonus(values.monster).toString(),
    investigation_bonus: proficiencyBonus(values.monster).toString(),
    medicine_bonus: proficiencyBonus(values.monster).toString(),
    nature_bonus: proficiencyBonus(values.monster).toString(),
    npc_ac: values.monster.ac.toString(),
    npc_acrobatics: getSkillMod(Skills.Acrobatics),
    npc_acrobatics_base: getSkillMod(Skills.Acrobatics),
    npc_acrobatics_flag: values.monster.skills.Acrobatics?.proficient
      ? "1"
      : "0",
    npc_actype: values.monster.acNotes || "",
    npc_animal_handling: getSkillMod(Skills.AnimalHandling),
    npc_animal_handling_base: getSkillMod(Skills.AnimalHandling),
    npc_animal_handling_flag: values.monster.skills["Animal Handling"]
      ?.proficient
      ? "1"
      : "0",
    npc_arcana: getSkillMod(Skills.Arcana),
    npc_arcana_base: getSkillMod(Skills.Arcana),
    npc_arcana_flag: values.monster.skills.Arcana?.proficient ? "1" : "0",
    npc_athletics: getSkillMod(Skills.Athletics),
    npc_athletics_base: getSkillMod(Skills.Athletics),
    npc_athletics_flag: values.monster.skills.Athletics?.proficient ? "1" : "0",
    npc_cha_negative: values.monster.abilityScores.Charisma < 10 ? "1" : "0",
    npc_cha_save: savingThrowModifier(
      values.monster,
      AbilityScores.Charisma,
    ).toString(),
    npc_cha_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Charisma,
    ).toString(),
    npc_cha_save_flag:
      values.monster.savingThrows.Charisma?.proficient ||
      values.monster.savingThrows.Charisma?.additionalBonus
        ? "1"
        : "0",
    npc_challenge: values.monster.challenge,
    npc_con_negative:
      values.monster.abilityScores.Constitution < 10 ? "1" : "0",
    npc_con_save: savingThrowModifier(
      values.monster,
      AbilityScores.Constitution,
    ).toString(),
    npc_con_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Constitution,
    ).toString(),
    npc_con_save_flag:
      values.monster.savingThrows.Constitution?.proficient ||
      values.monster.savingThrows.Constitution?.additionalBonus
        ? "1"
        : "0",
    npc_condition_immunities:
      values.monster.conditionImmunities?.join(", ") || "",
    npc_deception: getSkillMod(Skills.Deception),
    npc_deception_base: getSkillMod(Skills.Deception),
    npc_deception_flag: values.monster.skills.Deception?.proficient ? "1" : "0",
    npc_dex_negative: values.monster.abilityScores.Dexterity < 10 ? "1" : "0",
    npc_dex_save: savingThrowModifier(
      values.monster,
      AbilityScores.Dexterity,
    ).toString(),
    npc_dex_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Dexterity,
    ).toString(),
    npc_dex_save_flag:
      values.monster.savingThrows.Dexterity?.proficient ||
      values.monster.savingThrows.Dexterity?.additionalBonus
        ? "1"
        : "0",
    npc_history: getSkillMod(Skills.History),
    npc_history_base: getSkillMod(Skills.History),
    npc_history_flag: values.monster.skills.History?.proficient ? "1" : "0",
    npc_hpformula: hitPointsLine(values.monster),
    npc_immunities: values.monster.damageImmunities?.join(", ") || "",
    npc_insight: getSkillMod(Skills.Insight),
    npc_insight_base: getSkillMod(Skills.Insight),
    npc_insight_flag: values.monster.skills.Insight?.proficient ? "1" : "0",
    npc_int_negative:
      values.monster.abilityScores.Intelligence < 10 ? "1" : "0",
    npc_int_save: savingThrowModifier(
      values.monster,
      AbilityScores.Intelligence,
    ).toString(),
    npc_int_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Intelligence,
    ).toString(),
    npc_int_save_flag:
      values.monster.savingThrows.Intelligence?.proficient ||
      values.monster.savingThrows.Intelligence?.additionalBonus
        ? "1"
        : "0",
    npc_intimidation: getSkillMod(Skills.Intimidation),
    npc_intimidation_base: getSkillMod(Skills.Intimidation),
    npc_intimidation_flag: values.monster.skills.Intimidation?.proficient
      ? "1"
      : "0",
    npc_investigation: getSkillMod(Skills.Investigation),
    npc_investigation_base: getSkillMod(Skills.Investigation),
    npc_investigation_flag: values.monster.skills.Investigation?.proficient
      ? "1"
      : "0",
    npc_languages: values.monster.languages,
    npc_legendary_actions:
      values.monster.legendaryActionsCount?.toString() || "0",
    npc_legendary_actions_desc: "",
    npc_medicine: getSkillMod(Skills.Medicine),
    npc_medicine_base: getSkillMod(Skills.Medicine),
    npc_medicine_flag: values.monster.skills.Medicine?.proficient ? "1" : "0",
    npc_name: values.monster.name,
    npc_nature: getSkillMod(Skills.Nature),
    npc_nature_base: getSkillMod(Skills.Nature),
    npc_nature_flag: values.monster.skills.Nature?.proficient ? "1" : "0",
    npc_perception: getSkillMod(Skills.Perception),
    npc_perception_base: getSkillMod(Skills.Perception),
    npc_perception_flag: values.monster.skills.Perception?.proficient
      ? "1"
      : "0",
    npc_performance: getSkillMod(Skills.Performance),
    npc_performance_base: getSkillMod(Skills.Performance),
    npc_performance_flag: values.monster.skills.Performance?.proficient
      ? "1"
      : "0",
    npc_persuasion: getSkillMod(Skills.Persuasion),
    npc_persuasion_base: getSkillMod(Skills.Persuasion),
    npc_persuasion_flag: values.monster.skills.Persuasion?.proficient
      ? "1"
      : "0",
    npc_religion: getSkillMod(Skills.Religion),
    npc_religion_base: getSkillMod(Skills.Religion),
    npc_religion_flag: values.monster.skills.Religion?.proficient ? "1" : "0",
    npc_resistances: values.monster.damageResistances?.join(", ") || "",
    npc_senses: sensesLine(values.monster),
    npc_skills_flag: getSkillFlag(),
    npc_sleight_of_hand: getSkillMod(Skills.SleightOfHand),
    npc_sleight_of_hand_base: getSkillMod(Skills.SleightOfHand),
    npc_sleight_of_hand_flag: values.monster.skills["Sleight of Hand"]
      ?.proficient
      ? "1"
      : "0",
    npc_speed: speedLine(values.monster),
    npc_stealth: getSkillMod(Skills.Stealth),
    npc_stealth_base: getSkillMod(Skills.Stealth),
    npc_stealth_flag: values.monster.skills.Stealth?.proficient ? "1" : "0",
    npc_str_negative: values.monster.abilityScores.Strength < 10 ? "1" : "0",
    npc_str_save: savingThrowModifier(
      values.monster,
      AbilityScores.Strength,
    ).toString(),
    npc_str_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Strength,
    ).toString(),
    npc_str_save_flag:
      values.monster.savingThrows.Strength?.proficient ||
      values.monster.savingThrows.Strength?.additionalBonus
        ? "1"
        : "0",
    npc_survival: getSkillMod(Skills.Survival),
    npc_survival_base: getSkillMod(Skills.Survival),
    npc_survival_flag: values.monster.skills.Survival?.proficient ? "1" : "0",
    npc_type: "Medium undead, neutral evil",
    npc_vulnerabilities: values.monster.damageVulnerabilities?.join(", ") || "",
    npc_wis_negative: values.monster.abilityScores.Wisdom < 10 ? "1" : "0",
    npc_wis_save: savingThrowModifier(
      values.monster,
      AbilityScores.Wisdom,
    ).toString(),
    npc_wis_save_base: savingThrowModifier(
      values.monster,
      AbilityScores.Wisdom,
    ).toString(),
    npc_wis_save_flag:
      values.monster.savingThrows.Wisdom?.proficient ||
      values.monster.savingThrows.Wisdom?.additionalBonus
        ? "1"
        : "0",
    npcreactionsflag: values.monster.reactions.length ? "1" : "0",
    npcspellcastingflag:
      values.monster.spellcasting?.length || !!values.monster.innateSpellcasting
        ? "1"
        : "0",
    passive_wisdom:
      10 + abilityModifier(values.monster.abilityScores.Wisdom).toString(),
    pb: proficiencyBonus(values.monster).toString(),
    pb_custom: proficiencyBonus(values.monster).toString(),
    perception_bonus: getSkillMod(Skills.Perception),
    performance_bonus: getSkillMod(Skills.Performance),
    persuasion_bonus: getSkillMod(Skills.Persuasion),
    religion_bonus: getSkillMod(Skills.Religion),
    sleight_of_hand_bonus: getSkillMod(Skills.SleightOfHand),
    spell_attack_bonus:
      values.monster.spellcasting?.length &&
      values.monster.spellcasting[0]?.spellAttack
        ? values.monster.spellcasting[0].spellAttack.toString()
        : "0",
    spell_dc_mod:
      values.monster.spellcasting?.length &&
      values.monster.spellcasting[0]?.spellcastingAbility
        ? abilityModifier(
            values.monster.abilityScores[
              values.monster.spellcasting[0].spellcastingAbility
            ],
          ).toString()
        : "0*",
    spell_save_dc:
      values.monster.spellcasting?.length &&
      values.monster.spellcasting[0]?.spellDc
        ? values.monster.spellcasting[0].spellDc.toString()
        : "0",
    spellcasting_ability:
      values.monster.spellcasting?.length &&
      values.monster.spellcasting[0]?.spellcastingAbility
        ? values.monster.spellcasting[0].spellcastingAbility
        : "0*",
    stealth_bonus: getSkillMod(Skills.Stealth),
    strength: values.monster.abilityScores.Strength.toString(),
    strength_base: values.monster.abilityScores.Strength.toString(),
    strength_flag: "0", // TODO: I don't know what this does
    strength_mod: abilityModifier(
      values.monster.abilityScores.Strength,
    ).toString(),
    strength_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Strength,
    ).toString(),
    survival_bonus: getSkillMod(Skills.Survival),
    token_size: sizeToTokenSize[values.monster.size],
    wisdom: values.monster.abilityScores.Wisdom.toString(),
    wisdom_base: values.monster.abilityScores.Wisdom.toString(),
    wisdom_flag: "0", // TODO: I don't know what this does
    wisdom_mod: abilityModifier(values.monster.abilityScores.Wisdom).toString(),
    wisdom_save_bonus: savingThrowModifier(
      values.monster,
      AbilityScores.Wisdom,
    ).toString(),
  };
  const commandText: string = `createObj('character', ${JSON.stringify(
    monster,
    null,
    2,
  )});`;

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Export to Roll20 (BETA)"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        Note that this requires a Roll20 Pro subscription so that you have
        access to the Roll20 APIs.&nbsp;
        <a
          href="https://help.roll20.net/hc/en-us/articles/360046238454-How-to-Install-API-Scripts-via-1-Click-Install"
          target="_blank"
        >
          These instructions
        </a>
        may be helpful.
      </p>
      <p>
        I have no idea if this works! If you have any experience with the Roll20
        APIs and want to help me sort this out, please&nbsp;
        <a href="mailto:RPGBOT@RPGBOT.net" target="_blank">
          email me
        </a>
        .
      </p>
      <AlignRight>
        <CopyToClipboardButton whatToCopy={commandText} />
      </AlignRight>
      <InputTextarea
        id={roll20ExportArea}
        readOnly={true}
        style={{ resize: "vertical" }}
        value={commandText}
      />
    </Fieldset>
  );
};

export default Roll20Export;
