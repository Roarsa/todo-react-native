import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditableTask = ({ removeTask, editTask, setText, text, setEditable }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <TextInput
      placeholder={"Введите название задания"}
      onChangeText={(text) => setText(text)}
      value={text}
      style={{
        width: "83%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 15,
        color: "black",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    />
    <Icon
      name="check-circle"
      size={28}
      color="green"
      style={{
        width: "10%",
        marginLeft: "5%",
        marginRight: "1%",
      }}
      onPress={() => {
        if (text.trim() !== "") {
          editTask({ id: editable, task: text });
        } else {
          removeTask(editable);
        }
        setText("");
        setEditable(-1);
      }}
    />
  </View>
);

export default EditableTask;
