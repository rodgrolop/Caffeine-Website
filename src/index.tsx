import { render } from "preact";
import { StrictMode } from "preact/compat";
import Main from "./main/Main";

render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("app")!
);
