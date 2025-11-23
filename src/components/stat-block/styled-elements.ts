import styled from "styled-components";

const statBlockRed = "#9b2818";

export const StatBlockWrapper = styled.div`
  #stat-block-style-parent {
    margin: 0 auto;
    padding: 20px;

    table {
      td,
      th {
        padding: initial;
      }
    }

    &.one-column-narrow {
      margin: 0 auto;
      width: 400px;
    }

    &.two-columns {
      columns: 2 auto;
      orphans: 10;

      > * {
        break-inside: avoid;
      }
    }

    &.style-dark-mode {
      background: #101010;
      color: white;
      font-family: Roboto, Helvetica, sans-serif;

      h2,
      h3 {
        color: inherit;
      }

      hr {
        border-color: currentColor;
      }
    }

    &.style-default {
      background: white;
      color: black;
      font-family: Roboto, Helvetica, sans-serif;

      h2,
      h3 {
        color: inherit;
      }

      hr {
        border-color: black;
      }
    }

    &.style-red {
      background: white;
      color: initial;
      font-family: Roboto, Helvetica, sans-serif;

      h2,
      h3 {
        color: ${statBlockRed};
      }

      hr {
        border-color: ${statBlockRed};
      }

      table {
        color: ${statBlockRed};
      }
    }

    &.style-stockholm {
      background: #ffe82c;
      color: black;
      font-family: monospace, Roboto, sans-serif;

      h2 {
        color: inherit;
        font-family: Fantasy, Serif;
      }

      h3 {
        color: inherit;
      }

      hr {
        border-color: black;
      }
    }
  }
`;

export const StatBlockHeader = styled.h2`
  margin: 0;
`;
export const StatBlockSubHeader = styled.h3`
  border-bottom: 1px solid;
`;

// border-color: ${statBlockRed};
export const StyledHR = styled.hr`
  border-width: 0 0 3px 0;
  margin: initial;
  width: 100%;
`;

export const StyledTable = styled.table`
  background: initial;
  border: initial;
  font-size: initial;
  margin: 10px 0;
  width: 100%;

  thead {
    background: initial;
    border: initial;
    margin-bottom: initial;
    text-align: initial;
  }
`;

export const AbilityScoreTable = styled.table`
  background: initial;
  border: initial;
  font-size: initial;
  margin: 10px 0;
  width: calc(100% - 20px);

  thead {
    background: initial;
    border: initial;
    margin-bottom: initial;
    text-align: initial;
  }

  td,
  td {
    padding: 3px 0;
    text-align: center;
  }
`;
