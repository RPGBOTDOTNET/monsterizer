export const RestTypes = {
  Long: "Long Rest",
  Short: "Short Rest",
} as const;

export type RestType = (typeof RestTypes)[keyof typeof RestTypes];
