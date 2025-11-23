import { type ReactElement } from "react";

export const MarkdownTooltip = (): ReactElement => {
  return (
    <p>
      The multi-line fields below support Markdown. For help, see&nbsp;
      <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
        this handy cheetsheat
      </a>
      .
    </p>
  );
};

export default MarkdownTooltip;
