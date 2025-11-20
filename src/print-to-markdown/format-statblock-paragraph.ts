export const formatStatblockParagraph = (
  name: string | undefined,
  descriptionMarkdown: string | undefined,
): string => {
  if (!name || !descriptionMarkdown) return "";
  return `***${name}***. ${descriptionMarkdown}`;
};

export default formatStatblockParagraph;
