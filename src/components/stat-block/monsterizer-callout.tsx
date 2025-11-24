import { type ReactElement } from "react";

export const MonsterizerCallout = (): ReactElement => (
  <p style={{ fontSize: "10px" }}>
    <em>
      <a
        href="https://RPGBOT.net/dnd5/tools/monsterizer"
        style={{ color: "inherit" }}
      >
        Created in the Monsterizer
      </a>
      .
    </em>
  </p>
);

export default MonsterizerCallout;
