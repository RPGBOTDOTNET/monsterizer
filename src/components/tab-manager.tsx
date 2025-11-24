import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, type ReactNode, useState } from "react";
import styled from "styled-components";
import WrappedSteps from "./wrapped-steps";

export type TabManagerItem = {
  component: ReactNode;
  label: string;
};

export type TabManagerProps = {
  items: TabManagerItem[];
};

const stepsControlId = "tab-manager-steps";
const scrollToSteps = () => {
  const stepsElement = document.getElementById(stepsControlId);
  if (stepsElement) {
    scrollTo(stepsElement.offsetLeft, stepsElement.offsetTop);
  }
};

const WrapperDiv = styled.div`
  display: contents;

  .p-fieldset-content {
    *:last-child {
      margin-bottom: 0;
    }
    *:first-child {
      margin-top: 0;
    }
  }
`;

export const TabManager = ({ items }: TabManagerProps): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeComponent: ReactNode =
    typeof items[activeIndex] !== "undefined" ? (
      items[activeIndex].component
    ) : (
      <p>Something went wrong.</p>
    );

  return (
    <>
      {items && items.length > 1 && (
        <WrappedSteps
          activeIndex={activeIndex}
          id={stepsControlId}
          model={items}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
          style={{ fontSize: "13px" }}
        />
      )}
      <WrapperDiv>
        <Fieldset>
          {activeComponent}
          {items && items.length > 1 && (
            <div
              className="grid flex-row justify-content-between align-items-end"
              style={{ margin: "0", width: "100%" }}
            >
              <Button
                disabled={activeIndex <= 0}
                label="Previous"
                onClick={() => {
                  setActiveIndex(Math.max(activeIndex - 1, 0));
                  scrollToSteps();
                }}
                style={{ width: "auto" }}
                type="button"
              />
              <Button
                disabled={activeIndex >= items.length - 1}
                label="Next"
                onClick={() => {
                  setActiveIndex(Math.max(activeIndex + 1, 0));
                  scrollToSteps();
                }}
                style={{ width: "auto" }}
                type="button"
              />
            </div>
          )}
        </Fieldset>
      </WrapperDiv>
    </>
  );
};

export default TabManager;
