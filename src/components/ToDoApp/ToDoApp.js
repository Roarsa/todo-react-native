import React from "react";
import { SafeAreaView } from "react-native";

import Filter from "../Filter/Filter";
import ToDoList from "../ToDoList";
import Adding from "../Adding";

const ToDoApp = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#EEEEEE",
        height: "100%",
      }}
    >
      <Adding />
      <Filter />
      <ToDoList />
    </SafeAreaView>
  );
};

export default ToDoApp;
