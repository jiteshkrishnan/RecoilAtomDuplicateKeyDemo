import "./styles.css";
import { render } from "react-dom";

import App1 from "./App1";
import App2 from "./App2";

/**
 * Application to demonstrate what happens when you have
 * loaded two atoms with the same key, but with different types
 *
 * Recoil stores nodes in its registry whenever the aomt() constructor is called
 * But if There is already an atom in the registry with the same key, Recoil with throw an error saying "Duplicate atom key <keyname>
 * This is a fata ERROR in production", as part of the atom() constructor call.
 * Though this error comes up, the <RecoilRoot> provider ensures a unique instance of the atom
 *
 */

const rootElement = document.getElementById("root");
render(
  <div className="container-fluid">
    <div
      style={{
        height: "100px"
      }}
      className="row"
    >
      <App1 />
      <App2 />
    </div>
  </div>,
  rootElement
);
