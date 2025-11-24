export const Alignments = {
  LawfulGood: "Lawful Good",
  NeutralGood: "Neutral Good",
  ChaoticGood: "Chaotic Good",
  LawfulNeutral: "Lawful Neutral",
  TrueNeutral: "True neutral",
  ChaoticNeutral: "Chaotic Neutral",
  LawfulEvil: "Lawful Evil",
  NeutralEvil: "Neutral Evil",
  ChaoticEvil: "Chaotic Evil",
};
export type Alignment = (typeof Alignments)[keyof typeof Alignments];
