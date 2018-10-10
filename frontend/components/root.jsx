import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ActionCableProvider } from "react-actioncable-provider";

import App from "./app";

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <ActionCableProvider>
          <App/>
        </ActionCableProvider>
      </HashRouter>
    </Provider>
  )
}

export default Root;
