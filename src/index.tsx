import { render } from "preact";
import { StrictMode } from "preact/compat";
import Main from "./main/Main";

import "./i18n/i18nProvider";

render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("app")!
);
