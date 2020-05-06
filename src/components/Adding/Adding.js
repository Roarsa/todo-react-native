import React, { useState } from "react";
import { connect } from "react-redux";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { addTask } from "../../reducers/todo";

const Adding = ({ addTask }) => {
  const [task, setTask] = useState("");

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
        placeholder="Добавить новое задание"
        onChangeText={(text) => setTask(text)}
        value={task}
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
      />
      <Icon
        name="paper-plane"
        size={28}
        color="#A4003B"
        style={{
          width: "10%",
          marginLeft: "3%",
          marginRight: "1%",
          transform: [{ rotate: "13deg" }],
        }}
        onPress={() => {
          if (task.trim() !== "") {
            addTask(task);
            setTask("");
          }
        }}
      />
    </View>
  );
};

const mapDispatchToProps = { addTask };

export default connect(null, mapDispatchToProps)(Adding);
