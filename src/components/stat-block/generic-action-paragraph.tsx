import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Action, LairAction } from "../../types";

export const GenericActionParagraph = ({
  action,
}: {
  action: Action | LairAction;
}): ReactElement => {
  return (
    <p>
      <Markdown>
        {`***${action.name.trim()}.*** ${action.description.trim()}`}
      </Markdown>
    </p>
  );
};

export default GenericActionParagraph;
