import { Form, Formik } from "formik";
import { noop } from "lodash";
import type { ReactElement } from "react";
import {
  MonsterizerActions,
  MonsterizerBasics,
  MonsterizerDefenses,
  MonsterizerExport,
  MonsterizerExtras,
  MonsterizerIntro,
  MonsterizerSpellcasting,
  MonsterizerStatBlock,
} from "./components";
import TabManager, { type TabManagerItem } from "./components/tab-manager";
import {
  EMPTY_CONDITION_MODEL,
  EMPTY_DAMAGE_MODEL,
  EMPTY_MONSTER,
} from "./constants";
import type { MonsterizerFormData } from "./types";

const EMPTY_MONSTERIZER_MODEL: MonsterizerFormData = {
  conditionModel: EMPTY_CONDITION_MODEL,
  damageModel: EMPTY_DAMAGE_MODEL,
  monster: EMPTY_MONSTER,
};

export const Monsterizer = (): ReactElement => {
  const interactiveItems: Array<TabManagerItem> = [
    {
      label: "Intro",
      component: <MonsterizerIntro />,
    },
    {
      label: "Basics",
      component: <MonsterizerBasics />,
    },
    {
      label: "Defenses",
      component: <MonsterizerDefenses />,
    },
    {
      label: "Actions",
      component: <MonsterizerActions />,
    },
    {
      label: "Spellcasting",
      component: <MonsterizerSpellcasting />,
    },
    {
      label: "Extras",
      component: <MonsterizerExtras />,
    },
    {
      label: "Stat Block",
      component: <MonsterizerStatBlock />,
    },
    {
      label: "Export",
      component: <MonsterizerExport />,
    },
  ];

  return (
    <Formik initialValues={EMPTY_MONSTERIZER_MODEL} onSubmit={noop}>
      <Form className="p-fluid">
        <TabManager items={interactiveItems} />
      </Form>
    </Formik>
  );
};

export default Monsterizer;
