import { useFormikContext } from "formik";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { type ReactElement, useState } from "react";
import type { MonsterizerFormData } from "../../types";
import CrCalculations from "../cr-calculations";
import SaveAsPNGButton from "../save-as-png-button";
import { StyledH2 } from "../styled-elements";
import {
  StatblockContent2024,
  StatblockContentBlackFlag,
  StatblockContentClassic,
} from "./stat-block-formats";
import { StatBlockWrapper } from "./styled-elements";

const STAT_BLOCK_FORMATS = {
  CLASSIC: "Classic 5e",
  UPDATED: "Updated 5e",
  2024: "2024 DnD",
  BLACK_FLAG: "Black Flag Roleplaying",
};

export const MonsterizerStatBlock = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [columnClass, setColumnClass] = useState<string>("two-columns");
  const [statBlockFormat, setStatBlockFormat] = useState<
    (typeof STAT_BLOCK_FORMATS)[keyof typeof STAT_BLOCK_FORMATS]
  >(STAT_BLOCK_FORMATS.UPDATED);
  const [styleClass, setStyleClass] = useState<string>("style-default");

  try {
    return (
      <>
        <CrCalculations />
        <StyledH2>Stat Block</StyledH2>
        <div className="grid flex-row justify-content-between align-items-end">
          <span>
            <label htmlFor="stat-block-columns">Stat Block Format</label>
            <Dropdown
              // appendTo={dropdownAppendTarget}
              id="stat-block-format"
              onChange={(event: DropdownChangeEvent) => {
                setStatBlockFormat(event.value);
              }}
              options={[
                {
                  label: "Updated 5e",
                  value: STAT_BLOCK_FORMATS.UPDATED,
                },
                {
                  label: "Classic 5e",
                  value: STAT_BLOCK_FORMATS.CLASSIC,
                },
                { label: "2024 DnD", value: STAT_BLOCK_FORMATS[2024] },
                {
                  label: "Black Flag Roleplaying",
                  value: STAT_BLOCK_FORMATS.BLACK_FLAG,
                },
              ]}
              style={{ width: "150px" }}
              value={statBlockFormat}
            />
          </span>
          <span>
            <label htmlFor="stat-block-columns">Columns</label>
            <Dropdown
              // appendTo={dropdownAppendTarget}
              id="stat-block-columns"
              onChange={(event: DropdownChangeEvent) => {
                setColumnClass(event.value);
              }}
              options={[
                { label: "One (Narrow)", value: "one-column-narrow" },
                { label: "One (Wide)", value: "one-column" },
                { label: "Two Columns", value: "two-columns" },
              ]}
              style={{ width: "175px" }}
              value={columnClass}
            />
          </span>
          <span>
            <label htmlFor="stat-block-columns">Style</label>
            <Dropdown
              // appendTo={dropdownAppendTarget}
              id="stat-block-columns"
              onChange={(event: DropdownChangeEvent) => {
                setStyleClass(event.value);
              }}
              options={[
                { label: "Default", value: "style-default" },
                { label: "Default Red", value: "style-red" },
                { label: "Dark Mode", value: "style-dark-mode" },
                { label: "Stockholm", value: "style-stockholm" },
              ]}
              style={{ width: "200px" }}
              value={styleClass}
            />
          </span>
          <SaveAsPNGButton
            fileName={`${values.monster.name || "monsterizer stat block"}`}
            whatToCaptureId="stat-block-style-parent"
          />
        </div>
        <StatBlockWrapper>
          <div
            id="stat-block-style-parent"
            className={`${columnClass} ${styleClass}`}
          >
            {statBlockFormat === STAT_BLOCK_FORMATS.CLASSIC && (
              <StatblockContentClassic monster={values.monster} />
            )}
            {statBlockFormat === STAT_BLOCK_FORMATS.UPDATED && (
              <StatblockContentBlackFlag monster={values.monster} />
            )}
            {statBlockFormat === STAT_BLOCK_FORMATS[2024] && (
              <StatblockContent2024 monster={values.monster} />
            )}
            {statBlockFormat === STAT_BLOCK_FORMATS.BLACK_FLAG && (
              <StatblockContentBlackFlag monster={values.monster} />
            )}
          </div>
        </StatBlockWrapper>
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default MonsterizerStatBlock;
