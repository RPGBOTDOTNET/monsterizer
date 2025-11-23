import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { type ReactElement, useState } from "react";
import { TOOLTIP_SETTINGS } from "../formik-prime";
import MONSTER_SRD from "../monster-srd/monsterSRD";
import type { Monster } from "../types";

type BaseMonsterDropdownProps = {
  onChange?: (newVal: Monster) => void;
};

/**
 * This intentionally doesn't use Formik.
 */
export const BaseMonsterDropdown = ({
  onChange,
}: BaseMonsterDropdownProps): ReactElement => {
  const [baseMonster, setBaseMonster] = useState<Monster | null>(null);
  const onChangeHandler = (event: DropdownChangeEvent) => {
    setBaseMonster(event.value);
    if (onChange) onChange(event.value);
  };
  return (
    <>
      <div>
        <span className="p-float-label">
          <Dropdown
            // appendTo={dropdownAppendTarget}
            filter={true}
            filterBy="name"
            options={MONSTER_SRD}
            optionLabel="name"
            onChange={onChangeHandler}
            id="base-monster-dropdown"
            showFilterClear={true}
            tooltip="Select this monster to start from a published monster from the SRD."
            tooltipOptions={TOOLTIP_SETTINGS}
            value={baseMonster}
          />
          <label htmlFor="base-monster-dropdown">Base Monster</label>
        </span>
      </div>
      <p>
        <strong>WARNING</strong>: Changing this dropdown will erase and
        overwrite any existing data.
      </p>
    </>
  );
};

export default BaseMonsterDropdown;
