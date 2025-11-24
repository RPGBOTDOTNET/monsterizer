export type DiceExpression = {
  count: number;
  flatValue?: number;
  positivity: 1 | -1;
  size: number;
};

export type ParsedDiceExpression = {
  modifier: number;
  rolls: DiceExpression[];
};
