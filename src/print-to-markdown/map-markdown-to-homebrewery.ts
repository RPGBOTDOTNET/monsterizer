export const mapMarkdownTextToHomebrewery = (markdown: string): string => {
  const indentedLines = markdown
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
  return `___
___
${indentedLines}`;
};
