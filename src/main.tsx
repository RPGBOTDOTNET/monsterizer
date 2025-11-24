import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Monsterizer from "./monsterizer.tsx";

import "primeflex/primeflex.css";
import "primeicons/fonts/primeicons.eot";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Monsterizer />
  </StrictMode>,
);
