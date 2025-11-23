import { Steps, type StepsProps } from "primereact/steps";
import { type ReactElement } from "react";
import styled from "styled-components";

const StepsWrapper = styled.div`
  display: block;
  overflow-x: auto;
  width: 100%;

  .p-steps .p-steps-item .p-menuitem-link,
  .p-steps .p-steps-item .p-menuitem-link .p-steps-title,
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    color: inherit;
  }
`;

export const WrappedSteps = (props: StepsProps): ReactElement => {
  return (
    <StepsWrapper>
      <Steps {...props} />
    </StepsWrapper>
  );
};

export default WrappedSteps;
