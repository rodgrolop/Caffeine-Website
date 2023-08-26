import { render } from "preact";
import Main from "./main/Main";

import "./i18n/i18nProvider";

render(<Main />, document.getElementById("app")!);
