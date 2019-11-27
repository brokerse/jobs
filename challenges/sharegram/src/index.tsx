import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "./screens/Home";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

const App = () => (
  <>
    <Home />
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
