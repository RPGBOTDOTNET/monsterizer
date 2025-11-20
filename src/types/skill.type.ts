export const Skills = {
  Athletics: "Athletics",
  //Dex
  Acrobatics: "Acrobatics",
  SleightOfHand: "Sleight of Hand",
  Stealth: "Stealth",
  //Int
  Arcana: "Arcana",
  History: "History",
  Investigation: "Investigation",
  Nature: "Nature",
  Religion: "Religion",
  //Wis
  AnimalHandling: "Animal Handling",
  Insight: "Insight",
  Medicine: "Medicine",
  Perception: "Perception",
  Survival: "Survival",
  //Cha
  Deception: "Deception",
  Intimidation: "Intimidation",
  Performance: "Performance",
  Persuasion: "Persuasion",
} as const;

export type Skill = (typeof Skills)[keyof typeof Skills];
