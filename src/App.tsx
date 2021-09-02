import * as React from "react";
import loadable from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import "./App.scss";
import { GlobalProvider } from "./store/state";

const Footer = loadable(() => import("./components/organism/Footer"));
const App: React.FC = (): JSX.Element => (
  <>
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Main />
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  </>
);

export default App;
