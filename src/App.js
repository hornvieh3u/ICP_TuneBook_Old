import React, { lazy, useEffect, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

import { APIProvider } from "./context/ApiContext";
import { Toaster } from "react-hot-toast";
import { initFlowbite } from "flowbite";
import Alert from "./components/Alert/Alert";
import { AgentProvider } from "@ic-reactor/react"

const Layout = lazy(() => import("./pages/Layout/Layout"));
const ModalLayout = lazy(() => import("./pages/Modal/ModalLayout"))

require("flowbite/dist/flowbite.js");

function App() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      initFlowbite();
    }, 2000);
  }, []);

  return (
    <>
      <ModalLayout/>
      <AccessibleNavigationAnnouncer />
      <Switch>
        {/* Place new routes over this */}
        <Route index path="/app" component={Layout} />
        {/* If you have an index page, you can remothis Redirect */}
        <Redirect exact from="/" to="/app/login" />      
                
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
      <Alert/>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
