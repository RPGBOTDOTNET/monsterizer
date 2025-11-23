import { useFormikContext } from "formik";
import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { type ReactElement, useState } from "react";
import { EMPTY_MONSTER } from "../../constants";
import type { MonsterizerFormData } from "../../types";
import { AlignRight, StyledH3 } from "../styled-elements";
import parseImportData from "./parse-import-data";

export const ImportMonster = (): ReactElement => {
  const { setValues, values } = useFormikContext<MonsterizerFormData>();
  const [importData, setImportData] = useState<string>("");
  const [importError, setImportError] = useState<string>("");
  const [importSuccessful, setimportSuccessful] = useState<boolean>(false);

  const handleImport = () => {
    setImportError("");
    try {
      const parsedImportData = parseImportData(importData, EMPTY_MONSTER);
      setValues({
        ...values,
        monster: parsedImportData,
      });
      setImportData("");
      setimportSuccessful(true);
      const timeout = setTimeout(() => {
        setimportSuccessful(false);
        clearTimeout(timeout);
      }, 3000);
    } catch (e) {
      setImportError((e as Error).message);
      setimportSuccessful(false);
    }
  };

  return (
    <>
      <StyledH3>Import Monsterizer JSON Data</StyledH3>
      <div style={{ marginTop: "10px" }}>
        <label>Import Monster</label>
        <p>
          Need to pick up where you left off? Want to look at someone else's
          Monsterizer creation? Paste the export data into the field below and
          click "Import".
        </p>
        <InputTextarea
          onChange={(event) => {
            setImportData(event.target.value);
          }}
          style={{ resize: "vertical" }}
          value={importData}
        />
        <AlignRight>
          <Button
            disabled={!importData}
            icon={importSuccessful ? `pi ${PrimeIcons.CHECK}` : ""}
            onClick={handleImport}
            label="Import"
            type="button"
          />
        </AlignRight>
        {importError && (
          <p className="flex-grow-1">
            <strong>Error:</strong> {importError}
          </p>
        )}
      </div>
    </>
  );
};

export default ImportMonster;
