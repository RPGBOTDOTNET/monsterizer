import styled from "styled-components";

export const ResponsesTable = styled.table`
  max-width: 100%;
  overflow: auto;
  table-layout: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  td,
  th {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
