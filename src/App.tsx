import * as React from "react";
import loadable from "@loadable/component";

import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import "./App.scss";
import { GlobalProvider } from "./store/state";

const Footer = loadable(() => import("./components/organism/Footer"));

const App: React.FC = (): JSX.Element => (
  <>
    <GlobalProvider>
      <Header />
      <Main />
      <Footer />
    </GlobalProvider>
  </>
);

export default App;