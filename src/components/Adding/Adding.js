import React, { useState, useCallback } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { addTask as addTaskAction } from "../../reducers/todo";
import useAction from "../../hooks/useAction";

const Adding = () => {
  const [task, setTask] = useState("");
  const addTask = useAction(addTaskAction.type);

  const handleAddTask = useCallback(() => {
    if (task.trim() !== "") {
      console.log("in");
      addTask(task);
      setTask("");
    }
  }, [task]);

  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "white",
          borderRadius: 15,
          color: "black",
          paddingLeft: 10,
          paddingRight: 10,
          marginLeft: "1%",
        }}
        placeholder="Добавить новое задание"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Icon
        style={{
          width: "10%",
          marginLeft: "3%",
          marginRight: "1%",
          transform: [{ rotate: "13deg" }],
        }}
        color="#A4003B"
        name="paper-plane"
        size={28}
        onPress={handleAddTask}
      />
    </View>
  );
};

export default Adding;
