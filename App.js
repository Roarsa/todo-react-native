import React, { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./src/reducers";
import { Provider } from "react-redux";

import ToDoApp from "./src/components/ToDoApp";

const store = configureStore({ reducer: reducer });

export default () => (
  <Provider store={store}>
    <ToDoApp />
  </Provider>
);
